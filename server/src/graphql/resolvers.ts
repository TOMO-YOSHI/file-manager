import { IResolvers } from 'apollo-server-express';
// import promise_mysql from 'promise-mysql';
// import * as Bluebird from 'bluebird';
import { mysql } from './db';

interface ApolloContext {
    mysql: typeof mysql
}

interface File {
    file_id: number;
    user_id: number;
    file_name: string;
    upload_date: string;
    last_edit_date: string;
    memo_text: string;
    file_url: string;
    image_url: string;
    file_type: string;
    file_size_kb: number;
}

type FilesDbQueryResult = File[];


export const resolvers: IResolvers<any, ApolloContext> = {
    Query: {
        async files(parent, args, context) {
            let query = 'SELECT * FROM files';
            const files = await context.mysql.then<FilesDbQueryResult>(async(pool) => {

                return await pool.query(query)
                .then((result) => {return result})
                .catch((error) => {throw error})

            });
            // console.log(files);
            return files;
        } 
    }
}