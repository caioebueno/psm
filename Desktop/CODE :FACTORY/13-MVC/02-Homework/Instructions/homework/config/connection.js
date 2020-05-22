var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "st1ulq091q09kz5h",
  password: "vinvzllp0f51qvgm",
  database: "ekijsv7ag4w0o7qw"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
