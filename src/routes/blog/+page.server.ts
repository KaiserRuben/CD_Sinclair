import fs from "fs";

export async function load() {
    const beitraege = JSON.parse(fs.readFileSync("./beitraege.json", "utf-8"));
    return {
        beitraege: beitraege
    }
}