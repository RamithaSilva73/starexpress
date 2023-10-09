const ITAssetMssql = require('./ITAssetMsSql.js')
const validation = require('./ITAssetValidation.js')
const customError = require('../../utilities/CustomError.js')
const asyncErrorHandler = require('../../utilities/asyncErrorHandler.js');

exports.getITAsset = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.ITAssetValidation(req,res)      
 
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }
  const output = await ITAssetMssql.getITAsset(req.body);
  res.status(200).send(output);
})

