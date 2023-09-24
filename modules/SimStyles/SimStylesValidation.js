const mssqlcon = require("./../../dbconnection")

class CheckStyle
{
    async SimStylesValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumberMain",req.body.MainStyleTrackingNumber)
        .input("TrackingNumberSimilar",req.body.SimilarStyleTrackingNumber)
        .output("stylematch",0)
        .execute("SimStylesValidation")
        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
