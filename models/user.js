module.exports = (sequelize, Sequelize) => {
    return  sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
}