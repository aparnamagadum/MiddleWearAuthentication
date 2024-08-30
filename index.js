//here we perform temparary operations(get post put delete);
import express from 'express';
import { Info } from './middlewear.js';
const app=express();
const port=5959;
const hostName="127.0.0.1";
app.use(express.json());
const students = [
    { id: 1, name: "Alice Johnson", age: 20, score: 85, grade: "B" },
    { id: 2, name: "Bob Smith", age: 22, score: 92, grade: "A" },
    { id: 3, name: "Charlie Brown", age: 19, score: 78, grade: "C" },
    { id: 4, name: "David Williams", age: 21, score: 88, grade: "B" },
    { id: 5, name: "Eve Davis", age: 23, score: 95, grade: "A" }
  ];
//middlewear
app.use(Info);
//get function
app.get("/",function(req,res){
    res.send(students);
})
//post function
app.post("/addStudents" , function(req,res){
    const data=req.body;
    students.push(data);
    res.send(students);
})
//put function
app.put("/updateStudents/:id",function(req,res){
    //get an id
    const {id} =req.params;
    const putData=req.body;
   const Putresult = students.map((ele)=>{
      return ele.id===Number(id)?putData:ele;
    });
    res.send(Putresult);
});
//delete function
app.delete("/deleteStudent/:id" ,function(req,res){
    const {id}=req.params;
    const Deleteresult=students.filter((ele)=>{
        return ele.id!==Number(id);
    });
    res.send(Deleteresult);
});
//starts the server
app.listen(port , hostName , ()=> console.log("server running on post "+port));