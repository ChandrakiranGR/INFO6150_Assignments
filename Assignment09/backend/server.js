const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/router');

const app = express();
const port = 3000;
app.use(cors());
const MONGO_URI = "mongodb+srv://guthavarirameshc:Python25@info6150.qmw4n.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection
    .once("open", () => console.log('Connected to MongoDB'))
    .on("error", (error) => console.log("MongoDB Connection Error: " + error));

    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes); // Prefix routes with `/api`
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
