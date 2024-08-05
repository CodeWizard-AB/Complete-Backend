import "dotenv/config";
import express from "express";
import cors from "cors";

// * BASIC APPLICATION
const app = express();
const port = process.env.PORT || 4000;

// * BUILT-IN MIDDLEWARE
app.use(cors());

// * BASIC ROUTING
app.get("/", (req, res) => {
	console.log(req.url);
	res.send("Hello World!");
});

app.get("/users", (req, res) => {
	const users = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Davis" },
		{ id: 3, name: "Chris" },
	];
	res.send(users);
});

// * APP LISTENING
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
