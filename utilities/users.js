const express = require('express');
const router = express.Router();
const mssqlcon = require('./../dbconnection');
const jwt=require('jsonwebtoken')

// allowed this api only if role=super
// TODO -- DEVELOP remaining  routes

require('dotenv').config();

    router.post('/',(req,res)=>{
        addUser(req,res);
    })

    router.put('/',(req,res)=>{
        updateUser(req,res);   
    })

    router.get('/:username',(req,res)=>{        
        getuser(req,res);
    })


    async function getUserRole(username){
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("username", username)
        .output("role","")
        .execute("spgetUserRole");
        return result.output.role
    }


    async function addUser(req,res){
        try{
            const output = await getUserRole(req,res);
            if (output=="super"){

                const conn = await mssqlcon.getConnection();
                const res = await conn.request()
                .input("username", req.body.username)
                .input("password", req.body.password)
                .input("role", req.body.role)
                .execute("addUser");
                
                res.send(res)
              

            }
            else
            {
                res.send("Only the super user allowed adding users")
            }
        }catch(error){
            res.send(error)
        }
        
    }


    async function updateUser(req,res){
        try{
            const conn = await mssqlcon.getConnection();
            const res = await conn.request()
            .input("username", req.body.username)
            .input("password", req.body.password)
            .execute("spUpdateUser");
           res.send(res);
        }catch(error){
            res.send(error)
        }
        
    }


    async function getuser(req,res){
        const user = req.params.username;
        console.log(user)

        if (!user) {
            res.status(400).send('email is not passed')
        }

        try{

        const output = await sqlgetUser(user);
        res.send(output);
       }catch(error){
        res.send(error)
       }
        
    }


    async function sqlgetUser(username){

        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("username", username)
        .execute("spgetUser");

        return result.recordset[0]
    }


    module.exports=router