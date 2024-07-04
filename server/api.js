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

    async getAllChanelsCount () {
        const [count] = await this.pool.query("SELECT * FROM Chanel");
        return count.length;
    }

    async getChanels (count, offset) {

        const [test] = await this.pool.query("SELECT t1.*, (SELECT COUNT(*) FROM Chanel_users WHERE Chanel_users.chanel_id = t1.id) AS users FROM Chanel AS t1 ORDER BY t1.date_create DESC limit ? OFFSET ?;", [count, offset])
        
        return test
    }

    async getUsersCountChanels () {
        const [rows] = await this.pool.query("select * from Chanel");
        return rows
    }

    async addChanelUser () {
        const [rows] = await this.pool.query("select * from Chanel");
        return rows
    }
}

