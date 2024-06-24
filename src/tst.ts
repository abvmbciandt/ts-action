import fs, { PathLike } from 'fs'

export function tst(filepath: PathLike): boolean {
  if (fs.existsSync(filepath)) {
    return true
  } else {
    return false
  }
}
