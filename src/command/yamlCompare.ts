import {FileCompare} from './fileCompare';

export class YamlCompare extends FileCompare {

    constructor() {
        super('YAML', ['yml', 'yaml']);
    }

}