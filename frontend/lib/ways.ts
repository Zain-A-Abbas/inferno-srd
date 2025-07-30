import Database from "better-sqlite3";
import db from "./db";
import { Way, Class } from "../types/db";
import getClassById from "./classes";

export default async function getWayById(id: number): Promise<{way: Way, gameClass: Class} | null> {
    const gameClass = await getClassById(id);
    const stmt2 = db.prepare('SELECT * FROM ways WHERE id = ?');
    const way = stmt2.get(id) as Way;

    if (!way || !gameClass) return null;

    return { way, gameClass };
}