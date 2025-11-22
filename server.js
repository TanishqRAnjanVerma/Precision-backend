import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import precisionRouter from "./routes/precisionRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import adminRouter from "./routes/adminRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import blogRouter from "./routes/blogRoute.js";

// app config

const app = express();
const port = process.env.PORT || 4000;

// middleware

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://precision-frontend.onrender.com",
      "https://precision-admin-panel.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  })
);

// DB Connection

connectDB();

// API Endpoint

app.use("/api/precision", precisionRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
