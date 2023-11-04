import emailjs from "@emailjs/browser";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useCallback,
  useState,
} from "react";

import { env } from "@/env.mjs";
import { SubscribeSchema } from "@/schemas/subscribeSchema";

export function useSendSubscribeMail(templateId: string) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onEmailSend: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      setIsLoading(true);

      const parsedForm = SubscribeSchema.safeParse({
        email,
      });

      if (!parsedForm.success) {
        setIsLoading(false);
        console.log(parsedForm.error);
        return;
      }

      const templateParams = {
        to_email: parsedForm.data.email,
      };

      emailjs
        .send(
          env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          templateId,
          templateParams,
          env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error(error);
          },
        )
        .finally(() => {
          setIsLoading(false);
        });
    },
    [email, templateId],
  );

  return {
    email,
    isLoading,
    handlers: { onChange, onEmailSend },
  };
}
