const SewWithoutMssql = require('./SewWithoutMssql')

class SewWithoutNew {
    async addSewWithout(req, res) {
        try {
        const output = await SewWithoutMssql.addSewWithout(req.body);
        res.status(200).send(output);
        }
        catch (error) {
        res.status(500).json(error);
        }
  }
}

module.exports = new SewWithoutNew();