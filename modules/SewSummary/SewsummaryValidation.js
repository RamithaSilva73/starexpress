const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SewsummaryValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("Line",req.body.LineNo)
        .input("LotName",req.body.Lot)
        .input("FacCD",req.body.FacCD)

        .input("SewDate", req.body.SewDate)

        .output("stylematch",0)
        .execute("SewsummaryValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
