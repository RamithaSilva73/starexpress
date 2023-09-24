const mssqlcon = require("./../../dbconnection")
sql=require('mssql');

//console.log("TT");

class sqlError
{
    async FactoryValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.Transactiontype)
        .input("bModular",sql.Int,req.body.Modular)
        .output("ValidReturnVal",0)
        .execute("FactoryValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
