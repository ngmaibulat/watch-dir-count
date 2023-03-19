import dotenv from 'dotenv'
import color from '@colors/colors'
import { countDir } from '@aibulat/fs'
import { MIN_SECONDS } from './config.js'

dotenv.config()

export function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

export function getInterval() {
    let tm = parseInt(process.env.INTERVAL || `${MIN_SECONDS}`)

    if (tm < MIN_SECONDS) {
        tm = MIN_SECONDS
    }

    tm *= 1000 //convert seconds to milliseconds
    return tm
}

export function getThreshold() {
    let threshold = parseInt(process.env.THRESHOLD || `0`)
    return threshold
}

export function getTime() {
    const dt = new Date()
    const msg = dt.toTimeString()
    return msg
}

export async function run() {
    const tm = getTime()
    const threshold = getThreshold()
    const dir = process.env.DIR || `.`

    const res = (await countDir(dir)) as number

    let msg: string = `[${tm}] dir=${dir} threshold=${threshold} count=${res}\n`

    if (res > threshold) {
        msg = color.red(msg)
    } else {
        msg = color.green(msg)
    }

    process.stdout.write(msg)
}
