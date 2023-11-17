import { type useSendContactUsMail } from "@/hooks/useSendContactUsMail";
import { type DictionaryType } from "@/types/dictionary";

export type ContactFormAlertProps = {
  errorLocale: DictionaryType["contactUs"]["alert"]["error"];
  successLocale: DictionaryType["contactUs"]["alert"]["success"];
  sentStatus: ReturnType<typeof useSendContactUsMail>["sentStatus"];
};
