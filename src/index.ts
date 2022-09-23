#!/usr/bin/env node
import * as fs from 'fs';
import * as tzdb from '@vvo/tzdb';
import * as parser from 'parse-zonetab/index';

const args: string[] = process.argv;

console.log("Generating Timezone JSON");

if (args.length < 3) {
    // no file
    const data = JSON.stringify(tzdb.getTimeZones({ includeUtc: true }));

    console.log("... from IANA Database");
    writeToFile(data);
} else {
    // file name
    const fileName = args[2];

    if (isTabFile(fileName)) {

        fs.readFile(fileName, (err, raw) => {
            if (err) throw err;
            parser.parseZonetab(raw).then((rows: any[]) => {
                const data = JSON.stringify(rows);
                console.log("... from file", fileName);
                writeToFile(data);
            });

        });
    } else {
        console.error('Error: input not a TAB file', fileName)
    }
}

function isTabFile(fileName: string) {
    if (!!fileName && fileName !== '') {
        const extension = fileName.split('.')[1];
        return (extension && extension.toLowerCase()) === 'tab';
    }

    return false;
}

function writeToFile(data: string) {
    fs.writeFile("timezones.json", data, (err) => {
        if (err) throw err;
        console.log("... done writing to file: timezones.json");
    });
}
