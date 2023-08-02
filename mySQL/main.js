
const connection = require('./bd')


const sql = 'SELECT * FROM usuarios';
const sql2 = 'SELECT * FROM usuarios WHERE id = 15'


const resultSet = (error, results) => {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
    }
}

//const query = connection.query(sql, resultSet)
const query2 = connection.query(sql2, resultSet)






