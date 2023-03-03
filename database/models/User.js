module.exports = (sequelize, dataTypes)=>{
    let alias='Users'
    let cols = {
            id: {
                type: dataTypes.INTEGER,
                initialAutoIncrement: true,
                primaryKey: true,
            },
            firstname: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            user_img:{
                type: dataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: dataTypes.DATE,
            },          
            updated_at: {
                type: dataTypes.DATE,
            },          
        }
                
    let config =  {
        
        tableName: 'Users',
        timestamps: false,
        }
    
        const User = sequelize.define(alias, cols, config)

        // User.associate = (models)=>{
        //     User.hasMany(models.Product, {
        //         as: 'user',
        //         foreignKey: 'created_by'
        //     })
        // }

    return User;
    
};