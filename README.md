# Generate Timezone JSON

![npm](https://img.shields.io/npm/v/generate-timezone-json)
![npm](https://img.shields.io/npm/l/generate-timezone-json)
![npm](https://img.shields.io/npm/dt/generate-timezone-json)
![npm](https://img.shields.io/github/last-commit/ayoayco/generate-timezone-json)

### Installation
Run `npm i generate-timezone-json` to install in your current node project

or install globally with `npm i -g generate-timezone-json`

### Usage

1. Run: `npx generate-timezone-json` to generate timezones.json from official IANA Database, 
    - this will generate a file named "timezones.json" with data coming from the official IANA database
1. Run: `npx generate-timezone-json <filename>` to generate timezones.json from a TAB file, 
    - for example, using a file named "zone.tab": `generate-timezone-json zone.tab`

If installed globally, the `npx` is optional.

*Important Note:* the structure of the generated JSON file will be different depending on the source (i.e, zone.tab or the IANA timezones database)

### Planned features (not yet implemented)

1. Specify an output directory with option `--outDir`: `generate-timezone <filename> --outDir <directory>`
2. Uniform JSON structure for all sources
3. type definitions


