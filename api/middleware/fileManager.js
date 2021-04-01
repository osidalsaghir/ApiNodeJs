const fs = require('fs');
const mime = require('mime');
const path = require('path');

const filePlans="uploads/Plans/";

const walkSync =(dir,dir2, filelist = [])=> {
    let dirStatic=filePlans+dir+"/"+dir2;
    if (!fs.existsSync(filePlans+dir)){
        fs.mkdirSync(filePlans+dir);
    }
    if (!fs.existsSync(filePlans+dir+"/"+dir2)){
        fs.mkdirSync(filePlans+dir+"/"+dir2);
    }
    fs.readdirSync(dirStatic).forEach(file => {
        filelist = fs.statSync(path.join(dirStatic, file)).isDirectory()
            ? walkSync(path.join(dirStatic, file), filelist)
            : filelist.concat({
                name: file,
                path: path.join(dirStatic, file),
                size: fs.statSync(path.join(dirStatic, file)).size,
                type: mime.lookup(file)
            });
    });
    return filelist;
}

exports.getAllFile=(dir,dir2)=> {
    return walkSync(dir,dir2);
}

exports.fileDelete=(path)=>{
    fs.unlinkSync(path);
}

