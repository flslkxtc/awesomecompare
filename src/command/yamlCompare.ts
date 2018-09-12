import {Uri} from 'vscode';
import {FileCompare} from './fileCompare';

export class YamlCompare extends FileCompare {
    constructor(first: Uri) {
        super('YAML', ['yml', 'yaml'], first);
    }
}