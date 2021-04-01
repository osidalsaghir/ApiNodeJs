const multer = require('multer');
const fs = require('fs');
const http = require('http');
https = require('https');
request = require('request');
const storage =   multer.diskStorage({
    destination: function(req, file, cb) {
        let dir=req.directionName;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            cb(null, dir);
        }
        else
        {
            cb(null, dir);
        }

    },
    filename: function(req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        console.log(file.mimetype+"");
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/tif'||file.mimetype === 'application/octet-stream') {
            if(file.mimetype === 'application/octet-stream')
            {
                cb(null,Date.now()+ '.stl');
            }
            else
            {
                cb(null,Date.now()+'.'+ extension);
            }

        } else {
            cb(null, Date.now()+ '.' +extension);
        }

    }
});

const upload =function (nameFileInput){
   return  multer({ storage : storage}).single(nameFileInput);
}

exports.uploadFile=(req,res,nameFileInput,fun)=>{
    upload(nameFileInput)(req,res,function(err) {
        fun(err);
    });
}
exports.uploadFileBase64=function(name_file,base46){
    let dir='uploads/'+name_file+'/';
    let nameFile=Date.now()+".png";
    if (!fs.existsSync('./'+dir)) {
        fs.mkdirSync('./'+dir);
        var base64Data = base46.replace(/^data:image\/png;base64,/, "");
        fs.writeFile('./'+dir+nameFile, base64Data, 'base64', function(err) {
            console.log(err);
        });
        return dir+nameFile;
    }
    else
    {
        var base64Data = base46.replace(/^data:image\/png;base64,/, "");
        fs.writeFile('./'+dir+nameFile, base64Data, 'base64', function(err) {
            console.log(err);
        });
        return dir+nameFile;;
    }

}

exports.downloadImageToUrlSpVideo = (url, filename, callback) => {

    let Stream = require('stream').Transform;
    let client = http;
    if (url.toString().indexOf("https") === 0){
        client = https;
    }
    try{

        client.request(url, function(response) {
            let data = new Stream();
            let error=-1;
            response.on('data', function(chunk) {
                //if(chunk.search("</Error>"))
                error=chunk.toString().search("</Error>")
                if(error==205) {
                    console.log("error");
                }
                else {
                    data.push(chunk);
                }
                //
            });
            response.on('timeout', () => {
                client.abort();
            });
            response.on('end', function() {
                if(error==205) {
                    callback(false);
                }
                else {
                    fs.writeFileSync(filename, data.read());
                    callback(true);
                }


            });

        }).end();
    }catch (e) {

    }

};

exports.downloadImageToUrlSpVideos=(url, filename, callback)=>{

    let error=-1;

    try
    {
        request.head(url, function(err, res, body){
            try{
                if(res.headers["content-length"]==undefined) {
                    console.log("error");
                    callback(false);
                    return;
                }
                request(url).pipe(fs.createWriteStream(filename))
                    .on('close', function () {
                        console.log("stopTrue");
                        callback(true);
                    }).on('error', (err) => {
                    // console.error("Fail! #" + idx + "\n\t" + util.inspect(err));
                });
            }catch (e) {
                console.log(e);
                callback(false);
            }

        }); 
    }catch (e) {
        
    }

}