const mssqlcon = require('../../dbconnection');
class trimconsumptionMSSql {
    
  async getAlltrimconsumption() {
    
    const conn = await mssqlcon.getConnection();    
    var para = 'GET'
    console.log(para)
    const res1 = await conn.request()
    .input("cTyp",para)
    .execute("GetAllHdgettrimconsumption");
    const scount = res1.recordsets[0].length
    var data = []
    console.log(scount)
    for (let i = 0; i < scount; i++){
      console.log(i)
         var dtl = res1.recordsets[0][i].TrackingNumber
         console.log(dtl)
        const res2 = await conn.request()
        .input("nTrackNo",dtl)
        .execute("GetAllDTgettrimconsumption");
        res1.lines = res2
        data.push({
          'request':res1.recordset[i],
          'lines': res1.lines.recordset

        }) 
      }
    const res3 = await conn.request().execute("DelAllgettrimconsumption");
    return data;
  }


  async getPendtrimconsumption() {
    const conn = await mssqlcon.getConnection();    
    var para = 'PEN'
    console.log(para)
    const res1 = await conn.request()
    .input("cTyp",para)
    .execute("GetAllHdgettrimconsumption");
    const scount = res1.recordsets[0].length
    var data = []
    console.log(scount)
    for (let i = 0; i < scount; i++){
      console.log(i)
         var dtl = res1.recordsets[0][i].TrackingNumber
         console.log(dtl)
        const res2 = await conn.request()
        .input("nTrackNo",dtl)
        .execute("GetAllDTgettrimconsumption");
        res1.lines = res2
        data.push({
          'request':res1.recordset[i],
          'lines': res1.lines.recordset

        }) 
      }
    return data;
  }


   async addtrimconsumption(trim) {
    console.log('chk')
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("nTrackingNumber",sql.VarChar(50), trim.request.TrackingNumber)
    .input("cTrimType",sql.VarChar(25), trim.request.TrimConsumptionType)
    .input("nPocNumber", trim.request.POCNumber)
    .input("nSampleDocNumber", trim.request.SampleDocumentNumber)
    .input("cSampletype",sql.VarChar(20) ,trim.request.SampleType)
    .input("cSampleLinecd",sql.VarChar(10), trim.request.SampleLineCode)
    .input("cGarmntType",sql.VarChar(20), trim.request.GarmentType)
    .input("cBuyingHouse",sql.VarChar(40), trim.request.BuyingHouse)
    .input("cCustomer",sql.VarChar(20), trim.request.Customer)
    .input("cBrand",sql.VarChar(20), trim.request.Brand)
    .input("nStyleNumber",sql.VarChar(25), trim.request.StyleCode)
    .input("cStyleName",sql.VarChar(25), trim.request.StyleNumber)
    .input("cSeason",sql.VarChar(20), trim.request.Season)
    .input("cMerchant",sql.VarChar(15), trim.request.MerchandiserName)
    .input("cComment",sql.VarChar(500), trim.request.Comments) 
   
    .execute("addtrimconsumption");

      const p = trim.lines.length;

     for(let i = 0; i < trim.lines.length; i++){
      const res1 = await conn.request()
      .input("nTrackingNumber",sql.VarChar(50), trim.request.TrackingNumber)
      .input("cItemType",sql.VarChar(25), trim.lines[i].ItemType)
      .input("cItemSpec",sql.VarChar(50), trim.lines[i].ItemSpecification)
      .input("cPlacement",sql.VarChar(50), trim.lines[i].Placement)
      .input("cSize",sql.VarChar(15), trim.lines[i].Size)
      .input("cUOM",sql.VarChar(5), trim.lines[i].UOM)
      .input("cConsumption", trim.lines[i].ConsumptionPerGarment)
      .execute("addtrimconsumptiondtl");
     } 
     const res2 = await conn.request()
     .input("nTrackingNumber", trim.request.TrackingNumber)
     .execute("AddtrimJob");
     var affected = {
      'Effected Headers' :[res.rowsAffected[0]],
      'Effected Lines  ' :[p]
    };

    return affected;  
 }


 async getHistorytrim(){
/*   const conn = await mssqlcon.getConnection();
  const res = await conn.request().execute("gethistorytrimconsmption");
  return res.recordset; */

  const conn = await mssqlcon.getConnection();    
  var para = 'HIS'
  console.log(para)
  const res1 = await conn.request()
  .input("cTyp",para)
  .execute("GetAllHdgettrimconsumption");
  const scount = res1.recordsets[0].length
  var data = []
  console.log(scount)
  for (let i = 0; i < scount; i++){
    console.log(i)
       var dtl = res1.recordsets[0][i].TrackingNumber
       console.log(dtl)
      const res2 = await conn.request()
      .input("nTrackNo",dtl)
      .execute("GetAllDThistrimconsumption");
      res1.lines = res2
      data.push({
        'request':res1.recordset[i],
        'lines': res1.lines.recordset

      }) 
    }
  return data;
}





}
module.exports = new trimconsumptionMSSql();