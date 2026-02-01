import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

const sendEmail = async (to, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    const mailOption = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: message,
    };

    const res = await transporter.sendMail(mailOption);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;


// sendEmail("ajaygour369@gmail.com","test Email","<p>Test message</p>")