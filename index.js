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
// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Welcome to API made by CS25");
});

app.get('/api/students',(req, res) => {
    const student = {
        
            id: students.length + 1, 
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            age: req.body.age,
        
    };

    students.push(student);

    res.status(201).json(students);
});




app.get("/api/students/:studentId", (req, res) => {
    const student = students.find((s)=>s.id === parseInt(req.params.studentId));

    if(!student){
        res.status(404).json({message:"Student not found"})
    } else {
        res.status(200).json(student);
    }


});

// Update a student
app.put("/api/students/:studentId", (req, res) =>{
    const student = students.find((s) => s.id === parseInt(req.params.studentId));
    if (!student)  return res.status(404).json({message : "student not found"});

    student.firstName = req.body.firstName;
    student.lastNametName = req.body.lastName;
    student.age = req.body.age;
    res.status(200).json(student);

});


// Delete a student by ID
app.delete("/api/students/:studentId", (req, res) =>{
    const studentIndex = students.findIndex(
        (s) => s.id === parseInt(req.params.studentId)
    ); 

    if(studentIndex === -1)
        return res.status(404).json({message: "Student not found"});


        const deletedStudent = students.splice(studentIndex, 1);
        res.status(200).json(deletedStudent);    
});



const port = 8000

app.listen(port,() => console.log(`Listening on the port ${port}`));