const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

// Import Routes
const bikeRoutes = require('./routes/bikes');
const rentalRoutes = require('./routes/rentals');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api/bikes', bikeRoutes);
app.use('/api/rentals', rentalRoutes);

app.get('/', (req, res) => {
  res.send('Bicycle Rental API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));