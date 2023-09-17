const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async CustomerValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cTransactionType",req.body.TransactionType)
        .output("ValidReturnVal",0)
        .execute("AssetGrnValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
