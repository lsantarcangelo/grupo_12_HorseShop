module.exports = function(sequelize, dataTypes) {
    
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING
        },

        description: {
            type: dataTypes.STRING(1234)
        },

        product_img: {
            type: dataTypes.STRING
        },

        category_id: {
            type: dataTypes.INTEGER
        },

        color_id: {
            type: dataTypes.INTEGER
        },

        size_id: {
            type: dataTypes.INTEGER
        },

        stock: {
            type: dataTypes.INTEGER
        },

        price: {
            type: dataTypes.DECIMAL(10,2)
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
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });

        Product.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'color_id'
        });

        Product.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'size_id'
        });
    }

    return Product;
}