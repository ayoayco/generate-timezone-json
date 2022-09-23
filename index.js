#!/usr/bin/env node

const fs = require('fs');
const args = process.argv;

console.log("Generating Timezone JSON");

if (args.length < 3) {
    // no file
    const tzdb = require("@vvo/tzdb");
    const data = JSON.stringify(tzdb.getTimeZones({ includeUtc: true }));

    console.log("... from IANA Database");
    writeToFile(data);
} else {
    // file name
    const fileName = args[2];

    if (isTabFile(fileName)) {
        const parseZonetab = require("parse-zonetab");

        fs.readFile(fileName, (err, raw) => {
            if (err) throw err;
            parseZonetab(raw).then(rows => {
                const data = JSON.stringify(rows);
                console.log("... from file", fileName);
                writeToFile(data);
            });

        });
    } else {
        console.error('Error: input not a TAB file', fileName)
    }
}

function isTabFile(fileName) {
    if (!!fileName && fileName !== '') {
        const extension = fileName.split('.')[1];
        return extension === 'tab';
    }

    return false;
}

function writeToFile(data) {
    fs.writeFile("timezones.json", data, (err) => {
        if (err) throw err;
        console.log("... done writing to file: timezones.json");
    });
}
