// Import our Express dependency
const express = require("express");
const path = require("path");

// Create a new server instance
const app = express();
// Port number we want to use on this server
const PORT = 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));