const mssqlcon = require('../../dbconnection');
class threadconsumptionMSSql {
  
  async getAllthreadconsumption() {
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

  async getPendthreadconsumption() {
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
    return data;
  }

   async addthreadconsumption(thrd) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("nTrackingNumber", thrd.Request.TrackingNumber)
    .input("cMerchandiserName", thrd.Request.MerchandiserName)
    .input("cBuyingHouse", thrd.Request.BuyingHouse)
    .input("cCustomer", thrd.Request.Customer)
    .input("cBrand", thrd.Request.Brand)
    .input("cStyleCode", thrd.Request.StyleCode)
    .input("cStyleNumber", thrd.Request.StyleNumber)
    .input("cSeason", thrd.Request.Season)  
    .execute("addthreadconsumption");
      const p = thrd.Lines.length;
     for(let i = 0; i < p; i++ ){
      const res1 = await conn.request()
      .input("nTrackingNumber", thrd.Request.TrackingNumber)
      .input("nTicket", thrd.Lines[i].Ticket)
      .input("nTex", thrd.Lines[i].Tex)
      .input("nCount", thrd.Lines[i].Count)
      .input("cShade", thrd.Lines[i].Shade)
      .input("cPlacement", thrd.Lines[i].Placement)
      .input("nConsumption", thrd.Lines[i].Consumption) 
      .execute("addthreadconsumptiondtl");
     } 
 
    return res;  
 }

}
module.exports = new threadconsumptionMSSql();