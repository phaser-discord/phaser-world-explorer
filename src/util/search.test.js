import search from './search'

import { issues as testData } from './stub'

describe('search', () => {
  it('should run', () => {
    const testStr = 'tile'
    const version = 'v3'
    const results = search(testStr, testData, version)
    const issues = Object.keys(results)

    let str = `Seraching for ${testStr}; version ${version}\n\n`
    issues.forEach(k => {
      str += `${k}:\n`
      str += '  Tutorials:\n'
      results[k].tutorials.forEach(u => {
        str += `    ${u.name} (${u.version})\n`
      })
      str += '  Updates:\n'
      results[k].updates.forEach(u => str += `    ${u}\n`)
    })

    console.log(str)
  })
})