import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./database/main";

// * DB CONNECTION
connectDB();

// * BASIC APPLICATION
const app = express();

// * BUILT-IN MIDDLEWARE
app.use(cors());
