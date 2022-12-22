import handler, { type Result } from "@/pages/api/receiveContactForm";
import { notifyToLine } from "@/repositories/line";
import { getMessage } from "./buildMessage";
import { sendMailToIyuMember } from "./sendMailToIyuMember";

type Props = Parameters<typeof handler>;

export const receiveContactForm = async (...props: Props) => {
  const [req] = props;
  const message = getMessage(req.body);

  const result: Result = await Promise.all([
    notifyToLine(message),
    sendMailToIyuMember(req.body.name, message),
  ])
    .then(() => {
      return "ok" as Result;
    })
    .catch(() => {
      return "error";
    });

  return result;
};
