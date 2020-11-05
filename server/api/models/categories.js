import mysql from "mysql";
import dbconfig  from "../../config/database";



let categoryModel = {};

categoryModel.getAllCategories= (callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {

    conn.query('SELECT * FROM categories ORDER BY id',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
          conn.end()
        }
      }
    )
  }
}

categoryModel.getCategoryById = (id, callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
    conn.query('SELECT * FROM categories where id='+id,
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
          conn.end()
        }
      }
    )
  }
}

categoryModel.addCategory = (data, callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
    conn.query('INSTERT categories(name) VALUES (' + data + ')',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
          conn.end()
        }
      }
    )
  }
}



export default categoryModel
