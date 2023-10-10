const mssqlcon = require('../../dbconnection');

class SampleDispatchMSSql {
  async addSampleDispatchFunction(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType",sql.VarChar(1), style.Transactiontype)
    .input("Reqdate",style.Reqdate)
    .input("DestinationName", sgl.varchar(50) ,style.DestinName)
    .input("SamAbbreviation", sql.VarChar(10) ,style.SampleTypeCode)
    .input("StyleCode",sql.VarChar(20),style.StyleCode)
    .execute("addSampleDispatch");
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };
    return affected;
  }

 

  async  gethistorysampledispatch (){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().execute("getsampledispatchHistory");
    return res.recordset;      
  }


}
 module.exports = new SampleDispatchMSSql();


  