import { db } from "$lib/db/index.js";
import { notes } from "$lib/db/schema.js";
import { json } from "@sveltejs/kit";

export async function GET(){
    const allNotes = await db.select().from(notes);
    return json(allNotes)
}