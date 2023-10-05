const LotMasterMssql = require('./LotMasterDataMssql');
const validation = require('./LotMasterValidation');
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');
const LotMasterDataMssql = require('./LotMasterDataMssql');

exports.addLotMasterData= asyncErrorHandler(async(req, res,next) => {
   const outVal = await validation.LotMasterValidation(req,res)  

   if(outVal.trim()!=='OK') {
     const err = new customError(outVal,406)
     return next(err) 
   }
   const output = await LotMasterMssql.addLotMasterData(req.body);
   res.status(200).send(output);
})


exports.getlotmasterHistory=asyncErrorHandler(async(req,res) =>{
  
  const output=await LotMasterDataMssql.gethistorylotmaster(req.body);
  res.status(200).send(output);

})