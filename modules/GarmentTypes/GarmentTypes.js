const GarmentTypesMssql=require('./GarmentTypeMssql');

const validation = require('./GarmentTypeValication')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addGarmentTypes= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.GarmentTypeValidation(req,res)      


  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }

  const output = await GarmentTypesMssql.AddGarmentTypes(req.body);
  res.status(200).send(output);
})


exports.getgarmenttypehistory=asyncErrorHandler(async(req,res) =>{
  
  const output=await GarmentTypesMssql.gethistorygarmenttype(req.body);
  res.status(200).send(output);

})


