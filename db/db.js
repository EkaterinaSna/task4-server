const Sequelize = require("sequelize");

const sequelize = new Sequelize("usersdb", "root", "Snarskaya1999", {
    dialect: "mysql",
    host: "localhost",
    port: "3306"
});

module.exports = sequelize;