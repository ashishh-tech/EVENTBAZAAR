const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plannerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planner', required: true },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  eventDate: { type: Date, required: true },
  guestCount: { type: Number, required: true },
  collegeName: { type: String },
  totalAmount: { type: Number, required: true },
  advanceAmount: { type: Number, required: true },
  paymentId: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
