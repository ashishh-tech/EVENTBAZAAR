const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    // Ensure req.user exists in real app via auth middleware
    const { plannerId, packageId, eventDate, guestCount, collegeName, totalAmount, advanceAmount } = req.body;
    
    const newBooking = new Booking({
      organizerId: req.user ? req.user.id : null, // MOCK Auth for now if no token
      plannerId,
      packageId,
      eventDate,
      guestCount,
      collegeName,
      totalAmount,
      advanceAmount,
      status: 'pending'
    });

    const booking = await newBooking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find() // In real app: filter by req.user.id
      .populate('plannerId', ['name'])
      .populate('packageId', ['name', 'price']);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
