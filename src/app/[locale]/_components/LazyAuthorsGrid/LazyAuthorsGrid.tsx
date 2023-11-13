"use client";

import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import AuthorsGrid from "../AuthorsGrid/AuthorsGrid";

export default withLazyLoad(AuthorsGrid, 0.3);
