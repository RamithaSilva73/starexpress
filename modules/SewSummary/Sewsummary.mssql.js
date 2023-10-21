const mssqlcon = require('../../dbconnection');


class SewsummaryMSSql {
  
 /*  async getAllSewsummaryfunction() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getAllSewsummary");
    return res.recordset;
  } */
  
  async addSewsummary(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType",sql.VarChar(1), style.TransactionType)

    .input("FacCd", sql.VarChar(3),style.FacCd)
    .input("LineNo",sql.VarChar(3),style.LineNo)
    .input("TrackingNumber",sql.VarChar(50),style.TrackingNumber)
    .input("CutNo", sql.VarChar(5) ,style.CutNo)
    .input("CutYear", sql.VarChar(4),style.CutYear)
    .input("Lot",sql.VarChar(7),style.Lot)
    .input("SewDate", style.SewDate)
    .input("Qty", style.Qty)
    .input("Status",sql.VarChar(1), style.Status)
    .execute("addsewsummary");
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }

 

 async gethistorySewsummary (){
        
  const conn=await mssqlcon.getConnection();
  const res=await conn.request().execute("getSewsummaryHistory");
  return res.recordset;

}


}
module.exports = new SewsummaryMSSql();