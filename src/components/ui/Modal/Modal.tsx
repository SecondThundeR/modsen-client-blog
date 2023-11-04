"use client";

import { createPortal } from "react-dom";

import { useMounted } from "@/hooks/useMounted";

import { type ModalProps } from "./interfaces";

export default function Modal({ children }: ModalProps) {
  const mounted = useMounted();
  return mounted ? createPortal(children, document.body) : null;
}
