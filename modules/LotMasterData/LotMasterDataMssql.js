const mssqlcon = require('../../dbconnection');

class LotMasterDataMssql {  

  async addLotMasterData(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType", style.TransactionType)
    .input("TrackingNumber", style.TrackingNumber)
    .input("LotName", style.LotName)
    .input("CIDate", style.CIDate)
    .input("DeliveryDate", style.DeliveryDate)
    .input("Quantity", style.Quantity)
    .input("EnterDate", style.EnterDate)
    .input("ConfirmOn", style.ConfirmOn)
    
    .execute("AddMasterLotdata");
  
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]],
  };

return affected;
  }

  async gethistorylotmasterdata(){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().execute("getlotmasterdataHistory");
    return res.recordset;      
  }
  

}
module.exports = new LotMasterDataMssql();
