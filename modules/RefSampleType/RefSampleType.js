const RefsampleTypeMssql = require('./RefSampleTypeMssql')

class RefSampleType {
    async addRefSampleType(req, res) {
        try {
        const output = await RefsampleTypeMssql.addRefSampleType(req.body);
        res.status(200).send(output);
        }
        catch (error) {
        res.status(500).json(error);
        }
  }
}

module.exports = new RefSampleType();