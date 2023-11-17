"use client";

import { Button, Heading, Input } from "@secondthunder/modsen-client-blog-ui";
import { memo } from "react";

import { useSendSubscribeMail } from "@/hooks/useSendSubscribeMail";

import { type SubscribeBlockProps } from "./interfaces";
import styles from "./SubscribeBlock.module.scss";

function SubscribeBlock({
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

export default memo(SubscribeBlock);
