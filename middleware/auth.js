const customError = require('./../utilities/CustomError')
const jwt=require('jsonwebtoken')
require('dotenv').config();

module.exports=function(req,res,next){
  if (req.headers.authorization && req.headers.authorization.startsWith('bearer'))
  {
    const token=req.headers.authorization.split(' ')[1];
    //if (token==null) res.sendStatus(401)
    if (token==null)     
    {
      const err = new customError('Invalid Token',401)
      return next(err) 
    }
 
    jwt.verify(token,process.env.token_key,(err,user)=>{
    if (err) 
    {
      const err = new customError('Invalid Token',401)
      next(err) 
    }
    req.user=user
    next()
    })
  }
  else
  {
    const err = new customError('Invalid Authorization Or URL',404)
    next(err) 
  }
}