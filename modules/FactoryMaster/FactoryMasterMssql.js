const mssqlcon=require('../../dbconnection');
sql=require('mssql');


class FactoryMasterMssql{

async AddFactory(Factory)
{


        const conn=await mssqlcon.getConnection();
  
        const res= await conn.request()
        .input("cTransactionType",sql.VarChar(1),Factory.Transactiontype)
        .input("cFtyCode",sql.VarChar(3),Factory.FtyCode)
        .input("cFactoryName",sql.VarChar(60),Factory.FactoryName)
        .input("bModular",Factory.Modular)
        .execute("addFactoryMaster");
       
        var affected={'RecordsEffected':[res.rowsAffected[0]]}
        return affected;    
        
}



async getAllFactores (){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().exceute("getAllFactores");
    return res.recordset;
}

}

module.exports = new FactoryMasterMssql();

