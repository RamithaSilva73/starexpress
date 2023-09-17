const mssqlcon = require('../../dbconnection');

class SampleSubmissionMSSql {  

  async addSampleSubmission(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("Transaction", style.TransactionType)
    .input("SampleTypeCode", style.SampleTypeCode)
    .input("AppRej", style.AppRej)
    .input("Wash", style.Wash)
    .input("Complete", style.Complete)
    .input("StyleCode", style.StyleCode)
    .input("AllokStyleName", style.AllokStyleName)
    .input("ReqDate", style.ReqDate)
    .input("AddUser", style.AddUser)
    .input("CompleteDate", style.CompleteDate)
    .input("SamRoomName", style.SamRoomName)
    .execute("AddvSampleSubmissionNew2");

    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }
}
module.exports=new SampleSubmissionMSSql();

