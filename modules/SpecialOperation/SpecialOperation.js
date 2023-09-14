const SpOperation=require('./SpecialOperationMssql');

class SpecialOparation {

    async addSpecialOperation(req,res){
        try {
            const output=await SpOperation.AddSpecialOperation(req.body);
            res.status(200).send(output);
        }
        catch(error) {
               res.status(500).json(error);
        }
    }
}

module.exports=new SpecialOparation();


