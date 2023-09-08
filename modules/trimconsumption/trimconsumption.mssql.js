const mssqlcon = require('../../dbconnection');
class trimconsumptionMSSql {
  
  async getAlltrimconsumption() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getAlltrimconsumption");
    return res.recordset;
  }

  async getPendtrimconsumption() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getPendtrimconsumption");
    return res.recordset;
  }


  
   async addtrimconsumption(trim) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("nTrackingNumber", trim.nTrackingNumber)
    .input("nStatus", trim.nStatus)
    .input("nPocNumber", trim.nPocNumber)
    .input("nSampleDocNumber", trim.nSampleDocNumber)
    .input("cSampleLinecd", trim.cSampleLinecd)
    .input("cGarmntType", trim.cGarmntType)
    .input("cBuyingHouse", trim.cBuyingHouse)
    .input("cCustomer", trim.cCustomer)
    .input("cBrand", trim.cBrand)
    .input("nStyleNumber", trim.nStyleNumber)
    .input("cStyleName", trim.cStyleName)
    .input("cSeason", trim.cSeason)
    .input("cMerchant", trim.cMerchant)
    .input("cComment", trim.cComment)
    .execute("addtrimconsumption");
    return res;
 }



/*  "MerchandiserName": "AnupamaJ",
 "TrimConsumptionType": "Bulk",
 "TrackingNumber": "XXX",
 "SampleDocumentNumber": "REF1",
 "SampleType": "1- FIT SAMPLE",
 "SampleLineCode": "001",
 "POCNumber": "POC1",
 "GarmentType": "Shirt",
 "BuyingHouse": "NA",
 "Customer": "KOMAR",
 "Brand": "KOMAR-BEDHEAD",
 "StyleCode": "OracleStyleCode",
 "StyleNumber":"BH1523849-TOP",
 "Comments":"Comment1",
 "Season":"SPRING-2023" */









 /*
 async updatestyle(style) {
   const conn = await mssqlcon.getConnection();
   const res = await conn.request()
   .input("stylenumber", style.stylenumber)
   .input("stylename", style.stylename)
   .input("account", style.account)
   .input("orderqty",style.orderqty)
   .input("merchant", style.merchant)
   .input("product", style.producttype)
   .execute("updatestyle");
   return res;
 }


 async deletestyle(id) {
   const conn = await mssqlcon.getConnection();
   const res = await conn.request()
   .input("style_id", id)
   .execute("deletestyle");
   return res;
 } */
}
module.exports = new trimconsumptionMSSql();