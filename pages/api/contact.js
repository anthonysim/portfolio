const nodemailer = require('nodemailer');


export default async function handler(req, res) {
  const { firstName, lastName, email, message } = req.body;

  //Step 1: Creating the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  //Step 2: Setting up message options
  const messageOptions = {
    from: email,
    to: process.env.MAIL_USERNAME,
    subject: `Message from ${firstName} ${lastName} - Anthony Sim | DEV Portfolio Site`,
    text: message,
  };

  //Step 3: Sending email
  await transporter.sendMail(messageOptions, (err, data) => {
    if (err) {
      console.log("Error " + err);
      res.status(501).json({ message: 'message failure!' });
    } else {
      res.status(200).json({ message: 'message successfully sent!' });
    }
  });
}


export const config = {
  api: {
    externalResolver: true,
  },
}