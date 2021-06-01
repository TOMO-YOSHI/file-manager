import { gql } from '@apollo/client';

// const fileDetailFragment = gql`
//     fragment fileDetail on File {
//         user_id
//         file_name
//         upload_date
//         memo_text
//         file_url
//         image_url
//         file_type
//         file_size_kb
//     }
// `;

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

// export const CREATE_FILE = gql`
//     mutation CreateFile(
//         $file_name: String!,
//         $upload_date: String!,
//         $file_url: String!,
//         $image_url: String!,
//         $file_type: String!,
//         $file_size_kb: Int,
//         ) {
//         createFile(
//             file_name: $file_name,
//             upload_date: $upload_date,
//             file_url: $file_url,
//             image_url: $image_url,
//             file_type: $file_type,
//             file_size_kb: $file_size_kb
//             ) {
//             file_id
//             user_id
//             file_name
//             upload_date
//             memo_text
//             file_url
//             image_url
//             file_type
//             file_size_kb
//         }
//     }
// `;

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