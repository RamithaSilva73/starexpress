const mssqlcon = require("./../../dbconnection")

class threadconsumption
{
    async threadconsumptionValidation(req,res)
    {
        const p = req.body.Lines.length;
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cStyleNumber", req.body.Request.StyleNumber)
        .input("cStyleCode", req.body.Request.StyleCode)
        .input("cSeason", req.body.Request.Season)
        .input("cBrand", req.body.Request.Brand)
        .output("threadmatch",0)
        .execute("thrdconsmptionValidation")
        var ret1 = result.output.threadmatch
        if (p == 0){
        ret1 = 'Line Details Cannot Be Empty'}

        return ret1
       
    }

    async threadconsumptionValidationpend(req,res) 
    {
        const ret1 = 'OK'
        return ret1
    }
    async threadconsumptionValidationall(req,res) 
    {
   const ret1 = 'OK'
   return ret1
    }
}
module.exports = new threadconsumption(); 


