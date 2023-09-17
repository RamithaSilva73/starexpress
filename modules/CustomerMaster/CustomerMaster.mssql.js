const mssqlcon=require('../../dbconnection');
sql=require('mssql');

class CustomerMasterMssql
{

    async AddNewCustomer(Customers)
    {
        //console.log ('tt')
        const conn=await mssqlcon.getConnection();
        const res=await conn.request()

        .input("TransactionType",sql.VarChar(1),Customers.TransactionType)
        .input("DivisionName",sql.VarChar(35),Customers.DivisionName)
        .input("AccountManager",sql.VarChar(30), Customers.AccountManager)
        .input("AccountNo",sql.VarChar(5),Customers.AccountNo)
        .input("AccountName",sql.VarChar(40),Customers.AccountName)
        .input("Active", Customers.Active)
        .input("SampleRoom",sql.VarChar(20),Customers.SampleRoom)
        .input("Owner",sql.VarChar(10),Customers.Owner)
        .input("GroupName",sql.VarChar(30), Customers.GroupName)
        .execute("addCustomerMaster");

        //return res;   

        var affected={'RecordsEffected':[res.rowsAffected[0]]}

        return affected;    

    
    }
}

module.exports=new CustomerMasterMssql();
