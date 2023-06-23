import handler, { type Result } from "@/pages/api/receiveContactForm";
import { getMessageServiceInstance } from "./getMessageServiceInstance";
import { notifyIyuLine } from "./notifyIyuLine";
import { sendMailToIyuMember } from "./sendMailToIyuMember";
import { sendMailToUser } from "./sendMailToUser";

type Props = Parameters<typeof handler>;

export const receiveContactForm = async (...props: Props) => {
  const [req] = props;
  const service = getMessageServiceInstance(req.body);

  const result: Result = await Promise.all([
    notifyIyuLine(service.messageToIyuMemberByLine()),
    sendMailToIyuMember(service.messageToIyuMemberByEmail(), service.userName),
    sendMailToUser(service.messageToUserByEmail(), service.userEmail),
  ])
    .then(() => {
      return "ok" as Result;
    })
    .catch(() => {
      return "error";
    });

  return result;
};
