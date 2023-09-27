const GetAssetInv=require('./AssetInventory.mssql');


const validation = require('./AssetInventoryValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.getAssetInventory= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.AssetInvValidation(req,res)      


  if(outVal.trim()!=='OK')
    {
    const err = new customError(outVal,406)
    return next(err) 
    }

    const output = await GetAssetInv.GetAssetInventory (req.body);
    res.status(200).send(output);
    }
)
