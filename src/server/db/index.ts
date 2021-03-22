import * as mysql from "mysql";
import Blogs from "./blogs";

export const Connection = mysql.createConnection({
    // don't store pswd here - only putting here for walkthru
    host: "localhost",
    port: 3000, // or 3000
    user: "blog",
    password: "password123",
    database: "blog"
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    Blogs
}