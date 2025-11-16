require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    ssl:{
        required: true,
        rejectUnauthorized: false
    }
});

try{
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
}catch(e){
    console.log(e)
}

module.exports = sequelize;