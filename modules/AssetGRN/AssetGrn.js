const NewAssetGrn=require('./AssetGrn.mssql');


const validation = require('./AssetGrnValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addNewGRN= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.CustomerValidation(req,res)      


  if(outVal.trim()!=='OK')
    {
    const err = new customError(outVal,406)
    return next(err) 
    }

    const output = await NewAssetGrn.addNewAssetGrn(req.body);
    res.status(200).send(output);
    }
)
