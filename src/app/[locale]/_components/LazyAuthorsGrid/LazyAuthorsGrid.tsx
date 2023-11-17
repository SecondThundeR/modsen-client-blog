"use client";

import { memo } from "react";

import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import AuthorsGrid from "../AuthorsGrid/AuthorsGrid";

export default memo(
  withLazyLoad(AuthorsGrid, {
    threshold: 0.3,
  }),
);
