const mssqlcon = require('../../dbconnection');

class SewWithoutrMSSql {  

  async addSewWithout(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction",sql.VarChar(1),style.TransactionType)
    .input("TrackingNumber",sql.VarChar(50),style.TrackingNumber)
    .input("Date",style.Date)
    .input("Fty",sql.VarChar(3),style.FactoryCd)
    .input("Line",sql.VarChar(3),style.Line)
    .input("Cut",sql.VarChar(5),style.Cut)
    .input("CutYear",sql.VarChar(4),style.Year)
    .input("Lot",sql.VarChar(7),style.Lot)
    .input("AttachQty",style.AttachedQty)
    .input("WithoutQty",style.WithoutQty)
    .execute("addSewWithout");
    
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }


}


module.exports = new SewWithoutrMSSql();


