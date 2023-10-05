const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async AssetInvValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cInvYear",req.body.InventoryYear)
        .input("cInvMonth",req.body.InventoryMonth)
          
        .output("ValidReturnVal",0)
        .execute("AssetInvValidation")

        return result.output.ValidReturnVal
    }
}
module.exports = new sqlError(); 
