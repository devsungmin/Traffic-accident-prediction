'use strict'

module.exports = (sequelize, DataTypes) => {
    const overtaking = sequelize.define('overtaking', {
        traffic: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        negligence: {
            type: DataTypes.JSON,
            allowNull: true
        },
        legalBasis: {
            type: DataTypes.JSON,
            allowNull: true
        },
        judicialPrecedent: {
            type: DataTypes.JSON,
            allowNull: true
        }
    }, {});

    overtaking.associate = function (models) {

    };
    return overtaking;
}