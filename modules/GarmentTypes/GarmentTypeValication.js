const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async GarmentTypeValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.Transactiontype)
        .output("ValidReturnVal",0)
        .execute("GarmentTypeValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
