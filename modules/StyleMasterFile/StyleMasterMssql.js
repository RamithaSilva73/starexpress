const mssqlcon=require('../../dbconnection');
sql = require('mssql')

class StyleMasterMssql{

async addNewStyle(NewStyle)
{
    const conn = await mssqlcon.getConnection();
    const res=await conn.request()


    .input("cTransactionType",sql.VarChar(1),NewStyle.transactiontype)
    .input("cStyleNumber",sql.VarChar(25),NewStyle.StyleNumber)
    .input("cAccountNumber",sql.VarChar(5),NewStyle.AccountNumber)  
    .input("nSeasonYear",NewStyle.SeasonYear) 
    .input("cProductionStage",sql.VarChar(3),NewStyle.ProductionStage)
    .input("nOrderQty",sql.Int,NewStyle.OrderQTY)
    .input("dDeliveryDate",sql.DateTime,NewStyle.DeliveryDate)
    .input("cShipFty",sql.VarChar(3),NewStyle.ShipFty)
    .input("cRemarks",sql.VarChar(100),NewStyle.Remarks)
    .input("bComplete",sql.Int,NewStyle.Complete)
    .input("cKomarStyleNo",sql.VarChar(15),NewStyle.KomarStyleNumber)
    .input("cLTStyleNo",sql.VarChar(15),NewStyle.LTStyleNo)
    .input("dTgtCut",sql.DateTime,NewStyle.TgtCutDate)
    .input("dFirstIsssueConfirmDate",sql.DateTime,NewStyle.FirstIsssueConfirmDate )
    .input("OracleStyleCode",sql.VarChar(20),NewStyle.StyleCode)
    .input("cMerchanName",sql.VarChar(30),NewStyle.MerchantName)
    .input("cWashNonWash",sql.VarChar(1),NewStyle.WashNonWash)
    .input("cFtyCode",sql.VarChar(3),NewStyle.FtyCode)
    .input("cEnterUser",sql.VarChar(15),NewStyle.EnterUser)
    .input("cStatus",sql.VarChar(15),NewStyle.Status)
    .input("cOPSStatus",sql.VarChar(2),NewStyle.OPSStatus)
    .input("cStyleType",sql.VarChar(10),NewStyle.StyleType)
    .input("cGarmentCode",sql.VarChar(5),NewStyle.GarmentCode)
    .input("cSpoCode",sql.VarChar(30),NewStyle.SPOCode)
    .input("cIndicator",sql.VarChar(15),NewStyle.Indicator)
    .input("cFabricContent",sql.VarChar(200),NewStyle.FabricContent)
    .input("cHTSCode",sql.VarChar(15),NewStyle.FabricHSCode)
    .input("cSeason",sql.VarChar(20),NewStyle.Season)
    .input("cCuttingType",sql.VarChar(20),NewStyle.CuttingType)
    .input("cContract",sql.VarChar(7),NewStyle.Contract)
    .input("cPackingMethod",sql.VarChar(100),NewStyle.PackingMethod)
    .input("dEnterDate",sql.DateTime,NewStyle.EnterDate)
    .input("dEditDate",NewStyle.EditDate) 
    .execute("AddStyleMaster");
    
   // return res;
   var affected={'RecordsEffected':[res.rowsAffected[0]]}
   return affected;    

}

async getHistoryStyles(){
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getStyleMasterHistory");
    return res.recordset;
}

}


module.exports=new StyleMasterMssql();

