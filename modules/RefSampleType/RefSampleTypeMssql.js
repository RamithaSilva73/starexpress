const mssqlcon = require('../../dbconnection');

class RefSampleTypeMSSql {  

  async addRefSampleType(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction",sql.VarChar(1), style.TransactionType)
    .input("SamType",sql.VarChar(50) , style.SamType)
    .input("SamAbbreviation", sql.Char(10) ,style.SamAbbreviation)
    .input("Sam_IE", style.SamIE)
    .input("Production",sql.Char(2) ,style.Production)
    .execute("AddSampleType");
 
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
  }
}
module.exports = new RefSampleTypeMSSql();


