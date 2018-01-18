import ARP from './ARP';
import ChildProcess from 'child_process'

export default class WindowsARP extends ARP {
    constructor() {
        super();
    }

    fetch() {
        const result = ChildProcess.spawnSync('ARP.EXE', ['-a']);
        if (result.error) {
            throw error;
        }
        return result.stdout.toString();
    }
}
