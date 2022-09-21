const fse = require('fs-extra');

const dir_in = 'dir_in';
const dir_out = 'dir_out';
const file_in = 'dir_in\\file.txt';
const file_out = 'dir_out\\file.txt';
const file_text = 'Hello World!';

function dirCreateOrClear(path){
    fse.emptyDirSync(path);
    console.log('Directory '+ path +' has been created or cleared');
}

function fileCreate (path,data) {
    fse.outputFileSync(path, data);
    console.log('File ' + path + ' has been created');
}

function copyFileOrDir (src,dest) {
    fse.copySync(src,dest);
    console.log('Directory or file has been copied from '+src+' to '+dest);
}

function deleteFolderOrFile(path){
    fse.removeSync(path);
    console.log('Directory or file ' + path + ' has been deleted');
}

dirCreateOrClear(dir_in);
fileCreate(file_in,file_text);
dirCreateOrClear(dir_out);
copyFileOrDir(file_in,file_out);
deleteFolderOrFile(dir_in);
deleteFolderOrFile(dir_out);