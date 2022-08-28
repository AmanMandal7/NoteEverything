const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/NoteEverything";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });

        console.log(`MongoDB connected successfully: ${conn} `)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
