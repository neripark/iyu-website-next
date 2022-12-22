import { receiveContactForm } from "@/api/receiveContactForm";
import { ContactFormItem } from "@/types/ContactForm";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestWithAppParams extends NextApiRequest {
  body: ContactFormItem;
}

export type Result = "ok" | "error";

type AppApiResponse = {
  result: Result;
};

const handler = async (
  req: NextApiRequestWithAppParams,
  res: NextApiResponse<AppApiResponse>
) => {
  console.log("req.body: ", req.body);
  const result = await receiveContactForm(req, res);
  res.status(200).json({ result });
};

export default handler;
