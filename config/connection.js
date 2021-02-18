const mysql = require("mysql");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 8080,
        root: 'root',
        password: '',
        database:'dev_jobs_db',
    })
}

connection.connect(function (err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threedId);
})

module.exports = connection;