const express = require('express');
const app = express()
const port = process.env.port || 3000;
const multer = require('multer');

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.use('/uploadImg', express.static('upload'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const fileName = "testimg" + req.params.id + ".jpg";
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage
}).single('myfile');

app.post('/upload/:id', (req, res) => {
    upload(req, res, err => {
        if (err) console.log(err);
    });
})

app.listen(port, () => {
    console.log('server success!!')
});