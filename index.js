// 1. Install necessary packages
// npm init -y
// npm install express

// 2. Create your main file (e.g., index.js)
const express = require('express');
const app = express();
const port = 3000;

// 3. Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 4. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
