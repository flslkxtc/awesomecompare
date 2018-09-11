'use strict';

import {ExtensionContext, commands} from 'vscode';
import { YamlCompare } from './command/yamlCompare';
import { PropertiesCompare } from './command/propertiesCompare';

export function activate(context: ExtensionContext) {
    console.log('"awesomecompare" is now active');
    let compareProperties = commands.registerCommand('extension.compareProperties', () => new PropertiesCompare().compare());
    let compareYaml = commands.registerCommand('extension.compareYaml', () => new YamlCompare().compare());
    context.subscriptions.push(compareProperties);
    context.subscriptions.push(compareYaml);
}

export function deactivate() {
}