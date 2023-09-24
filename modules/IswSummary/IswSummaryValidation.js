const mssqlcon = require("../../dbconnection")

class CheckStyle
{
    async IswSummaryValidation(req,res)
    {
        const conn = await mssqlcon.getConnection();
        const result = await conn.request()
        .input("TransactionType",req.body.TransactionType)
        .input("OracleStyleCode",req.body.StyleCode)
        .input("Line",req.body.LineNo)
        .input("LotName",req.body.Lot)
        .input("FacCd",req.body.FactoryCd)
        .input("IswDate", req.body.IssueDate)
        .output("stylematch",0)
        .execute("IswSummaryValidation")

        return result.output.stylematch
    }
}
module.exports = new CheckStyle(); 