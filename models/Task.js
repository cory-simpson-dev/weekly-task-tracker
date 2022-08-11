const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  mondayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  tuesdayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  wednesdayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  thursdayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  fridayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  saturdayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  sundayStatus: {
    type: String,
    required: true,
    default: 'unassigned'
  },
  completion: {
    type: Boolean,
    required: true,
    default: false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Task', TaskSchema)