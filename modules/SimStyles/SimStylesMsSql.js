const mssqlcon = require('../../dbconnection');

class simstylesMsSql {
    async addstyle(simstyle) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("OracleStyleCode", simstyle.OracleStyleCode)
        .input("OracleSimilarCode", simstyle.OracleSimilarCode)
        .input("SimilarBody", simstyle.SimilarBody)
        .execute("addsimstyle");
        return res;
     }
}
module.exports = new simstylesMsSql();