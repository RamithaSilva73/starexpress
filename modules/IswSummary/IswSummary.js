const IswSummaryMssql = require('./IswSummaryMssql')

class IswSummaryClass {
    async addIswSummaryfunction(req, res) {
        try {
        const output = await IswSummaryMssql.addIswSummary(req.body);
        res.status(200).send(output);
        }
        catch (error) {
        res.status(500).json(error);
        }
  }
}

module.exports = new IswSummaryClass();