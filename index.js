const fs = require("fs");

console.log("Generating Timezone JSON");

const args = process.argv;

if (args.length < 3) {
    // no file
    const tzdb = require("@vvo/tzdb");
    console.log("... from IANA Database");
    const data = JSON.stringify(tzdb.getTimeZones({ includeUtc: true }));
    writeToFile(data);
} else {
    // file name
    const fileName = args[2];
    const parseZonetab = require("parse-zonetab");

    console.log("... from file", fileName);

    fs.readFile(fileName, (err, raw) => {

        if (err) throw err;

        parseZonetab(raw).then(rows => {
            const data = JSON.stringify(rows);
            writeToFile(data);
        });


    });
}

function writeToFile(data) {

    fs.writeFile("timezones.json", data, (err) => {
        if (err) throw err;
        console.log("... done writing to file: timezones.json");
    });
}

/*
function compare(a, b) {
    const bid = b.id || b.name;
    const aid = a.id || a.name;

    if (aid < bid) {
        return -1;
    }
    if (aid > bid) {
        return 1;
    }
    return 0;
};
*/

