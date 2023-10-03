const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async StyleMasterValidation(req,res)
    {
        //console.log=('TT')
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cTransactionType",req.body.TransactionType)
        .input("cAccountNumber",req.body.AccountNumber)
        .input("cStyleType",req.body.StyleType)
        .input("cGarmentCode",req.body.GarmentCode)
        .input("cTrackingNumber",req.body.TrackingNumber)
        .input("cShipFty",req.body.ShipFty)
        .input("cWashNonWash",req.body.WashNonWash)
        .output("ValidReturnVal",0)
        .execute("StyleMasterValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
