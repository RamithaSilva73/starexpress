const mssqlcon = require("./../../dbconnection")

class threadconsumption
{
    async threadconsumptionValidation(req,res)
    {
        const p = req.body.Lines.length;
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()  
        .input("cTrackingNumber",sql.VarChar(50), req.body.Request.TrackingNumber) 
        .input("cSeason",sql.VarChar(20), req.body.Request.Season)
        .input("cBrand",sql.VarChar(40), req.body.Request.Brand)
        .input("cStyleName",sql.VarChar(25), req.body.Request.StyleNumber)
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


