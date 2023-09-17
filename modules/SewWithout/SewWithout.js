
const validation = require('./SewWithoutValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');
const SewWithoutMssql = require('./SewWithoutMssql');

exports.addSewWithout= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.SewWithoutValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await SewWithoutMssql.addSewWithout(req.body);
   res.status(200).send(output);
})