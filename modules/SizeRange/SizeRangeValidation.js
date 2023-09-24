const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SizeRangeValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("oraclestylecode",req.body.StyleCode)
        .output("stylematch",0)
        .execute("SizeRangeValidation")
        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
