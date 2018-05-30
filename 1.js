const mysql =require('mysql')

// createConnection  (server username pass database)

let db = mysql.createConnection({host: 'localhost' ,user: 'root', password: '123456', database: 'mynode'})

console.log(db)

// search
// add -> insert
// insert into table_name values( '******')
// example
// insert into user_table(ID,username,password) values(0,'zhangsan','123456')
// del -> delete
// update - > update
// select -> select

// search 
// db.query(SQL, (err,data) =>{})

db.query("select * from `user_table`;", (err,data) => {
  if(err) {
    console.log('something is wrong, please recheck!')
  }else{
    console.log('query ok!')
    console.log(JSON.stringify(data))
  }
})