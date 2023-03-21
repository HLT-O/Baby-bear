const db = require("./db");

let arr = [
  {
    // name: "curry",
    // sex: "男",
    // phone: 13036397961,
    id: 1,
    age: 30,
    // password: "123456",
  },
  {
    // name: "james",
    // sex: "男",
    // phone: 18983135381,
    id: 2,
    age: 36,
    // password: "123456",
  },
];

arr.map((val) => {
  let sql = `insert into test value(${val.id},${val.age})`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
