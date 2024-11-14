const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/router');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

const MONGO_URI = "mongodb+srv://guthavarirameshc:Python25@info6150.qmw4n.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error("MongoDB connection error:", error));

app.use('/api', userRoutes);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
