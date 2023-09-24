const mssqlcon = require('../../dbconnection');
class smvMSSql {
  
  async getsmvbulletin() {
    console.log(124)
    const conn = await mssqlcon.getConnection();    
    var para = 'GET'
    console.log(para)
    const res1 = await conn.request()
    .input("cTyp",para)
    .execute("GetAllHdgethreadconsumption");
    const scount = res1.recordsets[0].length
    var data = []
    console.log(scount)
    for (let i = 0; i < scount; i++){
      console.log(i)
         var dtl = res1.recordsets[0][i].TrackingNumber
         console.log(dtl)
        const res2 = await conn.request()
        .input("nTrackNo",dtl)
        .execute("GetAllDTgetthreadconsumption");
        res1.lines = res2
        data.push({
          'request':res1.recordset[i],
          'lines': res1.lines.recordset

        }) 
      }
    const res3 = await conn.request().execute("DelAllgetthrdconsumption");
    return data;
  }

  async getPendsmvrequest() {
    const conn = await mssqlcon.getConnection();    
    var para = 'PEN'
    console.log(para)
    const res1 = await conn.request()
    .input("cTyp",para)
    .execute("GetAllHdgethreadconsumption");
     const scount = res1.recordsets[0].length
    var data = []
    console.log(scount)
    for (let i = 0; i < scount; i++){
      console.log(i)
/*          var dtl = res1.recordsets[0][i].TrackingNumber
         console.log(dtl)
        const res2 = await conn.request()
        .input("nTrackNo",dtl)
        .execute("GetAllDTgetthreadconsumption"); */
        res1.lines = res2 
        data.push({
          'request':res1.recordset[i],
         // 'lines': res1.lines.recordset

        }) 
      }
    return data;
  }


   async addsmvrequest(smv) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("nTrackingNumber",sql.VarChar(25), smv.TrackingNumber)
    .input("nPOCNumber",sql.VarChar(25), smv.POCNumber)
    .input("cSampleDocumentNo",sql.VarChar(25), smv.SampleDocumentNo)
    .input("cGarmentType",sql.VarChar(20), smv.GarmentType)
    .input("cCustomer",sql.VarChar(20), smv.Customer)
    .input("cBrand",sql.VarChar(40), smv.Brand)
    .input("cStyleCode",sql.VarChar(25), smv.StyleCode)
    .input("cStyleNumber",sql.VarChar(25), smv.StyleNumber)  
    .input("cSeason",sql.VarChar(20), smv.Season) 
    .input("cPackingMethod",sql.VarChar(100), smv.PackingMethod) 
    .input("nVersionNo", smv.VersionNo) 
    .input("cWashStatus",sql.VarChar(10), smv.WashStatus) 
    .input("cFabricContent",sql.VarChar(200), smv.FabricContent) 
    .input("cSampleType",sql.VarChar(50), smv.SampleType) 
    .input("cFactory",sql.VarChar(3), smv.Factory) 
    .input("cCutType",sql.VarChar(20), smv.CutType) 
    .input("cMerchandiserName",sql.VarChar(15), smv.MerchandiserName) 
    .input("cBrandNumber",sql.VarChar(5), smv.BrandNumber) 
    .input("cMerchantComments",sql.VarChar(500), smv.MerchantComments) 
    .input("cSampleRoom",sql.VarChar(50), smv.SampleRoom) 
    .input("dTargetCutDate", smv.TargetCutDate) 
    .input("nOrderQuantity", smv.OrderQuantity) 
    .input("cLayingType",sql.VarChar(7), smv.LayingType) 
    .input("cSharePointURLLink",sql.VarChar(100), smv.SharePointURLLink) 
    .execute("addsmvrequest");
/*      const res2 = await conn.request()
     .input("nTrackingNumber", smv.Request.TrackingNumber)
     
     .execute("Addthrdjob"); */ 
    return res;  
 }

}
module.exports = new smvMSSql();