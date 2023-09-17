const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async CustomerValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .output("ValidReturnVal",0)
        .execute("CustomerValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
