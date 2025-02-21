const express = require("express");
const cors = require("cors");
require("dotenv").config();



// Create an Express application, set port for server
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});