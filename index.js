// functions/bfhl.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
    // Extract data from the request
    const data = req.body.data;
    const status = "true";
    // Calculate user_id, email, and roll_number
    const user_id = "Dixit_Joshi_05032001";
    const email = "dixit.joshi2020@vitbhopal.ac.in";
    const roll_number = "20BCE10004";

    // Extract numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Calculate highest alphabet
    const highest_alphabet = [alphabets.reduce((a, b) => (a > b ? a : b))];

    // Prepare the response JSON
    const response = {
        status,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet,
        is_success: true,
    };

    res.json(response);
});

app.get("/bfhl", (req, res) => {
    // For the GET request, return the operation_code
    res.status(200).json({ operation_code: 1 });
});

module.exports.handler = app;
app.listen(5000, () => {
    console.log("Server running on port: ", 5000);
})