const express = require("express");

const app = express();

const students = [
    {
    id:1, 
    firstName:"Lionel", 
    lastName:"Kabore",
    age:20,
    },
    {
    id:2, 
    firstName:"Farel", 
    lastName:"Kabore",
    age:17,

    },
    {
    id:3, 
    firstName:"Christian", 
    lastName:"Kabore",
    age:9,

    },
];


app.get("/", (req, res) => {
    res.json("Welcome to my API");
});

const port = 8000

app.listen(port,() => console.log(`Listening on the port ${port}`));