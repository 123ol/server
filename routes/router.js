const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const User = require("../models/adminSchema");


// register user
router.post("/Login",async(req,res)=>{
    const {email,password} =req.body;
   const adminL = await User.findOne({email:email});
        if(adminL){
           if(password === adminL.password){
               res.send({message:"login sucess",user:adminL})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
});



router.post("/Signin",async(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    const admin = await User.findOne({email:email});
        if(admin){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            await user.save();
            console.log(user);
            res.send({ message: "Successfully Registered, Please login now." });
        }
}) 


router.post("/register",async(req,res)=>{
    console.log(req.body);
    const {Lifem,Healthplan,Sst,mealplans,gymworkouts,desc} = req.body;

    if(!Lifem || !Healthplan || !Sst  || !mealplans || !gymworkouts || !desc){
        res.status(422).json("plz fill the data");
    }

        
        else{
            const adduser = new users({
                Lifem,Healthplan,Sst,mealplans,gymworkouts,desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
})


// get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})




module.exports = router;










