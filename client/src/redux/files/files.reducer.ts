import { File } from './files.actions';
import { ActionTypes, Action } from './file.types';

export interface FilesState {
    files: File[];
    selectedFileId: number | null;
    filterOption: string[];
    orderRuleOption: {};
}

const initialState = {
    files: [],
    selectedFileId: null,
    filterOption: [],
    orderRuleOption: { orderRule: "date", orderOption: 'new' },
};

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
        case ActionTypes.deleteFile:
            return {
                ...state,
                selectedFileId: null,
                files: state.files.filter(file => file.file_id !== action.payload)
            };
        case ActionTypes.addFile:
            return {
                ...state,
                files: [...state.files, action.payload]
            };
        case ActionTypes.changeFilterOption:
            return {
                ...state,
                filterOption: action.payload
            }
        case ActionTypes.changeOrderRuleOption:
            return {
                ...state,
                orderRuleOption: action.payload
            };
        default:
            return state;
    }
};