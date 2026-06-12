const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running", timestamp: new Date().toISOString() });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admissions", require("./routes/admissionRoutes"));
app.use("/api/notices", require("./routes/noticeRoutes"));
app.use("/api/faculty", require("./routes/facultyRoutes"));
app.use("/api/results", require("./routes/resultRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/school", require("./routes/schoolRoutes"));
app.use("/api/downloads", require("./routes/downloadRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
