import Config from "../Config/Config.json" assert { type: "json" }
import { readdirSync, rename } from "fs";
import { userInfo } from "os";

const FilePath = `\\Users\\${userInfo().username}\\Desktop\\${Config.FileDir}`

let Files = readdirSync(FilePath)

Files.map((FileNames) => {
    let RemovePrefix = FileNames.replace(Config.TextToRemove, '')

    rename(`${FilePath}\\${FileNames}`, `${FilePath}\\${RemovePrefix}`, () => {})
})
