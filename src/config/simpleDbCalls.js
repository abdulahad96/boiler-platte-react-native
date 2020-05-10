import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db', });

export const create_Table = () => {
    return new Promise((resolve, reject) => {
        db.transaction((txn) => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='RN_Boilerplate'",
                [],
                (tx, res) => {
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS RN_Boilerplate', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS RN_Boilerplate (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_lat INTEGER, user_long INTEGER)',
                            []
                            , (tx, res) => {
                                // console.log('res', res);
                                resolve("Table Successfully Created!")
                            }, (err) => {
                                // console.log('err', err.message);
                                resolve(err.message)
                            });
                    } else {
                        console.log('item:', res.rows.length);
                        resolve("Table Aready Created!")
                    }
                }, (err) => {
                    console.log('item:', err);
                    reject(err)
                }
            );
        });
    });
}

export const insert_Data_In_Table = (user_name, user_lat, user_long) => {
    return new Promise((resolve, reject) => {
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO RN_Boilerplate (user_name, user_lat, user_long) VALUES (?,?,?)',
                [user_name, user_lat, user_long],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        resolve('Data Successfully Stored!')
                    } else {
                        reject('Failed to Stored!')
                    }
                }, (err) => {
                    console.log(err, "errorr")
                    reject(err)
                }
            );
        });
    });
}

export const get_Single_Data_From_Table = (user_id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM RN_Boilerplate where user_id = ?',
                [user_id],
                (tx, results) => {
                    let len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        // console.log(results.rows.item(0));
                        resolve(results.rows.item(0))
                    } else {
                        reject('No data found')
                    }
                }
            );
        });
    });
}

export const get_All_Data_From_Table = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM RN_Boilerplate', [], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                // console.log(temp, 'tempppppppppppppppppppppppppppppppppppp')
                resolve(temp)
            }, (err) => {
                console.log(err, "errorr")
                reject(err)
            });
        });
    });
}

export const update_Data_In_Table = (user_name, user_lat, user_long, user_id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE RN_Boilerplate set user_name=?, user_lat=? , user_long=? where user_id=?',
                [user_name, user_lat, user_long, user_id],
                (tx, results) => {
                    // console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        console.log('Results', results.rowsAffected);
                    } else {
                        console.log('Updation Failed');
                    }
                }
            );
        });
    });
}

export const delete_Single_Data_From_Table = (user_id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM  RN_Boilerplate where user_id=?',
                [user_id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        resolve('User deleted successfully')
                    } else {
                        reject('Please insert a valid Id')
                    }
                }
            );
        });
    });
}