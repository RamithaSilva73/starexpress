const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async SampleSubValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("SampleType",req.body.SampleType)
        .input("SampleRoom",req.body.SamRoomName)
        .output("stylematch",0)
        .execute("SampleSubmissionValidation")
     
        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
