const mssqlcon = require('../../dbconnection');

class IswSummaryMssql {  

  async addIswSummary(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", style.Transaction)
    .input("FacCd", style.FacCd)
    .input("LineNo", style.LineNo)
    .input("StyleCode", style.StyleCode)
    .input("CutNo", style.CutNo)
    .input("CutYear", style.CutYear)
    .input("LOT", style.Lot)
    .input("IswDate", style.IswDate)
    .input("Qty", style.Qty)
    .input("Status", style.Status)
    .execute("ADDIswSummary");
    
   

    var affected = {
      'RecordsEffected' :[res.rowsAffected[0]],
    };

    return affected;
 }
}
module.exports = new IswSummaryMssql();