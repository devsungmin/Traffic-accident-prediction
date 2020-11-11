'use strict'

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        originalPath: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, {});

    return Image;
};