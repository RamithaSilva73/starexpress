//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class simstylesMsSql {
    async addstyle(simstyles) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("TransactionType",sql.VarChar(1),simstyles.TransactionType)
        .input("OracleStyleCode",sql.VarChar(20),simstyles.stylecode)
        .input("OracleSimilarCode", sql.VarChar(20),simstyles.similarstylecode)
        .input("SimilarBody", simstyles.BodyNo)
        .execute("addsimstyle");
         return res;
     }
}
module.exports = new simstylesMsSql(); 