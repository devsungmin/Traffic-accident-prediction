#!/usr/bin/env python
# coding: utf-8

import tensorflow as tf
import numpy as np
import cv2
from tensorflow import keras
import os
import sys
import json

gpus = tf.config.experimental.list_physical_devices('GPU')

if gpus:
    try:
        # Currently, memory growth needs to be the same across GPUs
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)
        logical_gpus = tf.config.experimental.list_logical_devices('GPU')
        print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
    except RuntimeError as e:
        # Memory growth must be set before GPUs have been initialized
        print(e)

# file_path = "service/22_0_100.jpg"
file_path = sys.argv[1]

if len(sys.argv) != 2:
    print("Insufficient arguments")
    sys.exit()
print("File path : " + file_path)

"전처리 단계 초기화"
#path_dir = "./service"
file_list = ['overtaking', 'intersection']
resize = 300
result = len(file_list)
image_list = file_path
# os.listdir(file_path)
images = list()
labels = list()

"학습 모델 설계 변수 초기화"
#path_dir = "./service"
resize = 300
result = len(file_list)
image_list = file_path
# os.listdir(file_path)

"전처리 시작"


def preproc(target_image):
    img = cv2.imread(target_image)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    images.append(cv2.resize(img, dsize=(resize, resize),
                             interpolation=cv2.INTER_LINEAR))
    images_np = np.array(images, dtype='float32')/255.0
    images_np = np.expand_dims(images_np, axis=-1)
    return images_np


"checkpoint loading"
checkpoint_path = "training_1./"+"traffic2/"+"cp-{epoch:04d}.ckpt"
checkpoint_dir = os.path.dirname(checkpoint_path)
cp_callback = tf.keras.callbacks.ModelCheckpoint(
    checkpoint_path, save_weights_only=True, verbose=1, period=5)


def create():
    inputs = keras.Input(shape=(resize, resize, 1))
    bn = keras.layers.BatchNormalization()(inputs)
    conv1 = keras.layers.Conv2D(filters=16, kernel_size=[
                                3, 3], padding='SAME', activation=tf.nn.relu)(bn)
    pool1 = keras.layers.MaxPool2D(padding='SAME')(conv1)

    bn = keras.layers.BatchNormalization()(pool1)
    conv2 = keras.layers.Conv2D(filters=32, kernel_size=[
                                3, 3], padding='SAME', activation=tf.nn.relu)(bn)
    pool2 = keras.layers.MaxPool2D(padding='SAME')(conv2)

    bn = keras.layers.BatchNormalization()(pool2)
    conv3 = keras.layers.Conv2D(filters=64, kernel_size=[
                                3, 3], padding='SAME', activation=tf.nn.relu)(bn)
    pool3_flat = keras.layers.Flatten()(conv3)

    dense3 = keras.layers.Dense(units=256, activation=tf.nn.relu)(pool3_flat)
    drop3 = keras.layers.Dropout(rate=0.4)(dense3)
    logits = keras.layers.Dense(units=result, activation=tf.nn.softmax)(drop3)
    return keras.Model(inputs=inputs, outputs=logits)


images = preproc(image_list)
model = create()
model.summary()
model.compile(loss='categorical_crossentropy',
              optimizer='nadam',
              metrics=['accuracy'])


latest = tf.train.latest_checkpoint(checkpoint_dir)
model.load_weights(latest)
acc = model.predict(images)
print(100*acc[0][0], 100*acc[0][1])
js1 = dict()
js = dict()
file_list.sort()

js["traffic"] = file_list[0]
js1["traffic"] = file_list[1]

js["accuracy"] = acc[0][0]*100
js1["accuracy"] = acc[0][1]*100

jslist = [js, js1]
js1 = jslist
jslist = dict()
jslist["result"] = js1


with open("results/result.json", "w") as json_file:
    json.dump(jslist, json_file)
