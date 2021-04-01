const axios = require('axios');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'notifications@parisaline.com',
        // pass: 'seC6c@@G6efH'
    }
});
exports.sendEmail=(email,subject,html)=>{
    let mailOptions = {
        from: 'notifications@parisaline.com',
        to: email,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

