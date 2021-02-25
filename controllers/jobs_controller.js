// this file offers a set of routes for displaying and saving data to the DB
const express = require("express");
const router = express.Router();
const sequelize = require("../config/connection");
const Job = require("../models/job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get jobs list
router.get("/", (req, res) =>
  // Finding all jobs, and then returning them to the user as JSON.
  // Sequelize queries are asynchronous and results are available to us inside the .then
  Job.findAll()
    .then((jobs) =>
      res.render("jobs", {
        jobs,
      })
    )
    .catch((err) => res.render("error", { error: err }))
);

// Display add job form
router.get("/add", (req, res) => res.render("add"));

// Add a job
router.post("/add", (req, res) => {
  let {
    title,
    skills,
    location,
    salary,
    description,
    email_address,
  } = req.body;
  let errors = [];

  // Validate Fields
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!skills) {
    errors.push({ text: "Please add some skills" });
  }
  if (!location) {
    errors.push({ text: "Please add a location" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!email_address) {
    errors.push({ text: "Please add a contact email" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      skills,
      salary,
      description,
      email_address,
    });
  } else {
    if (!salary) {
      salary = "Unknown";
    } else {
      salary = `£${salary}`;
    }

    // Insert into table
    Job.create({
      title,
      skills,
      location,
      description,
      salary,
      email_address,
    })
      .then((job) => res.redirect("/jobs"))
      .catch((err) => res.render("error", { error: err.message }));
  }
});

// Search for jobs
router.get('/search', (req, res) => {
  let { term } = req.query;

  Job.findAll({
      where: {
          [Op.or]: [
              { skills: { [Op.like]: '%' + term + '%' } },
              { location: { [Op.like]: '%' + term + '%' } },
              { title: { [Op.like]: '%' + term + '%' } }
          ]
      }
  }).then(jobs => res.render('jobs', { jobs }))
      .catch(err => res.render('error', { error: err }));
});

module.exports = router;
