const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async RefsampleValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("SamAbbreviation",req.body.SamAbbreviation)
        .output("stylematch",0)
        .execute("RefSampleValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 


