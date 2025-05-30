const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/mern";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
