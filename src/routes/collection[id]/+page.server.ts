import fs from "fs";

export async function load() {
    const gedichte = JSON.parse(fs.readFileSync("./gedichte.json", "utf-8"));
    return { gedichte: gedichte }

}