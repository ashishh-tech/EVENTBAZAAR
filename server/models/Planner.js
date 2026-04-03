const mongoose = require('mongoose');

const plannerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  services: [{ type: String }],
  isVerified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  eventsDone: { type: Number, default: 0 },
  maxCapacity: { type: Number, default: 0 },
  responseTime: { type: String, default: '2 hrs' },
  avatar: { type: String },
  unavailableDates: [{ type: Date }],
}, { timestamps: true });

module.exports = mongoose.model('Planner', plannerSchema);
