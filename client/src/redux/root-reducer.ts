import { combineReducers } from 'redux';
import { filesReducer, FilesState } from './files'

export interface StoreState {
    filesState: FilesState
}

export const rootReducer = combineReducers<StoreState>({
    filesState: filesReducer
});