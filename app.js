const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express()

const port = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "ola",
});


app.get('/', (req,res) => {
pool.getConnection((err, connection) => {
if (err) throw err
console.log(`connected as id ${connection.threadId}`)
connection.query(`SELECT * from categories`, (err, rows) => {
    connection.release()
    if(!err) {
       res.send(rows)
    }
    else {
        console.log(err)
    }
})
})

});
app.get("/products", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query(`SELECT * from products`, (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query(
      `SELECT * from products WHERE categories_id = ?`,
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

app.get("/item/:id", (req, res) => {
  console.log(req.params.id);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query(
      `SELECT * from products WHERE prod_id = ?`,
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
});

app.delete("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query(
      `DELETE from beers WHERE id = ?`,
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Bear with the record ID: ${[req.params.id]} has been removed`);
        } else {
          console.log(err);
        }
      }
    );
  });
});



app.post("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    const params = req.body
    connection.query(
      `INSERT INTO beers SET ?`,
    params,
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(
            `Bear with the record ID: ${[params.id]} has been added.`
          );
        } else {
          console.log(err);
        }
      }
    );
  });
});

app.put("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    const { id, name, tagline, description, image } = req.body;

    connection.query(
      `UPDATE beers SET name = ?,tagline = ?, description = ?, image = ? WHERE id = ?`,
      [name,tagline, description,image, id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Bear with the record ID: ${name} has been added.`);
        } else {
          console.log(err);
        }
      }
    );
  });
});







app.listen (port, () => console.log(`Listen on port ${port}`))