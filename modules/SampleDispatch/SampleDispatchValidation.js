const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SampledispatchValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("SamAbbreviation",req.body.SamAbbreviation)
        .output("stylematch",0)
        .execute("SampleDispatchValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
