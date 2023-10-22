import handler, { type Result } from "@/pages/api/receiveContactForm";
import { validate } from "./validate";
import { getMessageServiceInstance } from "./getMessageServiceInstance";
import { notifyIyuLine } from "./notifyIyuLine";
import { sendMailToIyuMember } from "./sendMailToIyuMember";
import { sendMailToUser } from "./sendMailToUser";

type Props = Parameters<typeof handler>;

export const receiveContactForm = async (...props: Props): Promise<Result> => {
  try {
    const [req] = props;
    validate(req.body);
    const service = getMessageServiceInstance(req.body);

    const result: Result = await Promise.all([
      notifyIyuLine(service.messageToIyuMemberByLine()),
      sendMailToIyuMember(
        service.messageToIyuMemberByEmail(),
        service.userName,
      ),
      sendMailToUser(service.messageToUserByEmail(), service.userEmail),
    ])
      .then(() => {
        return { code: 200, message: "ok" } as Result;
      })
      .catch(() => {
        return { code: 400, message: "error" };
      });
    return result;
  } catch (error) {
    // TODO: エラーの型を定義する
    return { code: 400, message: "error" };
  }
};
