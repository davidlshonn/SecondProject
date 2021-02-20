const Sequelize = require("sequelize");
const connection = require("../config/connection");
//const orm = require("../config/orm.js");

const Job = connection.define("job", {
  title: Sequelize.STRING,
  skills: Sequelize.STRING,
  salary: Sequelize.INTEGER,
  description: Sequelize.STRING,
  location: Sequelize.STRING,
  email_address: Sequelize.STRING
});

Job.sync({force: true}).then(function(){
    Job.create({
        title: "Software Developer",
        skills: "HTML, Javascript, CSS",
        salary: 25000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        location: "Manchester",
        email_address: "user1@mail.com"
    })
    Job.create({
        title: "Lead Developer",
        skills: "HTML, Javascript, CSS, React, Java",
        salary: 55000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        location: "London",
        email_address: "user2@mail.com"
    })
    Job.create({
        title: "Senior Developer",
        skills: "HTML, Javascript, CSS, Python, PHP, C#",
        salary: 45000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        location: "Birmingham",
        email_address: "user3@mail.com"
    })
});

module.exports = Job;
