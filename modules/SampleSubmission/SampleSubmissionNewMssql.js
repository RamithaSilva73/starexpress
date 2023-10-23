const mssqlcon = require('../../dbconnection');

class SampleSubmissionMSSql {  

  async addSampleSubmission(style) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("TransactionType", sql.VarChar(1),style.TransactionType)
    .input("SampleType", sql.Char(50) ,style.SampleType)
    .input("AppRej", sql.Char(8),style.AppRej)
    .input("Wash", sql.Char(8) ,style.Wash)
    .input("Complete", style.Complete)
    .input("TrackingNumber",sql.Char(50) , style.TrackingNumber)
    .input("AllokStyleName", sql.Char(25) ,style.AllokStyleName)
    .input("ReqDate", style.ReqDate)
    .input("RequestBy", style.AddUser)
    .input("CompleteDate", style.CompleteDate)
    .input("SampleRoom", style.SamRoomName)
    .execute("addSampleSubmission");

    var affected = {
      'RecordsEffected':[res.rowsAffected[0]]
    };

    return affected;
 }



 async  gethistorysamplesubmission (){
  const conn=await mssqlcon.getConnection();
  const res=await conn.request().execute("getsamplesubmissionHistory");
  return res.recordset;      
}



}
module.exports=new SampleSubmissionMSSql();

 
  
  
  
 
  
  
 