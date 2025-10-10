import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connect() {
    mongoose.connect(process.env.MONGO_URI)
    .then(function() {
        console.log('Connected to MongoDB Atlas successfully');
    })
    .catch(err => {
        console.log(err);
    });
}

export default connect;
