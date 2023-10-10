//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class ITAssetMsSql {
    async getITAsset() {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .execute("getITAsset");
        return res.recordset;
    }
}
module.exports = new ITAssetMsSql(); 