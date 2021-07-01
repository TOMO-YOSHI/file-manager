import { ActionTypes } from './file.types';
// import data from '../../data/files.data.json'; // DEMO DATA

export interface File {
    file_id: number;
    user_id: number;
    file_name: string;
    upload_date: string; // Date
    last_edit_date: string; // Date
    memo_text: string;
    file_url: string;
    image_url: string;
    file_type: string;
    file_size_kb: number;
};

export interface FetchFilesAction {
    type: ActionTypes.fetchFiles;
    payload: File[];
};

export interface SelectFileAction {
    type: ActionTypes.selectFile;
    payload: number;
}

export interface DeleteFileAction {
    type: ActionTypes.deleteFile;
    payload: number;
}

export interface AddFileAction {
    type: ActionTypes.addFile;
    payload: File;
}

export type FilterOptions = 'image' | 'video' | 'audio' | 'others'

export interface ChangeFilterOption {
    type: ActionTypes.changeFilterOption;
    payload: [FilterOptions];
}

type orderOptions = 'new' | 'old' | 'asc' | 'des';

interface optionsPayload {
    orderRule: string;
    orderOption: string;
}

export interface ChangeOrderRuleOption {
    type: ActionTypes.changeOrderRuleOption;
    payload: optionsPayload
}

export const fetchFiles = (payload: File[]) => ({
    type: ActionTypes.fetchFiles,
    payload: payload
});

export const selectFile = (payload: number) => ({
    type: ActionTypes.selectFile,
    payload: payload
});

export const deleteFile = (payload: number) => ({
    type: ActionTypes.deleteFile,
    payload: payload
})

export const addFile = (payload: File) => ({
    type: ActionTypes.addFile,
    payload: payload
})

export const changeFilterOption = (payload: string[]) => ({
    type: ActionTypes.changeFilterOption,
    payload: payload
})

export const changeOrderRuleOption = (payload: optionsPayload) => ({
    type: ActionTypes.changeOrderRuleOption,
    payload: payload
})