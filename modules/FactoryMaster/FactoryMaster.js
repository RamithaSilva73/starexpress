const FactoryMasterMssql=require('./FactoryMasterMssql');

const validation = require('./FactoryValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addFactory= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.FactoryValidation(req,res)      


  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }

  const output = await FactoryMasterMssql.AddFactory(req.body);
  res.status(200).send(output);
})




///
//class Factory{
//
//  
//    async getAllFactory(req,res) {
//
//        try {
//            const output=await FactoryMasterMssql.getAllFactores();
//            res.send(output);
//        }
//
//        catch(error){
//            res.status(500).json(error)
//        }
//
//    }
//}
//
//module.exports = new Factory();
