const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SewsummaryValidationFun(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.Transactiontype)
        .input("oraclestylecode",req.body.StyleCode)
        .input("Line",req.body.LineNo)
        .input("LotName",req.body.Lot)
        .input("FacCD",req.body.FacCd)
        .input("SewDate",req.body.SewDate)
        .output("stylematch",0)
        .execute("SewsummaryValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 

