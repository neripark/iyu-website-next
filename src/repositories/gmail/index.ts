import { createTransport } from "nodemailer";

interface Props {
  to: string;
  subject: string;
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
    to: props.to,
    subject: `${process.env.NODE_ENV !== "production" ? "[test] " : ""}${
      props.subject
    }`,
    text: props.body,
  });
};
