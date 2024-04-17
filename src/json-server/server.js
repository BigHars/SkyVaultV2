// Import necessary modules
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Loader favorites data fra db.json
let favorites = [];
try {
  const data = fs.readFileSync('db.json', 'utf8');
  favorites = JSON.parse(data).favorites;
} catch (err) {
  console.error('Error reading db.json file:', err);
}

// GET endpoint for aat hente listen af favoriter
app.get('/favorites', (req, res) => {
  res.json(favorites);
});

// POST endpoint til at tilføje en favorit
app.post('/favorites', (req, res) => {
  const newItem = req.body;
  const existingItem = favorites.find(item => item.id === newItem.id);
  if (existingItem) {
    return res.status(400).json({ error: 'Item already exists in favorites' });
  }
  favorites.push(newItem);
  fs.writeFileSync('db.json', JSON.stringify({ favorites }));
  res.json(newItem);
});

// DELETE endpoint for at fjerne
app.delete('/favorites/:id', (req, res) => {
  let itemId = req.params.id;
  favorites = favorites.filter(item => item.id !== itemId);
  fs.writeFileSync('db.json', JSON.stringify({ favorites }));
  res.json({ message: 'Item removed successfully' });
});

// Start serveren
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
