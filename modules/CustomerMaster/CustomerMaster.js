const NewCoustomer=require('./CustomerMaster.mssql');


const validation = require('./CustomerValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addNewCustomer= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.CustomerValidation(req,res)      


  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }

  const output = await NewCoustomer.AddNewCustomer(req.body);
  res.status(200).send(output);
})
