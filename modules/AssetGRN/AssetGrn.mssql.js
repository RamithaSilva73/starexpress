const mssqlcon=require('../../dbconnection');
sql = require('mssql')

class AssetGgrnMssql{

async addNewAssetGrn(NewAssetGrn)
    {
        const conn = await mssqlcon.getConnection();
        const res=await conn.request()
        
        .input("cTransactionType",sql.VarChar(1),NewAssetGrn.TransactionType )
        .input("cGRNNumber",sql.VarChar(12),NewAssetGrn.GRNNumber)
        .input("cGRNLine",sql.VarChar(4),NewAssetGrn.GRNLine)
        .input("cItemDescription",sql.VarChar(250),NewAssetGrn.ItemDescription)
        .input("cItemCode",sql.VarChar(20),NewAssetGrn.ItemCode)
        .input("cUnitOfMeasurement",sql.VarChar(3),NewAssetGrn.UnitOfMeasurement)
        .input("cItemID",sql.Int,NewAssetGrn.ItemID)
        .input("nQuantity",sql.Numeric(10,2),NewAssetGrn.Quantity)
        .input("cItemCategory",sql.VarChar(40),NewAssetGrn.ItemCategory)
        .input("cAssetCategory",sql.VarChar(30),NewAssetGrn.AssetCategory)
        .input("dWarrantyDate",NewAssetGrn.WarrantyDate)
        .input("cPONumber",sql.VarChar(10),NewAssetGrn.PONumber)
        .input("nPOheaderID",sql.Int,NewAssetGrn.POheaderID)
        .input("cPOlineNumber",sql.VarChar(4),NewAssetGrn.POlineNumber)
        .input("nPOLineID",sql.Int,NewAssetGrn.POLineID)
        .input("cOperatingUnit",sql.VarChar(3),NewAssetGrn.OperatingUnit)
        .input("cInventoryOrg",sql.VarChar(3),NewAssetGrn.InventoryOrg)
        .input("cOrganizationID",sql.Int,NewAssetGrn.OrganizationID)
        .input("cMake",sql.VarChar(40),NewAssetGrn.Make)
        .input("cReceivingTransactionId",sql.Numeric(18,0),NewAssetGrn.ReceivingTransactionId)
        .input("cModel",sql.VarChar(40),NewAssetGrn.Model)
        .input("cfactoryloc",sql.VarChar(3),NewAssetGrn.factoryloc)
        .input("nallocQty",sql.Numeric(10,0),NewAssetGrn.allocQty)

        .execute("AddApiAssetGRN");
    
        var affected={'RecordsEffected':[res.rowsAffected[0]]}
        return affected;    

    }
}

module.exports=new AssetGgrnMssql();

