const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
connectDB();
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running...")
})

// app.get("/api/notes", (req, res) => {
//     res.send(notes)
// })

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
