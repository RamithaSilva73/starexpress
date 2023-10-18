
const SewsummaryMssql = require('./Sewsummary.mssql');
const validation = require('./SewsummaryValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addSewsummary= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.SewsummaryValidation(req,res)  
   console.log(outVal)
   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await SewsummaryMssql.addSewsummary(req.body);
   res.status(200).send(output);
})



exports.getSewsummaryHistory=asyncErrorHandler(async(req,res) =>{
  
  const output=await SewsummaryMssql.gethistorySewsummary(req.body);
  res.status(200).send(output);

})