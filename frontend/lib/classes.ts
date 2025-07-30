import Database from "better-sqlite3";
import db from "./db";
import { Class } from "../types/db";

export default async function getClassById(id: number): Promise<Class | null> {
    const stmt = db.prepare('SELECT * FROM classes WHERE id = ?');
    const gameClass = stmt.get(id) as Class;
    return Promise.resolve(gameClass ?? null);
}