import dotenv from 'dotenv'
import crypto from 'crypto'
import sql from 'mysql2'
dotenv.config()

function encrypt(text) {
    const algorithm = 'aes-256-ctr'
    const passwordAlg = 'd6F3Efeq'
    var cipher = crypto.createCipher(algorithm, passwordAlg)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

export default class Api {

    constructor() {
        this.pool = sql.createPool({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            port: process.env.port
        }).promise()

    }



    async getAllChanelsCount() {
        const [count] = await this.pool.query("SELECT * FROM Chanel");
        return count.length;
    }

    async getChanels(count, offset) {

        const [test] = await this.pool.query("SELECT t1.*, (SELECT COUNT(*) FROM Chanel_users WHERE Chanel_users.chanel_id = t1.id) AS users FROM Chanel AS t1 ORDER BY t1.date_create DESC limit ? OFFSET ?;", [count, offset])

        return test
    }

    async getUsersCountChanels() {
        const [rows] = await this.pool.query("select * from Chanel");
        return rows
    }

    async addChanelUser() {
        const [rows] = await this.pool.query("select * from Chanel");
        return rows
    }

    async authHandle(data) {
        const name = data.name.toLowerCase()
        const password = encrypt(data.password)
        console.log(name, password);
        const [rows] = await this.pool.query("select * from Users where user_name = ? and password = ?", [name, password]);
        return rows.length ? true : false
    }

    async registerHandle(data) {
        const name = data.name.toLowerCase()
        const password = encrypt(data.password)
        const [rows] = await this.pool.query("INSERT INTO users (user_name, password) VALUES (?, ?)", [name, password]);
        // return rows.length ? true : false
    }
}

