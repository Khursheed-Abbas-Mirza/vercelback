const express = require('express');
const app = express();
app.set("view engine", "ejs");
// Middleware to parse JSON
app.use(express.json());
app.get("/", (req, res) => {
    res.render("index");
})
// Sample GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your Express.js backend on Vercel!' });
});

// Sample POST endpoint
app.post('/api/data', (req, res) => {
  const { input } = req.body;
  res.json({ received: input, status: 'Success' });
});
app.listen(3000, () => console.log('Server running on port 3000'));
// Export the app for Vercel (no app.listen here)
module.exports = app;