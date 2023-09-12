const mssqlcon = require('../../dbconnection');
class threadconsumptionMSSql {
  
  async getAllthreadconsumption() {
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

  async getPendthreadconsumption() {
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

   async addthreadconsumption(thrd) {
    console.log('pp')
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    console.log('pp')
    .input("nTrackingNumber", thrd.request.TrackingNumber)
    console.log('pptt')
    .input("cMerchandiserName", thrd.request.MerchandiserName)
    .input("cBuyingHouse", thrd.request.BuyingHouse)
    .input("cCustomer", thrd.request.Customer)
    .input("cBrand", thrd.request.Brand)
    .input("cStyleCode", thrd.request.StyleCode)
    .input("cStyleNumber", thrd.request.StyleNumber)
    .input("cSeason", thrd.request.Season)   
    .execute("addthreadconsumption");

      const p = trim.lines.length;

     for(let i = 0; i < trim.lines.length; i++){
      const res1 = await conn.request()
      .input("nTrackingNumber", thrd.request.TrackingNumber)
      .input("nTicket", thrd.lines[i].Ticket)
      .input("nTex", thrd.lines[i].Tex)
      .input("nCount", thrd.lines[i].Count)
      .input("cShade", thrd.lines[i].Shade)
      .input("cPlacement", thrd.lines[i].Placement)
      .input("cConsumption", thrd.lines[i].Consumption)
      .execute("addthreadconsumptiondtl");
     } 
 
    return res;  
 }

}
module.exports = new threadconsumptionMSSql();