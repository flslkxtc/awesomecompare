'use strict';

import {ExtensionContext, Uri, commands} from 'vscode';
import { YamlCompare } from './command/yamlCompare';
import { PropertiesCompare } from './command/propertiesCompare';

export function activate(context: ExtensionContext) {
    console.log('"awesomecompare" is now active');
    let compareProperties = commands.registerCommand('extension.compareProperties', (file: Uri) => new PropertiesCompare(file).compare());
    let compareYaml = commands.registerCommand('extension.compareYaml', (file: Uri) => new YamlCompare(file).compare());
    context.subscriptions.push(compareProperties);
    context.subscriptions.push(compareYaml);
}

export function deactivate() {
}