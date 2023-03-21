import fs from 'node:fs'
import handlebars from 'handlebars'

export function renderEmail(
    directory: string,
    numFiles: number,
    execStr: string,
    retcode: number
): string {
    //use env vars
    const templatePath = process.env.EMAIL_TEMPLATE || './templates/default.eml'
    const from = process.env.EMAIL_FROM || 'wdc@example.com'
    const to = process.env.EMAIL_TO || 'to@example.com'
    const subject = process.env.EMAIL_SUBJECT || 'Queue Report'

    const date = new Date().toTimeString()

    // Read the email template file
    const template = fs.readFileSync(templatePath, 'utf8')

    // Compile the template using Handlebars
    const compiledTemplate = handlebars.compile(template)

    // Render the template with the directoryName and numberOfFiles values
    const html = compiledTemplate({
        from,
        to,
        subject,
        directory,
        numFiles,
        date,
        execStr,
        retcode,
    })

    return html
}
