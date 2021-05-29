import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type File {
        file_id: Int
        user_id: Int
        file_name: String
        upload_date: String
        last_edit_date: String
        memo_text: String
        file_url: String
        image_url: String
        file_type: String
        file_size_kb: Int
    }

    type Query {
        files(file_type: String): [File]
    }
`;