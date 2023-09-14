const LotMasterDataMssql = require('./LotMasterDataMssql')

class LotMasterDataClass {
    async addLotMasterData(req, res) {
        try {
        const output = await LotMasterDataMssql.addLotMasterData(req.body);
        res.status(200).send(output);
        }
        catch (error) {
        res.status(500).json(error);
        }
  }
}

module.exports = new LotMasterDataClass();