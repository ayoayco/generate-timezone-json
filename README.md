# Generate Time Zone JSON

[![npm](https://img.shields.io/npm/v/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![npm](https://img.shields.io/npm/l/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![npm](https://img.shields.io/npm/dt/generate-timezone-json)](https://www.npmjs.com/package/generate-timezone-json)
[![github](https://img.shields.io/github/last-commit/ayoayco/generate-timezone-json)](https://github.com/ayoayco/generate-timezone-json)

Generate a JSON file containing time zones from the official IANA Database or your own `zone.tab` file 🚀

```
npx generate-timezone-json
```

**Use case:** This script is specifically useful when you need a JSON file with timezones information. Maybe you need this information to be synced with your server which uses a tab file (i.e., tab-separated values). Or maybe you just need a static persistent file generated from the latest official time zones database. In these cases, this script is what you need. For other use cases, see "Other Options" section below.

*Please report issues found or suggestions in the [project issues page](https://github.com/ayoayco/generate-timezone-json/issues)*

**Recommendation:** For performance, I recommend you don't generate the JSON file multiple times in run time. Determine a single point in your app/system's life cycle when it is best to do this (e.g., pre-build time or once when requested for the first time).

**Requirement:** This is a lightweight node.js script, and only requires that you have [node](https://nodejs.org/en/download/) installed.

# Usage using NPX
Running the following will automatically download and cache the latest version, so there is no need to permanently install anything.
- `npx generate-timezone-json` to generate timezones.json from official IANA Database
- `npx generate-timezone-json <filename>` to generate timezones.json from a TAB file, 
    - for example, using a file named "zone.tab": `generate-timezone-json zone.tab`

*Important Note:* Currently, the structure of the generated JSON file will be different depending on the source (i.e, zone.tab or the IANA time zones database). This will be addressed in [this github issue](https://github.com/ayoayco/generate-timezone-json/issues/1).

# Installation with NPM
If you have a need to permanently install the package do the following:
- Install locally: `npm i generate-timezone-json`
- Install globally: `npm i -g generate-timezone-json`

After installation, you can use `npx generate-timezone-json`.

# Download from Github
You can also download [the latest releases in Github](https://github.com/ayoayco/generate-timezone-json/releases). After downloading, extract the package, and run the unpacked JS script it with node: `node index.js`.

# Other options
This package is specifically useful if you need a JSON file with time zones information. I did not find anything like it but it uses a couple of other packages under the hood. The following may be more appropriate for you:
1. [@vvo/tzdb](https://github.com/vvo/tzdb) - a feature-packed time zones library that automatically releases updates when official time zones are changed
2. [shinnn/parse-zonetab](https://github.com/shinnn/parse-zonetab) - a lightweight parser of zone.tab files

# Planned features (not yet implemented)
1. Specify an output file path with option `--output`
2. Uniform JSON structure for all sources
3. Release type definitions

*Please report issues found or suggestions in the [project issues page](https://github.com/ayoayco/generate-timezone-json/issues)*
