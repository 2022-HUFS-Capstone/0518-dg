const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());

database = fs.readFileSync('./ETU-63-GD.json');
data1 = JSON.parse(database.toString());

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
}
}));
const sql = require('./sql.js');
const server = app.listen(3000,()=>{
    console.log('Server started. port 3000.');
});

app.post('/api/login',async (request, res)=>{

});
app.post('/api/logout',async (request,res)=>{

})
/*
const db = {
  database: "etua",
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  port : 3307,
  password: "my_new_password"
}

const dbPool = require('mysql').createPool(db);

app.post('/api/:alias',async (request,res)=>{
    try{
        res.send(await req.db(request.params.alias));
    }catch(err){
        res.status(500)
    }
});

const req = {
    async db(alias, param = [], where = '') {
      return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
          resolve({
            error
          });
        } else resolve(rows);
      }));
    }
  };
*/
const conn = mysql.createConnection({
  database: "test",
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  port : 3307,
  password: "my_new_password"
});
/* table insert 
const ssql = 'INSERT INTO test VALUES(?)';
const param = JSON.stringify(data1);
conn.query(ssql,param,function(err,rows,fields){
  if(err){
    console.log(err);
  }
  else{
    console.log(rows.insertId);
  }
});

/* 비동기 쓰일일 있으면
app.get('/api/info',async (req,res)=>{
  //console.log(req.body);
  try{
    res.send(await dbData);
  }catch(err){
    res.status(500)
  }
});
*/
app.get('/api/info:id',function (req,res){
  conn.query('select * from test',function(err,rows,fields){
    if(err){
      console.log(err);
    }
    else{
      const dbData = JSON.parse(rows[0].col);
      //console.log(dbData.info[0]);
      res.send(dbData.info);
    }
  });
});

app.get('/api/relay',function (req,res){
  conn.query('select * from test',function(err,rows,fields){
    if(err){
      console.log(err);
    }
    else{
      const dbData = JSON.parse(rows[0].col);
      //console.log(dbData.info[0]);
      res.send(dbData.relay);
    }
  });
});

app.get('/api/measure',function (req,res){
  conn.query('select * from test',function(err,rows,fields){
    if(err){
      console.log(err);
    }
    else{
      const dbData = JSON.parse(rows[0].col);
      //console.log(dbData.info[0]);
      res.send(dbData.measure);
    }
  });
});

app.get('/api/event',function (req,res){
  conn.query('select * from test',function(err,rows,fields){
    if(err){
      console.log(err);
    }
    else{
      const dbData = JSON.parse(rows[0].col);
      //console.log(dbData.info[0]);
      res.send(dbData.event);
    }
  });
});

app.post('/api/dd', function (req, res) {
  res.send('Hello World!');
});
