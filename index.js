const express = require('express')
const app = express()
const port = 5000


app.get("/home",(req, res)=>{
 res.send('Hi welcome to homepage')
})

app.get("/dashboard",(req, res)=>{
 res.send('Hi welcome to dashboard')
})

app.get("/signin",(req, res)=>{
 res.send('Hi please sign in')
})

let students = [
    {id:1, name: "Ayomide", age: 30, dept:"software"},
    {id:2, name: "Ayoade", age: 40, dept:"digital"},
    {id:1, name: "Iremide", age: 30, dept:"app development"}
]

app.get("/", (req, res)=>{
    res.send(students)
})




app.listen(port, ()=>{
    console.log("server starts");
    
})