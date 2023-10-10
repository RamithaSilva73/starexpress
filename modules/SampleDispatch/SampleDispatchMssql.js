const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class SampleDispatchMSSql 
{
  async addSampleDispatchFunction(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType",sql.VarChar(1), style.TransactionType)
    .input("Reqdate",style.Reqdate)
    .input("DestinName", sql.VarChar(50) ,style.DestinName)
    .input("SamAbbreviation", sql.VarChar(10) ,style.SamAbbreviation)
    .input("TrackingNumber",sql.Char(50),style.TrackingNumber)
    .execute("addSampleDispatch");
    
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };
    return affected;
  }

  async gethistorysampledispatch(){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().execute("getsampledispatchHistory");
    return res.recordset;      
  }

}
 module.exports = new SampleDispatchMSSql();

   

   

  