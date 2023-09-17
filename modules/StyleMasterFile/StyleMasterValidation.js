const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async StyleMasterValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cTransactionType",req.body.transactiontype)
        .input("cAccountNumber",req.body.AccountNumber)
        .input("cStyleType",req.body.StyleType)
        .input("cGarmentCode",req.body.GarmentCode)
        .input("OracleStyleCode",req.body.StyleCode)
        .output("ValidReturnVal",0)
        .execute("StyleMasterValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
