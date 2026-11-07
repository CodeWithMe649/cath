const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  model: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['available', 'rented', 'maintenance'], 
    default: 'available' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Bike', BikeSchema);