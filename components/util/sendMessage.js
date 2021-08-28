//Step 1: Creating the transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL,
    pass: "gmail_password"
  }
});

//Step 2: Setting up message options
const messageOptions = {
  subject: "Test",
  text: "I am sending an email from nodemailer!",
  to: "put_email_of_the_recipient",
  from: "put_email_of_sender"
};

//Step 3: Sending email
transporter.sendMail(messageOptions);