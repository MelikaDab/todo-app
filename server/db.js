// communicate with postgres database


const Pool = require("pg").Pool
require("dotenv").config()

const pool = new Pool({
    username: "postgres",
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool

/*
const {Client} = require("pg")
let DB_URL
DB_URL = "postgresql:///todoapp"

let db = new Client({
    connectionString: DB_URL
})

db.connect()

module.exports = db
*/