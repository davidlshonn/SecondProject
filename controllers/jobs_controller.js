// const express = require("express");
// const router = express.Router();
const Job = require("../models/job.js");

// // get job list
// router.get("/", function (req, res){
//     job.findAll()
//     .then(job => res.render("jobs", {
//         jobs
//     })) 
// })
// .catch(err => res.render("error", {error: err}));

// // display job form
// router.get("/add", (req, res) => res.render("add"));

// // add a job
// router.post("/add", (req, res) => {
//     let { title, skills, salary, description, email_contact } = req.body;
//     let errors = [];
// })

// Routes
module.exports = (app) => {
    // Get all Jobs
    app.get('/api/all', (req, res) => {
      // Finding all Jobs, and then returning them to the user as JSON.
      // Sequelize queries are asynchronous and results are available to us inside the .then
      Job.findAll({}).then((results) => res.json(results));
    });
  
    // // Add a Job
    // app.post('/api/new', (req, res) => {
    //   console.log('Job Data:');
    //   console.log(req.body);
  
    //   Job.create({
    //     author: req.body.author,
    //     body: req.body.body,
    //     created_at: req.body.created_at,
    //     // `results` here would be the newly created Job
    //   }).then((results) => res.json(results));
    // });
  };
  