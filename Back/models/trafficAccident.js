'use strict'

module.exports = (sequelize, DataTypes) => {
    const trafficAccident = sequelize.define('trafficAccident', {
        accidentType: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        info: {
            type: DataTypes.JSON,
            allowNull: false
        },
    }, {});

    trafficAccident.associate = function (models) {

    };
    return trafficAccident;
}