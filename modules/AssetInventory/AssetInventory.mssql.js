const mssqlcon=require('../../dbconnection');
sql=require('mssql');


class AssetInventoryMssql{

async GetAssetInventory(AssetInventory)
{
        const conn=await mssqlcon.getConnection();
  
        const res= await conn.request()
        .input("cInvYear",sql.VarChar(4),AssetInventory.InventoryYear)
        .input("cInvMonth",sql.VarChar(12),AssetInventory.InventoryMonth)
        .execute("getMonthMechineInventory");
         return res.recordset;
       
       // var affected={'RecordsEffected':[res.rowsAffected[0]]}
       // return affected;       
}

}

module.exports = new AssetInventoryMssql();

