import handler, { type Result } from "@/pages/api/receiveContactForm";
import { MessageService } from "./MessageService";
import { notifyIyuLine } from "./notifyIyuLine";
import { sendMailToIyuMember } from "./sendMailToIyuMember";
import { sendMailToUser } from "./sendMailToUser";

type Props = Parameters<typeof handler>;

export const receiveContactForm = async (...props: Props) => {
  const [req] = props;
  const service = new MessageService(req.body);

  const result: Result = await Promise.all([
    notifyIyuLine(service),
    sendMailToIyuMember(service),
    sendMailToUser(service),
  ])
    .then(() => {
      return "ok" as Result;
    })
    .catch(() => {
      return "error";
    });

  return result;
};
