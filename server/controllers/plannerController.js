const Planner = require('../models/Planner');

exports.getPlanners = async (req, res) => {
  try {
    const planners = await Planner.find().populate('userId', ['name', 'email']);
    res.json(planners);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPlannerById = async (req, res) => {
  try {
    const planner = await Planner.findById(req.params.id).populate('userId', ['name', 'email']);
    if (!planner) return res.status(404).json({ msg: 'Planner not found' });
    res.json(planner);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Planner not found' });
    res.status(500).send('Server error');
  }
};
