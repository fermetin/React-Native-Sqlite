import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase("places")

export const initDb = () => {
    const promise = new Promise((resolve, reject) => {

        db.transaction(transaction => {
            transaction.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL,city TEXT NOT NULL,adress TEXT NOT NULL,lat REAL ,lng REAL,imageUri TEXT NOT NULL,date TEXT NOT NULL)',
                [],
                (_, resultSet) => {
                    resolve(resultSet)
                },
                (_, error) => {
                    reject(error)
                }
            )
        })
    })
    return promise
}

export const insertPlace = (place) => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                'INSERT INTO places (name, city, adress, lat, lng, imageUri, date) VALUES(?,?,?,?,?,?)'),
                [place.name, place.city, place.adress, place.lat, place.lng, place.imageUri, place.date],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) }
        })
    })
}