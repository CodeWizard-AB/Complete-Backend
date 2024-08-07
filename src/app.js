import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { router } from "./routes/userRoute.js";

export const app = express();

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// * ROUTES
app.use("/api/v1/users", router);
