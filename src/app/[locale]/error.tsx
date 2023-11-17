"use client";

import {
  Body,
  Button,
  ErrorWrapper,
  Heading,
  Spinner,
} from "@secondthunder/modsen-client-blog-ui";
import { memo, useCallback, useEffect } from "react";

import { useDictionary } from "@/hooks/useDictionary";

function Error({ error, reset }: ErrorPageProps) {
  const dictionary = useDictionary();
  const onReset = useCallback(() => reset(), [reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper>
      {!dictionary ? (
        <Spinner color="black" />
      ) : (
        <>
          <Heading>{dictionary.error.heading}</Heading>
          <Body>{error.message}</Body>
          <Button onClick={onReset}>{dictionary.error.button}</Button>
        </>
      )}
    </ErrorWrapper>
  );
}

export default memo(Error);
