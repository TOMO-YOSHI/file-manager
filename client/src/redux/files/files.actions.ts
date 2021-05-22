import { ActionTypes } from './file.types';

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
}

export const action = () => {}