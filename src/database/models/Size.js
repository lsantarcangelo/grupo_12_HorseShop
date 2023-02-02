module.exports = function (sequelize, dataTypes) {

    let alias = 'Size';

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
        tableName: 'sizes',
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'size_id'
        });
    }

    return Size;
}