import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";

import { env } from "@/env.mjs";
import { type ContactUsSchemaType } from "@/schemas/contactUsSchema";

type SentStatus = "idle" | "pending" | "done" | "failed";
type OnSendData = Omit<ContactUsSchemaType, "query"> & { query: string };

export function useSendContactUsMail() {
  const [sentStatus, setSentStatus] = useState<SentStatus>("idle");

  const onSend = useCallback((data: OnSendData, resetForm: () => void) => {
    setSentStatus("pending");

    const templateParams = {
      to_email: data.email,
      to_name: data.name,
      query: data.query,
      message: data.message,
    };

    emailjs
      .send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          const isSentOK = result.text === "OK";
          setSentStatus(isSentOK ? "done" : "failed");
          isSentOK && resetForm();
        },
        (error) => {
          console.error(error);
          setSentStatus("failed");
        },
      );
  }, []);

  return {
    sentStatus,
    onSend,
  };
}
