const mssqlcon = require('../../dbconnection');

class RefSampleTypeMSSql {  

  async addRefSampleType(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", style.TransactionType)
    .input("SamType", style.SamType)
    .input("SamAbbreviation", style.SamAbbreviation)
    .input("Sam_IE", style.SamIE)
    .input("Production", style.Production)
    .execute("AddSampleType");
 
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
  }


  async gethistoryrefsampletype(){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().execute("getrefsampletypeHistory");
    return res.recordset;      
  }

 


}
module.exports = new RefSampleTypeMSSql();
