const GarmentTypesMssql=require('./GarmentTypeMssql');

class GarmentTypes{

    async addGarmentTypes(req,res){
        try{
            const output=await GarmentTypesMssql.AddGarmentTypes(req.body);
            res.status(200 ).send(output);

        }
        catch (error) {
                res.status(500).json(error);
                //console.error('API Error:', error.message);

        }
    }

}

module.exports=new GarmentTypes();
