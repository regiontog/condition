import { readdir } from "fs/promises"
import { join } from "path"
import runScript from "@npmcli/run-script"

const dirs = await readdir("examples")

await Promise.all(dirs.map(async dir => {
    await runScript({
        event: "install",
        cmd: "npm install",
        path: join("examples", dir),
        banner: true,
        stdio: "ignore",
    })

    await runScript({
        event: "prestart",
        path: join("examples", dir),
        banner: true,
        stdio: "ignore",
    })
}))

for (const dir of dirs) {
    await runScript({
        event: "start",
        path: join("examples", dir),
        banner: true,
        stdio: "inherit",
    })
}
