const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SewsummaryValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("oraclestylecode",req.body.StyleCode)
        .input("Line",req.body.LineNo)
        .input("LotName",req.body.Lot)
        .input("FacCD",req.body.FacCD)
        .output("stylematch",0)
        .execute("SewsummaryValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 