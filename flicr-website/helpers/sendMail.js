// assuming top-level await for brevity


if(typeof window === 'undefined'){
    var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 // service: 'mail.fundacionleer.org',
 
	host: 'mail.fundacionleer.org',
    port      : 587,
    ignoreTLS: true,
    tls :{rejectUnauthorized: false},
    secure :false,
  auth: {
    user: 'info@fundacionleer.org',
	pass: '(i.R=f=Xs,&R',
  }
  
});

var mailOptions = {
  from: 'info@fundacionleer.org',
  to: 'contacto@fundacionler.or',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }


});
}