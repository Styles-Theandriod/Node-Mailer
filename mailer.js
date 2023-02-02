var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "your email@gmail.com",
        pass: "your password"
    }
});

var mailOptions = {
    from: "your email@gmail.com",
    to: "myfriend@gmail.com",
    subject: "sending email using nodejs",
    text: "Hello friend!"
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('email sent: ' + info.response);
    }
});