import { FetchFilesAction, SelectFileAction, DeleteFileAction, AddFileAction, ChangeFilterOption } from './files.actions';

export enum ActionTypes {
    fetchFiles,
    deleteFile,
    editFile,
    selectFile,
    addFile,
    changeFilterOption,
}

export type Action = FetchFilesAction | SelectFileAction | DeleteFileAction | AddFileAction | ChangeFilterOption;