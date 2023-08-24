const mssqlcon = require("../dbconnection")

class CheckStyle
{
    async checkOracleStyle(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("oraclestylecode",req.body.OracleStyleCode)
        .output("stylematch",0)
        .execute("spOracleStyleCheck")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle();

