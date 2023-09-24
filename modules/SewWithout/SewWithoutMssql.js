const mssqlcon = require('../../dbconnection');

class SewWithoutrMSSql {  

  async addSewWithout(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", style.TransactionType)
    .input("Date", style.Date)
    .input("Fty", style.FactoryCd)
    .input("Line", style.Line)
    .input("Cut", style.Cut)
    .input("CutYear", style.Year)
    .input("Lot", style.Lot)
    .input("StyleCode", style.StyleCode)
    .input("AttachQty", style.AttachedQty)
    .input("WithoutQty", style.WithoutQty)
    .execute("addSewWithoutNew");
    
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }


}


module.exports = new SewWithoutrMSSql();


