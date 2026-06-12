const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const existingAdmin = await User.findOne({ role: "superadmin" });
    if (existingAdmin) {
      console.log("Admin already exists:", existingAdmin.username);
      process.exit(0);
    }

    const admin = await User.create({
      username: "admin",
      email: "admin@school.com",
      password: "admin123",
      fullName: "School Administrator",
      role: "superadmin",
    });

    console.log("Admin created successfully!");
    console.log("Username: admin");
    console.log("Password: admin123");
    console.log("Please change the password after first login!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seedAdmin();
