const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,  
    auth: {
        user: 'testmail@gmail.com',
        pass: 'xxxTestPasswordxxx'
    }
});

var message = {
    from: 'testmail@gmail.com',
    to: 'test2mail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'test mail sending from node'
};

transporter.sendMail(message, (err,info) => {
    if(err) throw err;
    
    console.log(`Email sent: ${info.response}`);
});

// app password: xfmo ievx zcsx htub