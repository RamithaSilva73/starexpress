//const GarmentTypesMssql=require('./GarmentTypeMssql');
const StyleMasterFileMssql=require('./StyleMasterMssql');

class StyleMasterFile{

    async addNewStyle(req,res){
        try{
            const output=await StyleMasterFileMssql.addNewStyle (req.body);
            res.status(200 ).send(output);

        }
        catch (error) {
                res.status(500).json(error);
                //console.error('API Error:', error.message);

        }
    }

}

module.exports=new StyleMasterFile();
