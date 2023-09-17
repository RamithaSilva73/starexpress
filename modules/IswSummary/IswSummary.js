const IswSummaryMssql = require('./IswSummaryMssql');
const validation = require('./IswSummaryValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addIswSummary= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.IswSummaryValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await IswSummaryMssql.addIswSummary(req.body);
   res.status(200).send(output);
})