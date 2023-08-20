import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { routes } from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.static("public"));

// routes
routes(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + " /public/index.html"));
});

const port = 8000;

app.listen(port, () => console.log(`Server is running at ${port}`));
