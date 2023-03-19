import dotenv from 'dotenv'
import { exec } from './lib.js'

dotenv.config()

const execStr = process.env.EXEC || 'ls -la'
const execArr = execStr.split(/\s+/)

const cmd = execArr[0]
const args = execArr.slice(1)

console.log(execArr, cmd, args)

try {
    await exec(cmd, args)
} catch (err) {
    console.log('Error!')
}
