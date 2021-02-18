const Sequelize = require("sequelize");
const orm = require("../config/orm.js");

const jobs = orm.define("job", {
    title: {
        type: Sequelize.STRING
    },
    skills: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    email_address: {
        type: Sequelize.STRING
    }
});