const mssqlcon = require('../../dbconnection');

class LotMasterDataMssql {  

  async addLotMasterData(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", style.TransactionType)
    .input("Stylecode", style.StyleCode)
    .input("LotName", style.LotName)
    .input("CIDate", style.CiDate)
    .input("DeliveryDate", style.DeliveryDate)
    .input("Quantity", style.Quantity)
    .input("EnterDate", style.EnterDate)
    .input("ConfirmOn", style.ConFirmOn)
    
    .execute("AddMasterLotdata");
  
    var affected = {
      'RecordsEffected':[res.rowsAffected[0]],
  };

return affected;
  }

}
module.exports = new LotMasterDataMssql();