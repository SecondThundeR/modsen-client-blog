"use client";

import { memo } from "react";

import { withLazyLoad } from "@/hocs/withLazyLoad";

import AuthorsGrid from "../AuthorsGrid";

export default memo(
  withLazyLoad(AuthorsGrid, {
    threshold: 0.3,
  }),
);
