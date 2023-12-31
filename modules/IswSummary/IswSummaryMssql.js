const mssqlcon = require('../../dbconnection');

class IswSummaryMssql {  

  async addIswSummary(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", sql.VarChar(1),style.TransactionType)
    .input("IswDate",style.IssueDate)
    .input("FacCd", sql.VarChar(3),style.FactoryCd)
    .input("LOT", sql.VarChar(7),style.Lot)
    .input("LineNo", sql.VarChar(3),style.LineNo)
    .input("TrackingNumber", sql.VarChar(50),style.TrackingNumber)
    .input("CutNo", sql.VarChar(5),style.CutNo)
    .input("CutYear", sql.VarChar(4),style.CutYear)
    .input("Qty", style.Qty)
    .input("Status", sql.VarChar(1),style.Status)
    .execute("ADDIswSummary");
    
    var affected = {
      'RecordsEffected' :[res.rowsAffected[0]],
    };

    return affected;
 }


 async gethistoryiswsummary (){
  const conn=await mssqlcon.getConnection();
  const res=await conn.request().execute("getiswsummaryHistory");
  return res.recordset;

}



}
module.exports = new IswSummaryMssql();