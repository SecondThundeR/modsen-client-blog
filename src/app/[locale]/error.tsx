"use client";

import { useCallback, useEffect } from "react";

import { Body, Button, ErrorWrapper, Heading } from "@/components/ui";
import { useDictionary } from "@/locale/use-dictionary";

export default function Error({ error, reset }: ErrorPageProps) {
  const dictionary = useDictionary();
  const onReset = useCallback(() => reset(), [reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper>
      <Heading>{dictionary?.error.heading}</Heading>
      <Body>{error.message}</Body>
      <Button onClick={onReset}>{dictionary?.error.button}</Button>
    </ErrorWrapper>
  );
}
