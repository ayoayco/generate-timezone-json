#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const parse_zonetab_1 = require("parse-zonetab");
const tzdb = __importStar(require("@vvo/tzdb"));
const args = process.argv;
console.log("Generating Timezone JSON");
if (args.length < 3) {
    // no file
    const data = JSON.stringify(tzdb.getTimeZones({ includeUtc: true }));
    console.log("... from IANA Database");
    writeToFile(data);
}
else {
    // file name
    const fileName = args[2];
    if (isTabFile(fileName)) {
        fs.readFile(fileName, (err, raw) => {
            if (err)
                throw err;
            (0, parse_zonetab_1.parseZonetab)(raw).then(rows => {
                const data = JSON.stringify(rows);
                console.log("... from file", fileName);
                writeToFile(data);
            });
        });
    }
    else {
        console.error('Error: input not a TAB file', fileName);
    }
}
function isTabFile(fileName) {
    if (!!fileName && fileName !== '') {
        const extension = fileName.split('.')[1];
        return (extension && extension.toLowerCase()) === 'tab';
    }
    return false;
}
function writeToFile(data) {
    fs.writeFile("timezones.json", data, (err) => {
        if (err)
            throw err;
        console.log("... done writing to file: timezones.json");
    });
}
