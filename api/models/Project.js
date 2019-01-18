const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Project
let Project = new Schema({
  prj_name: {
    type: String
  },
  prj_desc: {
    type: String
  },
  priority: {
    type: Number
  }
},{
    collection: 'project'
});

module.exports = mongoose.model('Project', Project );