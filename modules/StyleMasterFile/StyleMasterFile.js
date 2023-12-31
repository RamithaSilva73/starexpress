
const StyleMasterFileMssql=require('./StyleMasterMssql');

const validation = require('./StyleMasterValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addNewStyle= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.StyleMasterValidation(req,res)      
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }

  const output = await StyleMasterFileMssql.addNewStyle(req.body);
  res.status(200).send(output);

}
)

exports.getHistoryStyles=asyncErrorHandler(async(req,res) =>{
  
      const output=await StyleMasterFileMssql.getHistoryStyles (req.body);
      res.status(200).send(output);
  
})