const mssqlcon=require('../../dbconnection');
sql = require('mssql')

class AssetGgrnMssql{

async addNewAssetGrn(NewAssetGrn)
    {
        const conn = await mssqlcon.getConnection();
        const res=await conn.request()
        
        .input("cTransactionType",sql.VarChar(1),NewAssetGrn.TransactionType )
        .input("cGRNNumber",NewAssetGrn.GRNNumber)
        .input("cGRNLine",NewAssetGrn.GRNLine)
        .input("cItemDescription",NewAssetGrn.ItemDescription)
        .input("cItemCode",NewAssetGrn.ItemCode)
        .input("cUnitOfMeasurement",NewAssetGrn.UnitOfMeasurement)
        .input("cItemID",NewAssetGrn.ItemID)
        .input("nQuantity",NewAssetGrn.Quantity)
        .input("cItemCategory",NewAssetGrn.ItemCategory)
        .input("cAssetCategory",NewAssetGrn.AssetCategory)
        .input("dWarrantyDate",NewAssetGrn.WarrantyDate)
        .input("cPONumber",NewAssetGrn.PONumber)
        .input("nPOheaderID",NewAssetGrn.POheaderID)
        .input("cPOlineNumber",NewAssetGrn.POlineNumber)
        .input("nPOLineID",NewAssetGrn.POLineID)
        .input("cOperatingUnit",NewAssetGrn.OperatingUnit)
        .input("cInventoryOrg",NewAssetGrn.InventoryOrg)
        .input("cOrganizationID",NewAssetGrn.OrganizationID)
        .input("cMake",NewAssetGrn.Make)
        .input("cReceivingTransactionId",NewAssetGrn.ReceivingTransactionId)
        .input("cModel",NewAssetGrn.Model)
        .input("cfactoryloc",NewAssetGrn.factoryloc)
        .input("nallocQty",NewAssetGrn.allocQty)

        .execute("AddApiAssetGRN");
    
        var affected={'RecordsEffected':[res.rowsAffected[0]]}
        return affected;    

    }
}

module.exports=new AssetGgrnMssql();

