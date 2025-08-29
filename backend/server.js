import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB & Cloudinary
connectDB();
connectCloudinary();

// Allowed frontend domains
const allowedOrigins = [
  "https://e-commerce-kappa-seven-25.vercel.app",  // Customer frontend
  "https://vercel.com/arjun-p-manojs-projects/forever-ecommerce", // Admin frontend
  "http://localhost:5173", // Local dev customer
  "http://localhost:5174"  // Local dev admin
];

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS not allowed from this origin"), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true, // needed for cookies or Authorization headers
  })
);

// Handle preflight requests
app.options("*", cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(port, () => console.log("Server Started on Port:" + port));
