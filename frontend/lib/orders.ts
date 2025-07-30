import Database from "better-sqlite3";
import db from "./db";
import { Class, Order } from "../types/db";
import getClassById from "./classes";


export default async function getOrderById(id: number): Promise<{order: Order, gameClass: Class} | null> {
    const gameClass = await getClassById(id);
    const stmt2 = db.prepare('SELECT * FROM orders WHERE id = ?');
    const order = stmt2.get(id) as Order;

    if (!order || !gameClass) return null;

    return { order, gameClass };
}