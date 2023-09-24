const mssqlcon=require('../../dbconnection');
sql=require('mssql');


class GarmentTypesMssql
{

async AddGarmentTypes(GarmentType)
    {

    const conn = await mssqlcon.getConnection();
    
    const res=await conn.request()
    .input("cTransactionType",sql.VarChar(1),GarmentType.TransactionType)
    .input("cGarmentGroup",sql.VarChar(15),GarmentType.GarmentGroup )
    .input("cGarmentCode",sql.VarChar(5),GarmentType.GarmentCode)
    .input("cGarmentType",sql.VarChar(20),GarmentType.GarmentType )
    .input("cMainGmtType",sql.VarChar(20),GarmentType.MainGmtType)
    .input("cGmtType",sql.VarChar(20),GarmentType.GmtType)
    .execute("addGarmentTypes");
   // return res;

   //var affected=res.rowsAffected[0]
   var affected={'RecordsEffected':[res.rowsAffected[0]]}
    return affected;    

    }
}

module.exports=new GarmentTypesMssql();

