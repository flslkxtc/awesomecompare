'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('"awesomecompare" is now active');
    let disposable = vscode.commands.registerCommand('extension.compare', () => {
        vscode.window.showInformationMessage('Compared!');
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
}