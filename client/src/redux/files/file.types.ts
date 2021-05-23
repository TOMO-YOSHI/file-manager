import { FetchFilesAction, SelectFileAction } from './files.actions';

export enum ActionTypes {
    fetchFiles,
    deleteFile,
    editFile,
    selectFile
}

export type Action = FetchFilesAction | SelectFileAction;