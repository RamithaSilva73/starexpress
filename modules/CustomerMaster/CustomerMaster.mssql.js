const mssqlcon=require('../../dbconnection');
sqlDval=require('mssql');

class CustomerMasterMssql
{

    async AddNewCustomer(Customers)
    {
        //console.log ('tt')
        const conn=await mssqlcon.getConnection();
        const res=await conn.request()

        .input("TransactionType",Customers.TransactionType)
        .input("DivisionName",Customers.DivisionName)
        .input("AccountManager", Customers.AccountManager)
        .input("AccountNo",Customers.AccountNo)
        .input("AccountName",Customers.AccountName)
        .input("Active", Customers.Active)
        .input("SampleRoom",Customers.SampleRoom)
        .input("Owner",Customers.Owner)
        .input("GroupName", Customers.GroupName)
        .execute("addCustomerMaster");

        return res;   

       //return 'RecordsEffected';
       
       //var affected={'RecordsEffected':res};

        //var affected = {'RecordsEffected':res.rowsAffected[0] };
        //return affected;    
    }
}

module.exports=new CustomerMasterMssql();
