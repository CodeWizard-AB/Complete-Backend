import "dotenv/config";
import { connectDB } from "./database/main.js";
import { app } from "./app.js";

connectDB()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("Server is running at port", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log("MongoDB connection failed!", error.message);
	});
