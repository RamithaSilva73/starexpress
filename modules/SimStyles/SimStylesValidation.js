const mssqlcon = require("./../../dbconnection")

class CheckStyle
{
    async SimStylesValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("oraclestylecode",req.body.OracleStyleCode)
        .output("stylematch",0)
        .execute("simStylesValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 
