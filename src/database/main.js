import mongoose from "mongoose";
import { databaseName } from "../constants";

export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(
			`${process.env.MONGODB_URL}/${databaseName}`
		);
		console.log(connection);
	} catch (error) {
		console.log("MongoDB error:", error.message);
		process.exit(1);
	}
};
