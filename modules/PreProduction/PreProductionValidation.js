const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async PreProdValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("TrackingNumber",req.body.TrackingNumber)
        .input("FtyCode",sql.VarChar(3),req.body.FtyCode)
        .output("stylematch",0)
        .execute("PreProdValidation")
        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
