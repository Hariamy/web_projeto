const nodemailer = require('nodemailer')

const user = {
	MAILGUN_USER:'postmaster@sandboxaee0c5d013aa4d58beab91474f541982.mailgun.org',
	MAILGUN_PASS:'858f48589a7768aa5b6d9e5d9667add8-5645b1f9-ebe5033c',
}

const transporter = nodemailer.createTransport({
	service:"Mailgun",
	auth: {
		user: user.MAILGUN_USER,
		pass: user.MAILGUN_PASS,
	},
	tls: { rejectUnauthorized: false }
});

module.exports = {
	sendMail(from, subject, to, html){
		return new Promise((resolve, reject) =>{
			transporter.sendMail({from, subject, to, html},(err,info) =>{
				if(err) reject(err);

				resolve(info);
			});
		});
	}

}