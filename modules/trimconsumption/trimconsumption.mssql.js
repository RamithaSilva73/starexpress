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
    .input("nTrackingNumber", trim.request.TrackingNumber)
    .input("cTrimType", trim.request.TrimConsumptionType)
    .input("nPocNumber", trim.request.POCNumber)
    .input("nSampleDocNumber", trim.request.SampleDocumentNumber)
    .input("cSampletype", trim.request.SampleType)
    .input("cSampleLinecd", trim.request.SampleLineCode)
    .input("cGarmntType", trim.request.GarmentType)
    .input("cBuyingHouse", trim.request.BuyingHouse)
    .input("cCustomer", trim.request.Customer)
    .input("cBrand", trim.request.Brand)
    .input("nStyleNumber", trim.request.StyleCode)
    .input("cStyleName", trim.request.StyleNumber)
    .input("cSeason", trim.request.Season)
    .input("cMerchant", trim.request.MerchandiserName)
    .input("cComment", trim.request.Comments) 
   
    .execute("addtrimconsumption");

      const p = trim.lines.length;

     for(let i = 0; i < trim.lines.length; i++){
      const res1 = await conn.request()
      .input("nTrackingNumber", trim.request.TrackingNumber)
      .input("cItemType", trim.lines[i].ItemType)
      .input("cItemSpec", trim.lines[i].ItemSpecification)
      .input("cPlacement", trim.lines[i].Placement)
      .input("cSize", trim.lines[i].Size)
      .input("cUOM", trim.lines[i].UOM)
      .input("cConsumption", trim.lines[i].ConsumptionPerGarment)
      .execute("addtrimconsumptiondtl");
     } 
 
    return res;  
 }

}
module.exports = new trimconsumptionMSSql();