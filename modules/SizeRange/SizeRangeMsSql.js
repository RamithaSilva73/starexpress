//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class sizeRangeMsSql {
    async addsize(sizerange) {
        const p = sizerange.Size.length
        let nRec=0
        for(let i=0;i<sizerange.Size.length;i++)
        {
            const conn = await mssqlcon.getConnection();
            const res = await conn.request()
            .input("TransactionType",sql.VarChar(1),sizerange.TransactionType)
            .input("OracleStyleCode",sql.VarChar(20),sizerange.StyleCode)
            .input("Size", sizerange.Size[i])
            .execute("addsizerange")
            nRec=nRec+res.rowsAffected[0]
        }

        var affected = {
            'RecordsEffected':[nRec]
        };
        return affected; 
     }
}
module.exports = new sizeRangeMsSql(); 