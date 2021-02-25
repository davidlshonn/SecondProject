//Sequelize references the standard library
const Sequelize = require("sequelize");
//sequelize references the connection to the database
const sequelize = require("../config/connection");

//Create a job model that matches up with the database
const Job = sequelize.define('job', {
    title: {
      type: Sequelize.STRING
    },
    skills: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    salary: {
      type: Sequelize.STRING
    },
    email_address: {
      type: Sequelize.STRING
    }
  });

  //Syncs with database
  Job.sync().then(() => {
    console.log('table created');
});

//Makes the job model available for all other files and will also create a table
module.exports = Job;
