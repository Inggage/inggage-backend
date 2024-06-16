const express = require("express");
const bodyParser = require("body-parser");
const personRoutes = require("./routes/person");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/persons", personRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
