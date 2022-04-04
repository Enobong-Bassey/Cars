
const Pool = require("pg").Pool;

// DO NOT EDIT THIS SECTION!!!
const pool = new Pool({
  user: "Blackforce",
  host: "blackforce.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
  database: "blackforcetraining2022",
  password: "BlackforceTraining2022",
  port: 5432,
});


// DO NOT EDIT THIS SECTION!!!
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// if no error on idle client, pool connects to database
pool.connect((err, client, done) => {
  //if there is an error with our database connection strings
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  //if no error then we have successfully connected
  console.log("Connected to database");
  // do not call done(); - because we want to use this connection
  // to create/insert/delete or select records from our database
  // sometime we might also want to export this connection for other resources
});

// now lets create a new table called Blackforcesahmie -  Please replace sahmie with your full - name no spaces
// And also, go into the blog controller and edit all the queries to call your own table,
//you don't want to write/delete records in another person's table.
pool.query(
  `CREATE TABLE IF NOT EXISTS BlackforceprojectEnobong(
      ID SERIAL PRIMARY KEY,
      MANUFACTURER VARCHAR(40) NOT NULL,
      MODEL VARCHAR(40) NOT NULL,
      COLOR VARCHAR(40) NOT NULL,
      YEAR INTEGER NOT NULL)`,
  (err, res) => {
    if (err) {
      console.log(err);
      console.log("Error or issue with table creation");
    } else {
      console.log("BlackforceprojectEnobong table created successfully");
    }
  }
);

// pool.end();

// export connection
module.exports = pool;
