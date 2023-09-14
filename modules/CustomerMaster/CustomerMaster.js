const NewCoustomer=require('./CustomerMaster.mssql');

class StarCustomers 
{

    async addNewCustomer(req,res)
    {
        try 
        {
            const output=await NewCoustomer.AddNewCustomer(req.body);
            res.status(200).send(output);
        }
        catch(error) 
        {
            res.status(500).json(error);
        }
    }
}

module.exports=new StarCustomers();


