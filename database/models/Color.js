module.exports = function (sequelize, dataTypes) {

    let alias = 'Color';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        is_active: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: 'colors',
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'color_id'
        });
    }

    return Color;
}