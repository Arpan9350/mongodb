const express=require('express');
const mongoose=require('mongoose');
const PORT=5000;
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine','ejs');

const db = "mongodb://localhost:27017/form";
const connect =async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true})
        console.log("mongoo connect")
    }
    catch(err){
        console.log("err.message")
    }
}
connect();


const catmodel=require('./db/categorySchema')
 

app.get("/",(req,res)=>{
    res.render('form')
})

app.post("/details",(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let age = req.body.age;
    let address=req.body.address;
    let ins = new catmodel({ name: name, email: email, password:password,age:age,address:address})
    ins.save((err) => {
        if (err) {
            res.send("data already added");

        }
        else {
            res.send("data added");
        }
    })
})



app.listen(PORT,(err)=>{
    if(err)throw err;
    console.log("working on ${PORT}")
})