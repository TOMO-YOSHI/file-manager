import { ActionTypes } from './file.types';
import data from '../../data/files.data.json'; // DEMO DATA

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

export const fetchFiles = () => ({
    type: ActionTypes.fetchFiles,
    payload: data
});

export const selectFile = (payload: number) => ({
    type: ActionTypes.selectFile,
    payload: payload
});