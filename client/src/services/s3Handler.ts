import { api } from '../api';
import { fileTypeGenerator } from './fileTypeGenerator';

export const uploadHandler = async (file: any, progressCallback: (fileName: string, percentComplete: number) => void) => {
    const xhr = new XMLHttpRequest();

    console.log(file);

    let fileName = file.name;
    fileName = fileName.replace(' ', '_');
    // fileName += '_s3storage_' + new Date().getTime();
    fileName = fileName.replace('.', '_s3storage_' + new Date().getTime() + '.');
    
    // const fileTypes = ['image', 'video', 'audio'];
    // let fileType = fileTypes.includes(file.type.slice(0, file.type.indexOf('/'))) ? file.type: 'others' ;
    let fileType = fileTypeGenerator(file.type);
    // console.log("Preparing the upload");

    let returnData;
    let signedRequest: string = '';
    let fileUrl: string = '';

    // console.log(fileType);

    try {
        await fetch(`${api}/s3storage`,
            {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fileName: fileName, fileType: fileType }),
            }
        ).then(response => {
            // return response.body;
            return response.json();
        }).then(response => {
            if(response) {
                returnData = response.data.returnData;
                signedRequest = returnData.signedRequest;
                fileUrl = returnData.url;
            //   console.log("Recieved a signed request " + signedRequest);
            }
        })
            .catch(error => {
                alert(JSON.stringify(error));
            })

        xhr.onreadystatechange = () => {
            //Call a function when the state changes.
            if (xhr.readyState == 4 && xhr.status == 200) {
                // console.log(xhr.responseText);
            }
        }

        if (progressCallback) {
            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    let percentComplete = (e.loaded / file.size) * 100;
                    progressCallback(fileName, percentComplete);
                }
            };
        }

        xhr.open("PUT", signedRequest);
        xhr.setRequestHeader('Content-type', fileType);
        xhr.send(file)

        return fileUrl;

    } catch (err) {
        alert("ERROR " + JSON.stringify(err));
    }
}

export const s3DeleteHandler = async (filePath: string) => {

    const result = await fetch(`${api}/s3storage`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ filePath }),
        })
        .then(response => {
            return response.body;
            // return response.json();
        })
        .catch(error => {
            alert(JSON.stringify(error));
        })

    // console.log(result);

    return result;
}