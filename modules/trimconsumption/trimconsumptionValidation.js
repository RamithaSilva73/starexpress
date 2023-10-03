const mssqlcon = require("./../../dbconnection")

class trimconsumption
{
    async trimconsumptionValidation(req,res) {
     
        const conn = await mssqlcon.getConnection();
        const p = req.body.lines.length;
        for(let i = 0; i < p; i++){
            const result = await conn.request()
            .input("cTrackingNumber", req.body.request.TrackingNumber)
            .input("cSeason", req.body.request.Season)
            .input("cTrimType", req.body.request.TrimConsumptionType)
            .input("cGarmntType", req.body.request.GarmentType)
            .input("cSampletype", req.body.request.SampleType)
            .input("cBrand", req.body.request.Brand)
            .input("cStyleName", req.body.request.StyleNumber)
            .input("cItemType", req.body.lines[i].ItemType)
            .input("cPlacement", req.body.lines[i].Placement)
            .input("cSize", req.body.lines[i].Size)
            .output("trimmatch", 0)
            .execute("trimconsmptionValidation");
            if(result.output.trimmatch != 'OK'){
             return result.output.trimmatch}
        } 
    
             var ret1 = 'OK'
             if (p == 0){
             ret1 = 'Line Details Cannot Be Empty'}

             return ret1
    }

    async trimconsumptionValidationpend(req,res) {
             const ret1 = 'OK'
             return ret1
    }
    async trimconsumptionValidationcomp(req,res) {
        const ret1 = 'OK'
        return ret1
    }

}
module.exports = new trimconsumption(); 