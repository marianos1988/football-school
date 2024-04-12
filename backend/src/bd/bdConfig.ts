import mySql from "mysql";

const dbConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "football-school"
}

const pool = mySql.createPool(dbConfig);

export default pool;

