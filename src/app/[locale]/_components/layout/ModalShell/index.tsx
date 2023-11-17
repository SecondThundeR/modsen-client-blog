"use client";

import { Button, ModalWrapper } from "@secondthunder/modsen-client-blog-ui";
import { useRouter, useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { createPortal } from "react-dom";

import { modalData } from "@/constants/modalData";
import { useMounted } from "@/hooks/useMounted";

import { type ModalShellProps } from "./interfaces";

function ModalShell({ closeButtonText }: ModalShellProps) {
  const searchParams = useSearchParams();
  const mounted = useMounted();
  const router = useRouter();
  const onBack = useCallback(() => router.back(), [router]);

  const currentModalData = searchParams.get("modal");
  if (!currentModalData) return null;

  const currentModalItem = modalData[currentModalData];
  if (!currentModalItem) return null;

  return (
    mounted &&
    createPortal(
      <ModalWrapper>
        {currentModalItem}
        <Button onClick={onBack}>{closeButtonText}</Button>
      </ModalWrapper>,
      document.body,
    )
  );
}

export default memo(ModalShell);
