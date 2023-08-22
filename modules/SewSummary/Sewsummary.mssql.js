const mssqlcon = require('../../dbconnection');
class SewsummaryMSSql {
  
  async getAllSewsummaryfunction() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getAllSewsummary");
    return res.recordset;
  }
  
  /* async addstyle(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("style_number", style.stylenumber)
    .input("style_name", style.stylename)
    .input("orderqty", style.orderqty)
    .input("account", style.account)
    .input("merchant", style.merchant)
    .input("product", style.producttype)
    .execute("addstyle");
    return res;
 }
 */
 /* async updatestyle(style) {
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
module.exports = new SewsummaryMSSql();