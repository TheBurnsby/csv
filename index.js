import { writeFile } from 'fs';

const items = []; // NOTE: Data to be converted definition
let columns = ['example']; // NOTE: Column definition
const outputFile = 'scripts/test.csv';

const result = { rows: [] };

console.log(`Started - items: ${items.length}`);

// items.forEach((item, index) => {
for (const item of items) {
    const row = [];

    count++;

    // if (index === 0) columns = Object.keys(item).sort();

    columns.forEach((key) => {
        if (typeof item[key] !== 'string') item[key] = JSON.stringify(item[key]);

        row.push(`"${item[key] || ''}"`);
    });

    result.rows.push(row);
}
// });

const csv = `${columns.join(',')}\n${result.rows.join('\n')}`;

writeFile(outputFile, csv, 'utf8', function (error) {
    if (error) console.log(error);

    console.log('Complete!');
    console.log(count);
});