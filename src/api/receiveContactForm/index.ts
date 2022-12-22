import handler, { type Result } from "@/pages/api/receiveContactForm";
import { notifyToLine } from "@/repositories/line";
import { getMessage } from "./buildMessage";
import { sendMailToIyuMember } from "./sendMailToIyuMember";
import { sendMailToUser } from "./sendMailToUser";

type Props = Parameters<typeof handler>;

export const receiveContactForm = async (...props: Props) => {
  const [req] = props;
  const { messageToIyuMember, messageToUser } = getMessage(req.body);

  const result: Result = await Promise.all([
    notifyToLine(messageToIyuMember),
    sendMailToIyuMember(req.body.name, messageToIyuMember),
    sendMailToUser(messageToUser, req.body.email),
  ])
    .then(() => {
      return "ok" as Result;
    })
    .catch(() => {
      return "error";
    });

  return result;
};
