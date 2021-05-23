import { File } from './files.actions';
import { ActionTypes, Action } from './file.types';
import data from '../../data/files.data.json'; // DEMO DATA
import { store } from '../store';

export interface FilesState {
    files: File[];
    selectedFileId: number | null;
}

const initialState = {
    // files: [],
    files: data,
    selectedFileId: null,
}

export const filesReducer = (state: FilesState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.fetchFiles:
            return {
                ...state,
                files: action.payload
            };
        case ActionTypes.selectFile:
            let selectedFileId: number | null = action.payload;
            if(state.selectedFileId === action.payload) {
                selectedFileId = null;
            }
            return {
                ...state,
                selectedFileId: selectedFileId
            };
        default:
            return state;
    }
};