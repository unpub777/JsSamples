'use strict';
var path = require('path');
var express = require('express');

const app = express();
const sqlite3 = require('sqlite3').verbose();

var staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.get("/api/todos", function(request, response) {
    let db = new sqlite3.Database('./db/database.db');
    let sql = 'SELECT * FROM ToDoItems';

    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        response.send(rows);
      });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('listening');
});