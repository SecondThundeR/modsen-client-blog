import { Alert, Body, Heading } from "@/components/ui";

import { type ContactFormAlertProps } from "./interfaces";

const ALLOWED_STATUSES = ["done", "failed"];

export default function ContactFormAlert({
  errorLocale,
  successLocale,
  sentStatus,
}: ContactFormAlertProps) {
  if (!ALLOWED_STATUSES.includes(sentStatus)) return null;

  const isSentSuccess = sentStatus === "done";
  const alertVariant = isSentSuccess ? "success" : "error";
  const alertLocale = isSentSuccess ? successLocale : errorLocale;

  return (
    <Alert variant={alertVariant}>
      <Heading level={3}>{alertLocale.heading}</Heading>
      <Body isSecondary>{alertLocale.body}</Body>
    </Alert>
  );
}
