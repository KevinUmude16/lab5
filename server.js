// Import the Express framework
const express = require('express');
const app = express(); // Create an Express application
const port = 3000; // Define the port number for the server

// Import body-parser middleware to handle form submissions
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Enable URL-encoded body parsing

// Define a route that greets the user by name and surname
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`); // Send a greeting message as a response
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Welcome message for the root
});

// Error handling 
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(500).send('Something went wrong!'); // Send a generic error message to the client
});

// Define a route to get a list of movies
app.get('/api/movies', (req, res) => {
    // Sample movie data
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ whatever: movies }); // Send the movie data as a JSON response
});

// Serve the index.html file when the /index route is accessed
app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/index.html"); // Send the HTML file located in the same directory
});

// Handle POST requests to /name and respond with a goodbye message
app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + " " + req.body.lastname); // Respond with a farewell message
});

// Define a route that greets the user based on query parameters
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + " " + req.query.lastname); // Send a greeting message using query parameters
});

// Handle POST requests to /name and respond with a greeting message
app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Extract first name from the request body
    const lastname = req.body.lastname; // Extract last name from the request body
    res.send(`Hello ${firstname} ${lastname}`); // Respond with a greeting message
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log the server status
});
