import fs from 'node:fs';
import handlebars from 'handlebars';
// Replace directoryName and numberOfFiles with actual values
const directory = 'directory';
const numFiles = 10;
const templatePath = 'templates/default.html';
const date = new Date().toTimeString();
// Read the email template file
const template = fs.readFileSync(templatePath, 'utf8');
// Compile the template using Handlebars
const compiledTemplate = handlebars.compile(template);
// Render the template with the directoryName and numberOfFiles values
const html = compiledTemplate({ directory, numFiles, date });
// Log the generated HTML for testing purposes
console.log(html);
