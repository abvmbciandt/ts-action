import { PathLike } from "fs"

export function extract(files:PathLike[]): void {
  const tar = require('tar')
  for (var file of files) {
    tar.x(
      // or `tar.extract`
      {
        // or `file:`
        f: file
      }
    )
  }
}
