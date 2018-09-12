import {Uri} from 'vscode';
import {FileCompare} from './fileCompare';

export class PropertiesCompare extends FileCompare {
    constructor(first: Uri) {
        super('Properties', ['properties'], first);
    }
}