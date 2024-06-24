import fs, { PathLike } from 'fs'

export function tst(filepath: PathLike): boolean {
  console.log(filepath)
  if (fs.existsSync(filepath)) {
    console.log('exists')
    return true
  } else {
    console.log('fail')
    return false
  }
}
