const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  plannerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planner', required: true },
  name: { type: String, required: true },
  description: { type: String },
  features: [{ type: String }],
  maxCapacity: { type: Number },
  price: { type: Number, required: true },
  isPopular: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
