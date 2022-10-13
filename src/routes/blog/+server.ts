import {json} from '@sveltejs/kit';
import * as fs from "fs";

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const beitrag = await request.json();

    try {
        const beitraege = JSON.parse(fs.readFileSync("./beitraege.json", "utf-8"));
        const b = [...beitraege, beitrag];
        await fs.writeFileSync('./beitraege.json', JSON.stringify(b));
    } catch (e) {
        console.error(e)
        return {
            status: 500
        }
    }

    return json(b);
}