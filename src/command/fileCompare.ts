import {OpenDialogOptions, window} from 'vscode';

export abstract class FileCompare {

    private dialogOptions: OpenDialogOptions;

    constructor(desc: string, fileTypes: string[]) {
        this.dialogOptions = {
            canSelectMany: false,
            canSelectFolders: false,
            openLabel: 'Select',
            filters: {
                [desc]: fileTypes
           }
        };
    }

    public async compare() {
        window.showOpenDialog(this.dialogOptions).then(
            fileUri => {
                if (fileUri && fileUri[0]) {
                    console.log(fileUri[0].path);
                }
            }
        );
    }
}