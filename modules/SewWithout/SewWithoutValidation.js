const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SewWithoutValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("Line",req.body.Line)
        .input("LotName",req.body.Lot)
        .input("FacCd",req.body.FactoryCd)
        .output("stylematch",0)
        .execute("SewWithoutValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
