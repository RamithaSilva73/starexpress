//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class samplesubmissionMsSql {
    async addsamplesubmission(sample) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("TransactionType",sql.VarChar(1),sample.TransactionType)
        .input("TrackingNumber",sql.VarChar(50),sample.TrackingNumber)
        .input("SampleType",sql.VarChar(50),sample.SampleTypeCode)
        .input("AppRej",sql.VarChar(8),sample.AppRej)
        .input("Wash",sql.VarChar(8),sample.Wash)
        .input("Complete",sample.Complete)
        .input("AllokStyleName",sql.VarChar(25),sample.AllokStyleName)
        .input("ReqDate",sample.ReqDate)
        .input("RequestBy",sql.VarChar(15),sample.AddUser)
        .input("CompleteDate",sample.CompleteDate)
        .input("SampleRoom",sql.VarChar(50),sample.SampleRoom)
        .execute("addSampleSubmission");
        // return res;
        var affected = {
            'RecordsEffected':[res.rowsAffected[0]]
        };
        return affected;
     }
}
module.exports = new samplesubmissionMsSql(); 