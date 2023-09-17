const mssqlcon=require('../../dbconnection');

class StyleMasterMssql{

async addNewStyle(NewStyle)
{
    const conn = await mssqlcon.getConnection();
    const res=await conn.request()

    .input("cTransactionType",NewStyle.transactiontype)
    .input("cStyleNumber",NewStyle.StyleNumber)
    .input("cAccountNumber",NewStyle.AccountNumber)  
    .input("nSeasonYear",NewStyle.SeasonYear) 
    .input("cProductionStage",NewStyle.ProductionStage)
    .input("nOrderQty",NewStyle.OrderQTY)
    .input("dDeliveryDate",NewStyle.DeliveryDate)
    .input("cShipFty",NewStyle.ShipFty)
    .input("cRemarks",NewStyle.Remarks)
    .input("bComplete",NewStyle.Complete)
    .input("cKomarStyleNo",NewStyle.KomarStyleNumber)
    .input("cLTStyleNo",NewStyle.LTStyleNo)
    .input("dTgtCut",NewStyle.TgtCutDate)
    .input("dFirstIsssueConfirmDate",NewStyle.FirstIsssueConfirmDate )
    .input("OracleStyleCode",NewStyle.StyleCode)
    .input("cMerchanName",NewStyle.MerchantName)
    .input("cWashNonWash",NewStyle.WashNonWash)
    .input("cFtyCode",NewStyle.FtyCode)
    .input("cEnterUser",NewStyle.EnterUser)
    .input("cStatus",NewStyle.Status)
    .input("cOPSStatus",NewStyle.OPSStatus)
    .input("cStyleType",NewStyle.StyleType)
    .input("cGarmentCode",NewStyle.GarmentCode)
    .input("cSpoCode",NewStyle.SPOCode)
    .input("cIndicator",NewStyle.Indicator)
    .input("cFabricContent",NewStyle.FabricContent)
    .input("cHTSCode",NewStyle.FabricHSCode)
    .input("cSeason",NewStyle.Season)
    .input("cCuttingType",NewStyle.CuttingType)
    .input("cContract",NewStyle.Contract)
    .input("cPackingMethod",NewStyle.PackingMethod)
    .input("dEnterDate",NewStyle.EnterDate)
    .input("dEditDate",NewStyle.EditDate) 
    .execute("AddStyleMaster");
    
    return res;
}

async getHistoryStyles(){
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getStyleMasterHistory");
    return res.recordset;
}

}




module.exports=new StyleMasterMssql();

