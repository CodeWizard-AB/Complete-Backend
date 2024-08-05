import mongoose from "mongoose";
import { databaseName } from "../constants.js";

export const connectDB = async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URL}/${databaseName}`);
		console.log("MongoDB connected");
	} catch (error) {
		console.log("MongoDB error:", error.message);
		process.exit(1);
	}
};
