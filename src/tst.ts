import fs, { PathLike } from 'fs'

export function tst(filepath: PathLike): boolean {
  console.log(filepath)
  console.log('-----------------------------------')
  var testFolder: string = '../../../'

  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })

  console.log('-----------------------------------')
  testFolder = '../../'

  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })
  console.log('-----------------------------------')
  testFolder = '../'

  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })
  console.log('-----------------------------------')
  testFolder = './'

  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })
  console.log('-----------------------------------')

  if (fs.existsSync(filepath)) {
    console.log('exists')
    return true
  } else {
    console.log('fail')
    return false
  }
}
