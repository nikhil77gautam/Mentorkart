const express = require("express");
const mongoose = require("mongoose");
const mailRoutes = require("./Router/contactControllerApi");
const app = express();
const cors=require("cors")
app.use(express.json());
app.use(cors())
// Database Connection to mongoDB

const dotenv = require("dotenv")
dotenv.config()

mongoose
  .connect(
    process.env.DATABASE_URL
  )

  .then(() => console.log("database connected"))
  .catch((err) => console.log("error connecting database", err.message));

app.use("/mail", mailRoutes);

// Start Server:

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
