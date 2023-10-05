//sql.Int,sql.VarChar(2),sql.NVarChar(50),sql.Numeric(10,5),sql.DateTime

const mssqlcon = require('../../dbconnection');
sql = require('mssql')

class preprodMsSql {
    async addpreprod(preprod) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("TransactionType",sql.VarChar(1),preprod.TransactionType)
        .input("TrackingNumber",sql.VarChar(20),preprod.TrackingNumber)
        .input("ProductionStage", sql.VarChar(3),preprod.ProductionStage)
        .input("CssDate",preprod.CSSDate)
        .input("Comment",sql.VarChar(50),preprod.Comment)
        .input("SampleRoomName",sql.VarChar(20),preprod.SampleRoomName)
        .input("FtyCode",sql.VarChar(3),preprod.FtyCode)
        .input("SubFactCode",sql.VarChar(3),preprod.SubFtyCode)
        .execute("addpreprod");
        // return res;
        var affected = {
            'RecordsEffected':[res.rowsAffected[0]]
        };
        return affected;
     }

     async gethistorypreproduction (){
        const conn=await mssqlcon.getConnection();
        const res=await conn.request().execute("getpreproductionHistory");
        return res.recordset;      
      }
      

}
module.exports = new preprodMsSql(); 