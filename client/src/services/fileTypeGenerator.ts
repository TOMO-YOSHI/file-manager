export const fileTypeGenerator = (type: string): string => {
    const fileTypes = ['image', 'video', 'audio'];
    let fileType = fileTypes.includes(type.slice(0, type.indexOf('/'))) ? type : 'others/' + type;
    return fileType;
}