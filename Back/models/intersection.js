'use strict'

module.exports = (sequelize, DataTypes) => {
    const intersection = sequelize.define('intersection', {
        traffic: {
            type: DataTypes.STRING(32)
        },
        negligence: {
            type: DataTypes.JSON
        },
        legalBasis: {
            type: DataTypes.JSON
        },
        judicialPrecedent: {
            type: DataTypes.JSON
        }
    }, {});

    intersection.associate = function (models) {

    };

    return intersection;
}