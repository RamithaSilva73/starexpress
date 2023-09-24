
const SampleDispatchMssql = require('./SampleDispatchMssql');
const validation = require('./SampleDispatchValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addSampleDispatchFunction= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.SampledispatchValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await SampleDispatchMssql.addSampleDispatchFunction(req.body);
   res.status(200).send(output);
})