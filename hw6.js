import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("blog.db");
db.query(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    body TEXT
    )
`);

const posts = [
    {title:'1st option',time:'2025-05-31', body:'1st'},
    {title:'2nd option',time:'2025-05-31', body:'2nd'},
    {title:'3rd option',time:'2025-05-31', body:'3rd'}
];

// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (title,time, body) VALUES (?,?,?)", [post.title,post.time, post.body]);

// Print out data in table
for (const [id, time, title, body] of db.query("SELECT id, time, title, body FROM posts"))
  console.log(id, time, title, body);

// Close connection
db.close();