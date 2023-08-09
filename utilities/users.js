const express = require('express');
const router = express.Router();
const mssqlcon = require('./../dbconnection');



const jwt=require('jsonwebtoken')


// allowed this api only if role=super
// TODO -- DEVELOP remaining  routes


require('dotenv').config();

    router.post('/',(req,res)=>{
    
        try {

            addUser(req,res);
    
        } catch (error) {
            //log event in the database & respond 
            console.log(error);
        }
        
    })

    router.put('/',(req,res)=>{
    
        try {

            updateuser(req,res);
    
        } catch (error) {
            //log event in the database and respond
            console.log(error);
        }
        
    })

    router.get('/',(req,res)=>{
    
        try {

            listusers(req,res);
    
        } catch (error) {
            //log event in the database and respond
            console.log(error);
        }
        
    })

    router.delete('/:username',(req,res)=>{
    
        try {

            deleteuser(req,res);
    
        } catch (error) {
            //log event in the database and respond
            console.log(error);
        }
        
    })

    async function getUserRole(req,res){

        jwt.verify(token,process.env.token_key,(err,user)=>{
            req.user=user
        })

        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("username", req.user)
        .output("role","")
        .execute("spgetUserRole");

        return result.output.role
    }


    async function addUser(req,res){

        const output = await getUserRole(req,res);
        if (output=="super"){

            const conn = await mssqlcon.getConnection();
            const res = await conn.request()
            .input("username", req.body.username)
            .input("password", req.body.password)
            .input("role", req.body.role)
            .execute("addUser");
            return res;

        }
        else
        {
            res.send("Only the super user allowed adding users")
        }
    }

    module.exports=router