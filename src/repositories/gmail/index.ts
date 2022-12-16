import { createTransport } from "nodemailer";

interface Props {
  title: string;
  body: string;
}

export const sendMailByGmail = async (props: Props) => {
  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: {
      name: `${
        process.env.NODE_ENV !== "production" ? "[test] " : ""
      }iyu Webサイト`,
      address: process.env.MAIL_USER || "",
    },
    to: process.env.MAIL_TO,
    subject: props.title,
    text: props.body,
  });
};
