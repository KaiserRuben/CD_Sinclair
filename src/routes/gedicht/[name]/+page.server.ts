import fs from "fs";

export async function load({params}) {
    const gedichte = JSON.parse(fs.readFileSync("./gedichte.json", "utf-8"));
    return { gedicht: gedichte.find((g:Record<string, string>) => g.title === params.name) }

}