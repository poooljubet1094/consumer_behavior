var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./consumer_behavior.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    createTables(db);
});

function createDatabase() {
    console.log('created database');
    var newdb = new sqlite3.Database('consumer_behavior.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

function createTables(newdb) {
    console.log('created table');
    newdb.exec(`
    create table IF NOT EXISTS tests (
        age int not null,
        gender text not null,
        q1_1 text not null,
        q1_2 text not null,
        q1_3 text not null,
        q1_4 text not null,
        q1_5 text not null,
        q1_6 text not null,
        q1_7 text not null,
        q1_8 text not null,
        q1_9 text not null,
        q1_10 text not null,
        q1_11 text not null,
        q1_12 text not null,
        q1_13 text not null,
        q2_1 int,
        q2_2 int,
        q2_3 int,
        q2_4 int,
        q2_5 int,
        q2_6 int,
        q2_7 int,
        q2_8 int,
        q2_9 int,
        q2_10 int,
        q2_11 int,
        q2_12 int,
        q2_13 int,
        q2_14 int,
        q2_15 int,
        q2_16 int,
        q2_17 int,
        q2_18 int,
        q2_19 int,
        q2_20 int,
        q2_21 int,
        q2_22 int,
        q2_23 int
    );

    create table IF NOT EXISTS users (
        username text not null,
        password text not null
    );
        `, () => {
            console.log('close db');
            db.close();
        });
}