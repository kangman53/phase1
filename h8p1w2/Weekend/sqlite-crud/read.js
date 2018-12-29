const db = require('./db.js');

db.all('SELECT * FROM people', (err, people) => {
  if (err) {
    console.log(err);
} else {
    console.log(people);
}
})
