const mssqlcon=require('../../dbconnection');
sql = require('mssql')

class AssetGgrnMssql{

async addNewAssetGrn(NewAssetGrn){
    
const conn = await mssqlcon.getConnection();

//ouput results
const result = {}
result.errorCount = 0;
result.errors = []
result.successCount = 0;

//console.log('TT')
for (let i=0;i<NewAssetGrn.MIData.length;i++)
{

    try{
        const res1= await conn.request()

        .input("cTransactionType",sql.VarChar(1),NewAssetGrn.MIData[i].TransactionType )
        .input("cGRNNumber",sql.VarChar(12),NewAssetGrn.MIData[i].GRNNumber)
        .input("cGRNLine",sql.VarChar(4),NewAssetGrn.MIData[i].GRNLine)
        .input("cItemDescription",sql.VarChar(250),NewAssetGrn.MIData[i].ItemDescription)
        .input("cItemCode",sql.VarChar(50),NewAssetGrn.MIData[i].ItemCode)
        .input("cUnitOfMeasurement",sql.VarChar(4),NewAssetGrn.MIData[i].UnitOfMeasurement)
        .input("cItemID",sql.Int,NewAssetGrn.MIData[i].ItemID)
        .input("nQuantity",sql.Numeric(10,2),NewAssetGrn.MIData[i].Quantity)
        .input("cItemCategory",sql.VarChar(40),NewAssetGrn.MIData[i].ItemCategory)
        .input("cAssetCategory",sql.VarChar(30),NewAssetGrn.MIData[i].AssetCategory)
        .input("dWarrantyDate",NewAssetGrn.MIData[i].WarrantyDate)
        .input("cPONumber",sql.VarChar(10),NewAssetGrn.MIData[i].PONumber)
        .input("nPOheaderID",sql.Int,NewAssetGrn.MIData[i].POheaderID)
        .input("cPOlineNumber",sql.VarChar(4),NewAssetGrn.MIData[i].POlineNumber)
        .input("nPOLineID",sql.Int,NewAssetGrn.MIData[i].POLineID)
        .input("cOperatingUnit",sql.VarChar(3),NewAssetGrn.MIData[i].OperatingUnit)
        .input("cInventoryOrg",sql.VarChar(3),NewAssetGrn.MIData[i].InventoryOrg)
        .input("cOrganizationID",sql.Int,NewAssetGrn.MIData[i].OrganizationID)
        .input("cMake",sql.VarChar(40),NewAssetGrn.MIData[i].Make)
        .input("cReceivingTransactionId",sql.Numeric(18,0),NewAssetGrn.MIData[i].ReceivingTransactionId)
        .input("cModel",sql.VarChar(40),NewAssetGrn.MIData[i].Model)
        .input("cfactoryloc",sql.VarChar(3),NewAssetGrn.MIData[i].factoryloc)
        .input("nallocQty",sql.Numeric(10,0),NewAssetGrn.MIData[i].allocQty)
        .execute("AddApiAssetGRN");

        result.successCount++;

    }
    catch(e){

        //recording the error
        let tempObj = {}
        tempObj.GRNnumber = NewAssetGrn.MIData[i].GRNNumber
        tempObj.ReceivingTransId = NewAssetGrn.MIData[i].ReceivingTransactionId
        tempObj.error = e.message
        result.errors.push(tempObj);
        result.errorCount++;

    }
//.execute("AddApiAssetGRNTest");


}

//var affected={'RecordsEffected':[NewAssetGrn.MIData.length]}
var affected={'Results':result}
return affected;    

  
}


    async gethistoryasstgrn(){
        const conn = await mssqlcon.getConnection();
        const res = await conn.request().execute("gethistoryasstgrn");
        return res.recordset;
    }

}

module.exports=new AssetGgrnMssql();

