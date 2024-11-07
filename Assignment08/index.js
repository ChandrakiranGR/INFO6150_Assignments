const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const MONGO_URI = "mongodb+srv://guthavarirameshc:Python25@info6150.qmw4n.mongodb.net/?retryWrites=true&w=majority&appName=INFO6150";
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.use('/user', userRoutes);
app.listen(3000, () => console.log(`Server running on port 3000`));
