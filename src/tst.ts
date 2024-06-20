import fs, { PathLike } from 'fs'

export function tst(filepath: PathLike): boolean {
  fs.stat(filepath, exists => {
    if (exists == null) {
      return true
    } else if (exists.code === 'ENOENT') {
      return false
    }
  })
  return false
}
