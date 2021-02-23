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

// Job.sync({force: true}).then(function(){
//     Job.create({
//         title: "Software Developer",
//         skills: "HTML, Javascript, CSS",
//         salary: 25000,
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         location: "Manchester",
//         email_address: "user1@mail.com"
//     })
// });

//Makes the job model available for all other files and will also create a table
module.exports = Job;
