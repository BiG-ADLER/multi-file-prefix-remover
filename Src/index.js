import Config from "../Config/Config.json" assert { type: "json" }
import { readdirSync, rename } from "fs";

let Files = readdirSync(`\\files`)

Files.map((FileNames) => {
    let RemovePrefix = FileNames.replace(Config.TextToRemove, '')

    rename(`\\${Config.FileDir}\\${FileNames}`, `\\${Config.FileDir}\\${RemovePrefix}`, () => {})
})
