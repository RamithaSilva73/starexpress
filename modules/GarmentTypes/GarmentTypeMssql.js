const mssqlcon=require('../../dbconnection');
const sqlDval=require('mssql');


class GarmentTypesMssql
{

async AddGarmentTypes(GarmentType)
    {

    const conn = await mssqlcon.getConnection();
    
    const res=await conn.request()
    .input("cTransactionType",GarmentType.Transactiontype)
    .input("cGarmentGroup",GarmentType.GarmentGroup )
    .input("cGarmentCode", GarmentType.GarmentCode)
    .input("cGarmentType", GarmentType.GarmentType )
    .input("cMainGmtType", GarmentType.MainGmtType)
    .input("cGmtType",GarmentType.GmtType)
    .execute("addGarmentTypes");
    return res;
    }
}

module.exports=new GarmentTypesMssql();

