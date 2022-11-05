const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize("hyba-mart-dev", "postgres", "root", {
    host: "localhost",
    dialect: "postgres"
});
