const pool = require('./auth_db');

// Function to get all data from the bcrypt_qap3_info table
const getLogins = async () => {
    if(DEBUG) console.log("Login Method Hit")
    return new Promise(function(resolve,reject){
const sql = 'SELECT id, first_name, number, last_name, email, password FROM public."bcrypt_qap3_info"'
pool.query(sql,[],(err,result)=>{
    if(err){
        reject(err)
    } else{
        resolve(result.rows)
        console.table(result.rows)
    }
})})
}

module.exports = {
    getLogins
    // insertData
    };