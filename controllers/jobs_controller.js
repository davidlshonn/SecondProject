const express = require("express");
const router = express.Router();
const job = require("../models/job.js");

// get job list
router.get("/", function (req, res){
    job.findAll()
    .then(job => res.render("jobs", {
        jobs
    })) 
})
.catch(err => res.render("error", {error: err}));

// display job form
router.get("/add", (req, res) => res.render("add"));

// add a job
router.post("/add", (req, res) => {
    let { title, skills, salary, description, email_contact } = req.body;
    let errors = [];
})