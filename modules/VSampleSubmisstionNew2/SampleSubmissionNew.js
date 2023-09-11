const SampleSubmisstionNewtMssql = require('./SampleSubmissionNewMssql')

class SampleSubmisstionNew {
    async addSampleSubmission(req, res) {
        try {
        const output = await SampleSubmisstionNewtMssql.addSampleSubmission(req.body);
        res.status(200).send(output);
        }
        catch (error) {
        res.status(500).json(error);
        }
  }
}

module.exports = new SampleSubmisstionNew