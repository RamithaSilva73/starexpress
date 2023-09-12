
const express = require('express');
const router = express.Router();
const mssqlcon = require('./../dbconnection');

const jwt=require('jsonwebtoken')
require('dotenv').config();

     router.post('/',(req,res)=>{
       try {
            checkUser(req,res);
        } catch (error) {
            console.log(error);
        }
    }) 

  async function checkUser(req,res){
    const output = await checkUserExist(req,res);
    
    if (output==0){
        res.send("Invalid Login");
    }else{
        const username=req.body.username;
        const user={name:username}
        const password=req.body.password;

        const token=jwt.sign(user,process.env.token_key,{expiresIn:'24hr'});
        res.send(token);
    }
  }

   async function checkUserExist(req,res) {

   const conn = await mssqlcon.getConnection();
   const result = await conn.request()
   .input("username", req.body.username)
   .input("password", req.body.password)
   .output("usermatch",0)
   .execute("spUserCheck");
    return result.output.usermatch
  }
module.exports=router





