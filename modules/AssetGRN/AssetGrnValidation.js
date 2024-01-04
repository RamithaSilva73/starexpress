const mssqlcon = require("./../../dbconnection")

class sqlError
{
    async CustomerValidation(req,res)
    {
    
        //results array
       var checkerrorarry = {}

       //set the encounted errors 
       checkerrorarry.errorCount = 0;

       //set success record count
       checkerrorarry.succesCount = 0

       //record errors occured
       checkerrorarry.errorRecords = []

        //successful records
        checkerrorarry.successRecords = []

        const conn = await mssqlcon.getConnection();

       // console.log('tt')
        for(let i = 0; i < req.body.MIData.length; i++)
        {

         var current = req.body.MIData[i]

        
        const result = await conn.request()

        .input("cTransactionType",current.TransactionType)
        .input("cReceivingTransactionId",req.body.MIData[i].ReceivingTransactionId)
        .input("cInventoryOrg",req.body.MIData[i].InventoryOrg)
        
       // .input("cTransactionType",req.body.GRNNumber)
       // .input("cTransactionType",req.body.GRNLine)
        
        .output("ValidReturnVal",0)
        .execute("AssetGrnValidation")


        //if the record is valid
        if(result.output.ValidReturnVal==='OK'){
            
            checkerrorarry.succesCount++;

            //attaching the valid record to an object with the transaction id and the return value
            var recivedTransactionId = current.ReceivingTransactionId;
            let obj ={}
            obj.transActionId = recivedTransactionId;
            obj.output = result.output.ValidReturnVal

            checkerrorarry.successRecords.push(obj);

        }
        //if the record is not a valid
        else{

            checkerrorarry.errorCount++;

            //attaching the invalid record to an object with the transaction id and the return value
            var recivedTransactionId = current.ReceivingTransactionId;
            let obj ={}
            obj.transActionId = recivedTransactionId;
            obj.output = result.output.ValidReturnVal

            checkerrorarry.errorRecords.push(obj);

        }

        
    }

    console.log(checkerrorarry)
        return checkerrorarry;
    }
}
module.exports = new sqlError(); 
