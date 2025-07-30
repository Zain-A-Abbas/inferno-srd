import Database from 'better-sqlite3'
import path from 'path'

const dbPath = 'database/inferno.db'
const db = new Database(dbPath);

export default db;
