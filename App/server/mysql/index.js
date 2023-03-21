// mysql/index.js

var mysql = require("mysql");
var config = require("../config/default.js");

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
});

class Mysql {
  constructor() {}
  // 查询
  query(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          throw error;
        }
        resolve(results);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }

  // 增加
  insert(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          throw error;
        }
        resolve(results);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }

  // 修改
  update(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          throw error;
        }
        resolve(results);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }

  // 删除
  delete(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          throw error;
        }
        resolve(results);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }
}

module.exports = new Mysql();
