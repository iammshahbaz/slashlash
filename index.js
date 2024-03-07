const express = require("express")
const {Sequelize,DataTypes} =  require("sequelize")

const app = express()
const PORT =3000;

const sequelize = new Sequelize('Shahbaz', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
  const Quote = sequelize.define('Quote', {
    _id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorSlug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
});

sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Started")
    })
})