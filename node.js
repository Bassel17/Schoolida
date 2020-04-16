const fs = require('fs');
const neatCsv = require('neat-csv');


fs.readFile('./students.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    fs.writeFile('students.json', JSON.stringify(await neatCsv(data)), function (err) {
        if (err) return console.log(err);
    });
});

