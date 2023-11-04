"use client";

import { Snackbar } from "@/components";
import { Button, Heading, Input } from "@/components/ui";
import { useSendSubscribeMail } from "@/hooks/useSendSubscribeMail";

import { type SubscribeBlockProps } from "./interfaces";
import styles from "./SubscribeBlock.module.scss";

export default function SubscribeBlock({
  heading,
  placeholder,
  buttonText,
  templateId,
  dismiss,
}: SubscribeBlockProps) {
  const {
    email,
    status,
    isLoading,
    handlers: { onDismiss, onChange, onEmailSend },
  } = useSendSubscribeMail(templateId);
  const isButtonDisabled = email === "" || isLoading;

  return (
    <div className={styles.block}>
      <Heading level={2}>{heading}</Heading>
      <form className={styles.block__controls} onSubmit={onEmailSend}>
        <Input
          name="email"
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={onChange}
        />
        <Button type="submit" disabled={isButtonDisabled}>
          {buttonText}
        </Button>
      </form>
      <Snackbar text={status} buttonText={dismiss} onDismiss={onDismiss} />
    </div>
  );
}
