const express = require("express");

const app = express();

const PORT = 3001;


app.use(express.json());


const students = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Sarah"
    }
];


app.get("/students", function(req, res) {

    console.log(
        "Student Service received:",
        req.method,
        req.url
    );

    res.json(students);

});


app.listen(PORT, function() {

    console.log(
        `Student Service running on http://localhost:${PORT}`
    );

});