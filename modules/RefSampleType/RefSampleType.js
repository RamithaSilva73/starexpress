
const RefSampleTypeMSSql = require('./RefSampleTypeMssql');
const validation = require('./RefSampleValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addRefSampleType= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.RefsampleValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await RefSampleTypeMSSql.addRefSampleType(req.body);
   res.status(200).send(output);
})