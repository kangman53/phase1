const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./first.db', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS 'people' ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'name' TEXT, 'phone_number' TEXT, 'email' TEXT UNIQUE);`, (err) => {
  if (err) {
    console.log(err);
} else {
    console.log('Success');
}
});

module.exports = db;
