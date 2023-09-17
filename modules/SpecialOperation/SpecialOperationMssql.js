const mssqlcon=require('../../dbconnection');
sql=require('mssql');

class SpecialOperationMssql {

    async AddSpecialOperation(SpecialOP)
    {
        
        const conn=await mssqlcon.getConnection();
        const res=await conn.request()
        .input("cTransactionType",sql.VarChar(1),SpecialOP.TransactionType)
        .input("cSpoCode",sql.VarChar(30),SpecialOP.SPOCode )
        .input("cDescription", sql.VarChar(500),SpecialOP.SPODescription)
        .execute("AddSpecialOperation");
        
        var affected={'RecordsEffected':[res.rowsAffected[0]]}

        return affected;   
    }
}

module.exports=new SpecialOperationMssql();
