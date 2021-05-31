import { gql } from '@apollo/client';

const fileDetailFragment = gql`
    fragment fileDetail on File {
        user_id
        file_name
        upload_date
        memo_text
        file_url
        image_url
        file_type
        file_size_kb
    }
`;

export const GET_FILES = gql`
    {
        files {
            file_id
            file_name
            upload_date
            last_edit_date
            memo_text
            file_url
            image_url
            file_type
            file_size_kb
        }
    }
`;

export const CREATE_FILE = gql`
    mutation CreateFile($input: CreateFileInput!) {
        createFile(input: $input) {
            file_id
            user_id
            file_name
            upload_date
            memo_text
            file_url
            image_url
            file_type
            file_size_kb
        }
    }
    ${fileDetailFragment}
`;

export const DELETE_FILE = gql`
    mutation DeleteFile($input: Int!) {
        deleteFile(file_id: $input) {
            file_id
            user_id
            file_name
            upload_date
            memo_text
            file_url
            image_url
            file_type
            file_size_kb
        }
    }
`;