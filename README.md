# Generate Timezone JSON

### Installation
`npm i generate-timezone-json`

### Usage

1. Run: `generate-timezone-json` to generate timezones.json from official IANA Database, 
    - this will generate a file named "timezones.json" with data coming from the official IANA database
1. Run: `generate-timezone-json <filename>` to generate timezones.json from a TAB file, 
    - for example, using a file named "zone.tab": `generate-timezone-json zone.tab`

### Gotchas
1. Note that the structure of the generated JSON file will be different depending on the source (i.e, zone.tab or the IANA timezones database)

### Planned features (not yet implemented)

1. Specify an output directory with option `--outDir`: `generate-timezone <filename> --outDir <directory>`


