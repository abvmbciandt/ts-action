import { PathLike } from "fs"

export function extract(files:PathLike[]): void {
  const tar = require('tar')
  for (var file of files) {
    console.log(file)
    tar.x(
      // or `tar.extract`
      {
        // or `file:`
        f: file
      }
    )
  }
}
