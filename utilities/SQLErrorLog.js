const mssqlcon = require('./../dbconnection');

class SQLErrorLog{
    constructor(method,fullurl,jsnbody,statusCode,msg,stack,jsnfile) {
        this.method=method
        this.fullurl=fullurl
        this.jsnbody=JSON.stringify(jsnbody)
        this.statuscode=statusCode
        this.msg=msg
        this.stack=stack
        this.jsnfile=jsnfile
        this.addError()
    }
    
    async addError(){
        const conn = await mssqlcon.getConnection();
        const result =  await conn.request()
        .input("Method",this.method)
        .input("ApiEndPoint",this.fullurl)
        .input("JsnBody",this.jsnbody)
        .input("Status",this.statuscode)
        .input("Message",this.msg)
        .input("StackTrace",this.stack)
        .input("Json",this.jsnfile)
        .execute("addError") 
    }
}
module.exports=SQLErrorLog