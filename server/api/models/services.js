import mysql from "mysql";
import dbconfig  from "../../config/database";



let servicesModel = {};

servicesModel.getAllServices= (callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
    conn.query('SELECT s.id, s.name_service, ps.id as id_cat, ps.name_categories FROM services s LEFT JOIN categories ps ON s.id_category = ps.id ORDER BY s.id',
      (err, rows) => {
        if (err) {
          console.log(err)
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

servicesModel.getServiceById = (id, callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
    conn.query('SELECT * FROM services where id='+id,
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

servicesModel.addServices = (data, callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
    let dat = {
      id_category: data.id,
      name: data.name
    }
    conn.query('INSERT INTO services(id_category ,name) VALUES ("' + dat.id_category, dat.name + '")',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          servicesModel.getServiceById(rows.insertId, (error, data) => {
            callback(null, data);
          })
          conn.end()
        }
      }
    )
  }
}



export default servicesModel
