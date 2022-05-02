const nodemailer = require('nodemailer');
const cron = require('node-cron');

// email message options
const mailOptions = {
    from: 'jutth***@gmail.com', // Enter your preferred Email Address
    to:'joeup**gmail.com',  // Enter Your Secured Recipient Account
    subject:'Notice of Shoe Availability',
    text:'Hi Sade, the pair of Shoes that you ordered for is currently available'
};

// email transport configuration

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'juwonl***gmail.com',
        pass:'' // enter your email password
    }
});

cron.schedule('* * * * * 1', ()=>{
    console.log(`Email send`);
});


transporter.sendMail(mailOptions, (error, info)=>{
if(error){
    console.log(error);
}
else{
    console.log(`Email send: `+info.response);
}
}); 

