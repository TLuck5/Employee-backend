const mongoose = require("mongoose");
const mongoURI =
    "mongodb+srv://tejasupy1999:Upadhyay%401999@cluster0.yljohtn.mongodb.net/Employee-Management";


const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDb connected")
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectDB;