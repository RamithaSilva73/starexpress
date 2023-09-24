const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SampleSubValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("SampleTypeCode",req.body.SampleTypeCode)
        .output("stylematch",0)
        .execute("SampleSubmisstionValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
