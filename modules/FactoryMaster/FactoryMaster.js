const FactoryMasterMssql=require('./FactoryMasterMssql');

class Factory{

    async addFactory(req,res){

        
        try{
            const output =await FactoryMasterMssql.AddFactory(req.body);
            res.status(200).json(output);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);

        }
    }

    async getAllFactory(req,res) {

        try {
            const output=await FactoryMasterMssql.getAllFactores();
            res.send(output);
        }

        catch(error){
            res.status(500).json(error)
        }

    }
}

module.exports = new Factory();
