// sendMail.js
const nodemailer = require("nodemailer");
const User = require("../model/db.model.js");

async function sendMail(selectedRows, email) {
  // Email transporter (SMTP)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
    //   user: email,
      pass: process.env.PASSWORD,
    },
  });

  // Fetch user details from the database based on selectedRows
  const userDetails = await Promise.all(
    selectedRows.map(async (userID) => {
      const user = await User.find({ userID });
      return user;
    })
  );

  // Configure email content
  const mailOptions = {
    from: process.env.EMAIL,
    // from: email,
    to: process.env.TO,
    subject: process.env.SUBJECT,
    text: `Selected Users: ${JSON.stringify(userDetails)}`, // Add your email content here
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log("Error sending email: ", error);
  }
}

module.exports = sendMail;
