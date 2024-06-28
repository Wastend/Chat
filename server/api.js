import dotenv from 'dotenv'
import sql from 'mysql2'
dotenv.config()

export default class Api {

    constructor (){
        this.pool = sql.createPool({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            port: process.env.port
        }).promise()   
    }

    async getAllChanels () {
        const [rows] = await this.pool.query("select * from Chanel");
        return rows
    }
}

