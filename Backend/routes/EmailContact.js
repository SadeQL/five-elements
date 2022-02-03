const nodemailer = require("nodemailer");
let express = require("express");
let router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  main(req.body.email).catch(console.error);
  res.status(201).json({ message: "objet créé" });
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sadefryt@gmail.com", // generated ethereal user
      pass: "quentin81417", // generated ethereal password
    },
    sendMail: true,
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "sadefryt@hotmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = router;
