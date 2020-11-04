import mysql from "mysql";
import dbconfig  from "../../config/database";



let userModel = {};

userModel.getUsers = (callback) => {
    const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
    if (conn) {
        
        conn.query('SELECT * FROM user ORDER BY id',
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

userModel.getUsersById = (id, callback) => {
    const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
    if (conn) {
        conn.query('SELECT * FROM user where id='+id,
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

export default userModel