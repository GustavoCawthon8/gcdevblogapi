const {DataTypes} = require("sequelize");
const db = require("../config/db");


const Post = db.define("post", {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    image: {
        type: DataTypes.BLOB,
        allowNull: false
    },
});

module.exports = Post;