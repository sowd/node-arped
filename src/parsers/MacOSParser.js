import ARPParser from './Parser';

const DeviceRegex = /:[\da-fA-F]{1,2} on (\w+)/;

export default class MacOSParser extends ARPParser {
    constructor() {
        super();
    }

    parse(table) {
        return super.parse(table, (row, entry) => {
            let DeviceResult = DeviceRegex.exec(row);
            if (DeviceResult) {
                entry.device = DeviceResult[1];
            }
        });
    }
}
