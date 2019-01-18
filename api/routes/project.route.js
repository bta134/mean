const express = require('express');
const app = express();
const projectRoutes = express.Router();

// Require Project model in our routes module
let Project = require('../models/Project');

// Defined store route
projectRoutes.route('/add').post(function (req, res) {
  let project = new Project(req.body);
  project.save()
    .then(project => {
      res.status(200).json({'project': 'project in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
projectRoutes.route('/').get(function (req, res) {
    Project.find(function (err, projects){
    if(err){
      console.log(err);
    }
    else {
      res.json(projects);
    }
  });
});

// Defined edit route
projectRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Project.findById(id, function (err, project){
      res.json(project);
  });
});

//  Defined update route
projectRoutes.route('/update/:id').post(function (req, res) {
    Project.findOneAndUpdate(req.params.id, function(err, next, project) {
    if (!project)
      return next(new Error('Could not load Document'));
    else {
        project.prj_name = req.body.prj_name;
        project.prj_desc = req.body.prj_desc;
        project.priority = req.body.priority;

        priority.save().then(priority => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
projectRoutes.route('/delete/:id').get(function (req, res) {
    Project.findByIdAndDelete({_id: req.params.id}, function(err, project){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = projectRoutes;