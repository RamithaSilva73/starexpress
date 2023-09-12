const mssqlcon=require('../../dbconnection');
class FactoryMasterMssql{

async AddFactory(Factory)
{


        const conn=await mssqlcon.getConnection();
  
        const res= await conn.request()
        .input("cTransactionType",Factory.TransactionType)
        .input("cFtyCode",Factory.FtyCode)
        .input("cFactoryName",Factory.FactoryName)
        .input("bModular",Factory.Modular)
        .execute("addFactoryMaster");
       
        return res;

    
        

    
}



async getAllFactores (){
    const conn=await mssqlcon.getConnection();
    const res=await conn.request().exceute("getAllFactores");
    return res.recordset;
}

}

module.exports = new FactoryMasterMssql();

