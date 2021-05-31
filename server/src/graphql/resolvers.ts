import { IResolvers, UserInputError } from 'apollo-server-express';
// import promise_mysql from 'promise-mysql';
// import * as Bluebird from 'bluebird';
import { mysql } from './db';
import { OkPacket } from 'mysql';
import { Resolvers } from '../generated/graphql-backend';

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
    [key: string]: string | number;
}

type FilesDbQueryResult = File[];

const getFileById = async (id: number, db: typeof mysql) => {
    const files = await db.then((pool)=>{

        return pool.query(`
            SELECT * FROM files WHERE file_id = ?
        `, [id]).then((result) => result);

    })
    return files.length ? files[0] : null;
}

export const resolvers: IResolvers<any, ApolloContext> = {
// export const resolvers: Resolvers<ApolloContext> = {
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
        },

    },

    Mutation: {
        async createFile(parent, args, context) {
            const { input } = args;
            const columns: string[] =
                [
                    'file_name',
                    'upload_date',
                    'file_url',
                    'file_type',
                    'file_size_kb'
                ];
            const sqlParams: any[] =
                [
                    input.file_name,
                    input.upload_date,
                    input.file_url,
                    input.file_type,
                    input.file_size_kb
                ];

            if (input.user_id) {
                columns.push('user_id');
                sqlParams.push(input.user_id);
            };

            if (input.memo_text) {
                columns.push('memo_text');
                sqlParams.push(input.memo_text);
            };

            if (input.image_url) {
                columns.push('image_url');
                sqlParams.push(input.image_url);
            };

            try {
                const file = await context.mysql.then<OkPacket>((pool) => {

                    const placeholder: '?'[] = [];
                    for(let column of columns) {
                        placeholder.push('?');
                    }

                    const query = `
                        INSERT INTO 
                            files(${columns.join(',')})
                            values(${placeholder.join(',')})`
                        ;

                    return pool.query(query, sqlParams).then((result)=>result).catch((error) => {throw error});
                });

                const createdFile = {} as File;

                for(let i = 0; i < columns.length; i++) {
                    createdFile[columns[i]] = sqlParams[i];
                }

                return {
                    ...createdFile,
                    file_id: file.insertId,
                }

            } catch(error) {
                console.log(error);
            }
        },
        async deleteFile(parent, args, context) {
            console.log(1)
            const file_id = args.file_id;

            const file = getFileById(args.file_id, context.mysql);

            if(!file) {
                throw new UserInputError('Could not find your file.');
            }

            try {

                await context.mysql.then<OkPacket>((pool) => {

                    return pool.query(
                        `DELETE FROM files WHERE file_id = ?`,
                        [file_id]
                    ).catch((error)=>{
                        throw error;
                    })

                })

                return file;

            } catch(error) {
                console.log(error);
            }

        }
    }
}