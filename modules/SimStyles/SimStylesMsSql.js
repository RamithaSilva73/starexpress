//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class simstylesMsSql {
    async addstyle(simstyles) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("TransactionType",sql.VarChar(1),simstyles.TransactionType)
        .input("TrackingNumberMain",sql.VarChar(50),simstyles.MainStyleTrackingNumber)
        .input("TrackingNumberSimilar", sql.VarChar(50),simstyles.SimilarStyleTrackingNumber)
        .input("SimilarBody", simstyles.BodyNo)
        .execute("addsimstyle");
        // return res;
        var affected = {
            'RecordsEffected':[res.rowsAffected[0]]
        };
        return affected;
     }


     async gethistorySimStyle (){
        
        const conn=await mssqlcon.getConnection();
        const res=await conn.request().execute("getSimstyleHistory");
        return res.recordset;
      
      }
      



}
module.exports = new simstylesMsSql(); 