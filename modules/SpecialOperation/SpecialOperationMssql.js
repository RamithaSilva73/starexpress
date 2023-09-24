const mssqlcon=require('../../dbconnection');

class SpecialOperationMssql {

    async AddSpecialOperation(SpecialOP)
    {
        
        const conn=await mssqlcon.getConnection();
        const res=await conn.request()
        .input("cTransactionType",SpecialOP.TransactionType)

        .input("cSpoCode",SpecialOP.SPOCode )
        .input("cDescription", SpecialOP.SPODescription)
        .execute("AddSpecialOperation");
        return res;        
    }
}

module.exports=new SpecialOperationMssql();
