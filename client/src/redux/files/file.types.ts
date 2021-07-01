import { FetchFilesAction, SelectFileAction, DeleteFileAction, AddFileAction, ChangeFilterOption, ChangeOrderRuleOption } from './files.actions';

export enum ActionTypes {
    fetchFiles,
    deleteFile,
    editFile,
    selectFile,
    addFile,
    changeFilterOption,
    changeOrderRuleOption,
}

export type Action = FetchFilesAction | SelectFileAction | DeleteFileAction | AddFileAction | ChangeFilterOption | ChangeOrderRuleOption;