/* eslint-disable no-trailing-spaces */
import nodemailer from 'nodemailer';

export default (req, res) => {
  const {name, email, phone, company, messege} = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Zoho',
    auth: {
      user: 'info@platinumshark.com',
      pass: 'Aflalo123*',
    },
  });

  transporter.sendMail({
    from: 'info@platinumshark.com',
    to: 'info@platinumshark.com',
    subject: 'teste email nodemailer',
    text: `
        Email: ${email}

        Name: ${name}

        Phone: ${phone}

        Company: ${company}

        Messege: ${messege}
    `,
  }, (err, info) => {
    if (err) {
      console.error(err);
    }

    console.log(info);
  });


  console.log('/api/email POST');
  console.table(req.body);

  res.json(req.body);
};
