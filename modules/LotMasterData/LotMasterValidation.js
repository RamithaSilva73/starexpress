const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async LotMasterValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("LotName",req.body.LotName)
        .output("stylematch",0)
        .execute("LotMasterValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 

