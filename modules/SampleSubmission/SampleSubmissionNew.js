
const SampleSubmisstionMssql = require('./SampleSubmissionNewMssql');
const validation = require('./SampleSubmissionValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');


exports.addSampleSubmission= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.SampleSubValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await SampleSubmisstionMssql.addSampleSubmission(req.body);
   res.status(200).send(output);
})


exports.getsamplesubmissionHistory=asyncErrorHandler(async(req,res) =>{
  
  const output=await SampleSubmisstionMssql.gethistorysamplesubmission(req.body);
  res.status(200).send(output);

})