//const { response } = require("express")
const express = require('express')
const axios = require("axios")

const app = express()

const errorLogger = (err,request,response,next)=>
{
    console.log( `error ${err.message}`) 
    next(err)
}

const errorResponder = (error, request, response, next) => 
{
    response.header("Content-Type", 'application/json')
      
    const status = error.status || 400
    response.status(status).send(error.message)
}

const invalidPathHandler = (request, response, next) => 
{
    response.status(400)
    response.send('Invalid Path')
}

module.exports = { errorLogger, errorResponder, invalidPathHandler }