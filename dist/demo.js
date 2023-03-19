import fs from 'node:fs';
import ejs from 'ejs';
// Replace directoryName and numberOfFiles with actual values
const directoryName = 'directory';
const numberOfFiles = 10;
// Read the email template file
const template = fs.readFileSync('templates/default.html', 'utf8');
// Render the template with the directoryName and numberOfFiles values
const html = ejs.render(template, { directoryName, numberOfFiles });
// Log the generated HTML for testing purposes
console.log(html);
