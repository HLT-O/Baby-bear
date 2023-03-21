let mysql = require("mysql");

// 连接池
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lyxa1105",
  database: "app",
});

// 对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release(); // 中断连接
    });
  });
}

exports.query = query;
