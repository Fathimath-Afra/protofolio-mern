const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status:String,
  fullDescription: String, 
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  image: String,
  screenshots: [String],
  coreFeatures:[String],
  plannedFeatures:[String],
  testCredentials: [
      {
        role: String,      
        email: String,
        password: String
      }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);