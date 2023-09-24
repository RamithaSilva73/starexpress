const LotMasterMssql = require('./LotMasterDataMssql');
const validation = require('./LotMasterValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addLotMasterData= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.LotMasterValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await LotMasterMssql.addLotMasterData(req.body);
   res.status(200).send(output);
})