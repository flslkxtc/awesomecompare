import {OpenDialogOptions, Uri, window, commands} from 'vscode';

export abstract class FileCompare {

    private dialogOptions: OpenDialogOptions;

    private first: Uri;

    constructor(desc: string, fileTypes: string[], first: Uri) {
        this.dialogOptions = {
            canSelectMany: false,
            canSelectFolders: false,
            openLabel: 'Select',
            filters: {
                [desc]: fileTypes
           }
        };
        this.first = first;
    }

    public async compare() {

        let second = await window.showOpenDialog(this.dialogOptions);
        if (second === undefined) {
            console.log('Second file is not selected!');
            return;
        }
        /*let second = window.showOpenDialog(this.dialogOptions).then(file => {
                if (!file) {throw Error();} 
                return file[0];
            }
        ).then(err => {
            console.log('Second file is not selected!');
         });
         */
        console.log('Comparing ' + this.first + ' and ' + second[0]);
        commands.executeCommand('vscode.diff', this.first, second[0], 'title');
    }
}