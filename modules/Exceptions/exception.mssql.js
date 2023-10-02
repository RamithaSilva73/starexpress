const mssqlcon = require('../../dbconnection');
class exceptionMSSql {
  
  async getoracleexception() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getApierrorlog");
    return res.recordset;
  }
  

  async getstarexception() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("getApistarerrorlog");
    return res.recordset;
  }
  

  async poststarexception(exception) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("cService", exception.Service)
    .input("cError", exception.Error)
    .input("cSeverity", exception.Severity)
    .input("cAction", exception.Action)
    .input("cDescription", exception.Description)
    .input("cUser", exception.User)
    .execute("addstarerrorlog");
    return res;
 }


 async postoracleexception(exception) {
  const conn = await mssqlcon.getConnection();
  const result =  await conn.request()
  .input("Method",exception.method)
  .input("ApiEndPoint",exception.fullurl)
  .input("JsnBody",exception.jsnbody)
  .input("Status",exception.statuscode)
  .input("Message",exception.msg)
  .input("StackTrace",exception.stack)
  .input("Json",exception.jsnfile)
  .execute("addError") 
  return result;
}



 async updatstarexception(exception) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("cService", exception.Service)
  .input("cError", exception.Error)
  .input("cSeverity", exception.Severity)
  .input("cAction", exception.Action)
  .input("cDescription", exception.Description)
  .input("cUser", exception.User)
  .input("Clear", exception.Clear)
  .execute("updatestarerrorlog");
  return res;
 }


 async updateoracleexception(exception) {
  const conn = await mssqlcon.getConnection();
  const result =  await conn.request()
  .input("Method",exception.method)
  .input("ApiEndPoint",exception.fullurl)
  .input("JsnBody",exception.jsnbody)
  .input("Status",exception.statuscode)
  .input("Message",exception.msg)
  .input("StackTrace",exception.stack)
  .input("Json",exception.jsnfile)
  .input("Action",exception.Action)
  .input("Clear",exception.Clear)
  .execute("addError") 
  return result;
}


}
module.exports = new exceptionMSSql();