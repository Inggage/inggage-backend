const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// DB Config
const db = "mongodb://localhost:27017/profiledb"; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Use Routes
const profile = require("./routes/profile");
const cart = require("./routes/cart");
app.use("/api/profile", profile);
app.use("/api/cart", cart);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
