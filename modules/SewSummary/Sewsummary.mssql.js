const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class SewsummaryMSSql {
  
  async addSewsummary(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType",sql.VarChar(1), style.Transactiontype)
    .input("FacCd", sql.VarChar(3) ,style.FacCd)
    .input("LineNo",sql.VarChar(3), style.LineNo)
    .input("OracleStyleCode", style.StyleCode)
    .input("CutNo", sql.VarChar(5) ,style.CutNo)
    .input("CutYear", sql.VarChar(4),style.CutYear)
    .input("Lot",sql.VarChar(7), style.Lot)
    .input("SewDate", style.SewDate)
    .input("Qty", style.Qty)
    .input("Status",sql.VarChar(1), style.Status)
    .execute("addsewsummary");
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }


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