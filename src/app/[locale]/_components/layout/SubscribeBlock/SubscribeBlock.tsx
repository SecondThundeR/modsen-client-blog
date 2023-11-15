"use client";

import { Input } from "@/components/form";
import { Button, Heading } from "@/components/ui";
import { useSendSubscribeMail } from "@/hooks/useSendSubscribeMail";

import { type SubscribeBlockProps } from "./interfaces";
import styles from "./SubscribeBlock.module.scss";

export default function SubscribeBlock({
  heading,
  placeholder,
  buttonText,
}: SubscribeBlockProps) {
  const {
    email,
    isLoading,
    handlers: { onChange, onEmailSend },
  } = useSendSubscribeMail();
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
    </div>
  );
}
