require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(cors({
	origin: "http://127.0.0.1:5173"  // your frontend URL
}));

// import routes
const examRoutes = require('./routes/examRoutes');

app.use('/api/exams', examRoutes);


mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(process.env.PORT, () => {
			console.log(`listening for requests on port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.error('Error connecting to MongoDB:', err);
	});
