const express = require('express')
const static = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const consolidate = require('consolidate')
const mysql = require('mysql')

// connection pool
const db = mysql.createPool({host: 'localhost',
  user: 'root', password: '123456',database: 'blog'
})
 
var server = express()

server.listen(8888)

// parse cookie
server.use(cookieParser('dasdasfdsfdsfdadsa'))

// use session

var arr = []
for( var i=0;i<10000;i++) {
  arr.push('keys_'+Math.random())
}

server.use(cookieSession({name: 'zns_sess_id',keys: arr, maxAge: 20*3600*1000}))

// post data
server.use(bodyParser.urlencoded({extended: false}))
server.use(multer({dest: './www/upload'}).any())

// template engine
server.set('view engine', 'html')

// position of template file
server.set('views', './template')

// which template engine

server.engine('html', consolidate.ejs)

// get user request

server.get('/', function(req,res){
  

  db.query("SELECT * FROM banner_table", (err, data) => {
    if(err) {
      res.send('something is wrong!').end();
    }else{
      res.render('index.ejs', {
        banners: data
      })
    }
  })

  // res.render('index.ejs', {name: 'blue'})
})

// static data
 server.use(static('./www'))