
const fs = require('fs');

console.log('Generating Timezone JSON');

const args = process.argv;

if (args.length < 3) {
    // no file
    const tzdb = require('@vvo/tzdb');
    console.log('... from IANA Database');
    const data = tzdb.getTimeZones({includeUtc: true});
    fs.writeFile('timezones.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('... done writing to file: timezones.json');
    });
} else {
    const fileName = args[2]
    console.log('... from file', fileName);
}
