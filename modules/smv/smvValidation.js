const mssqlcon = require("./../../dbconnection")

class smv
{
    async smvrequestValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("cTrackingNumber",sql.VarChar(50), req.body.TrackingNumber) 
        .input("cGarmentType", req.body.GarmentType)
        .input("cBrand", req.body.Brand)
        .input("cSeason", req.body.Season)
        .input("cPackingMethod", req.body.PackingMethod)
        .input("cFabricContent", req.body.FabricContent)
        .input("cSampleType", req.body.SampleType)
        .input("cCutType", req.body.CutType)
        .input("cBrandNumber", req.body.BrandNumber)
        .input("cSampleRoom", req.body.SampleRoom)
        .input("cLayingType", req.body.LayingType)
        .input("cStylnNumber", req.body.StyleNumber)
        .output("smvmatch",0)
        .execute("smvrequestValidation")
        var ret1 = result.output.smvmatch
        return ret1
        
    }

    async smvrequestpendValidation(req,res) 
    {
        const ret1 = 'OK'
        return ret1
    }
    async smvbulletinValidation(req,res) 
    {
   const ret1 = 'OK'
   return ret1
    }
}
module.exports = new smv(); 


