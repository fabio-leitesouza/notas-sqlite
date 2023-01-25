import * as SQlite from 'expo-sqlite'

function abreConexao() {
    const database = SQlite.openDatabase("db.db")
    return database
}

export const db = abreConexao()