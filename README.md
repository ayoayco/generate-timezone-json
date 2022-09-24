# Generate Time Zone JSON

[![npm](https://img.shields.io/npm/v/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![npm](https://img.shields.io/npm/l/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![npm](https://img.shields.io/npm/dt/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![github](https://img.shields.io/github/last-commit/ayoayco/generate-timezone-json)](https://github.com/ayoayco/generate-timezone-json)

This is a node package which allows the generation of a JSON file containing time zones information. You could provide it your own zone.tab file, in which case it will parse the file to generate the JSON. If not given any input, it will pull the latest official time zones for you.

*Please report issues found or suggestions in the [project issues page](https://github.com/ayoayco/generate-timezone-json/issues)*

**Use cases where you may need this script:**
1. you need to sync the time zones information in your frontend app with a tab file (i.e. tab-seperated values), which is commonly used in servers
1. you need to have a dropdown/combobox with the latest time zones in your web application
1. you have a server-side function that needs information related to a location/time zone

**Recommendation:** For performance, I recommend you don't generate the JSON file multiple times in run time. Determine a single point in your app/system's life cycle when it is best to do this (e.g., pre-build time or once when requested for the first time).

**Requirement:** This is a lightweight node.js script, and only requires that you have [node](https://nodejs.org/en/download/) installed.

### Usage (without installation)
Running the following will automatically download and cache the latest version, so there is no need to permanently install anything.
- `npx generate-timezone-json` to generate timezones.json from official IANA Database
- `npx generate-timezone-json <filename>` to generate timezones.json from a TAB file, 
    - for example, using a file named "zone.tab": `generate-timezone-json zone.tab`

*Important Note:* Currently, the structure of the generated JSON file will be different depending on the source (i.e, zone.tab or the IANA time zones database). This will be addressed in [this github issue](https://github.com/ayoayco/generate-timezone-json/issues/1).

### Installation with NPM
If you have a need to permanently install the package do the following:
- Install locally: `npm i generate-timezone-json`
- Install globally: `npm i -g generate-timezone-json`

After installation, you can use `npx generate-timezone-json`.

### Download from Github
You can also download [the latest releases in Github](https://github.com/ayoayco/generate-timezone-json/releases). After downloading, extract the package, and run the unpacked JS script it with node: `node index.js`.

### Other options
This package is specifically useful if you need a JSON file with time zones information. I did not find anything like it but it uses a couple of other packages under the hood. The following may be more appropriate for you:
1. [@vvo/tzdb](https://github.com/vvo/tzdb) - a feature-packed time zones library that automatically releases updates when official time zones are changed
2. [shinnn/parse-zonetab](https://github.com/shinnn/parse-zonetab) - a lightweight parser of zone.tab files

### Planned features (not yet implemented)
1. Specify an output directory with option `--outDir`: `generate-timezone <filename> --outDir <directory>`
2. Uniform JSON structure for all sources
3. type definitions


