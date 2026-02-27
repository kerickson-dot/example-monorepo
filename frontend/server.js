const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve a simple homepage
app.get("/", (req, res) => {
  res.send("Hello from the frontend service!");
});

app.listen(PORT, () => {
  console.log(`Frontend service running on port ${PORT}`);
});
