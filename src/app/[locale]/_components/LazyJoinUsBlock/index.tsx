"use client";

import { memo } from "react";

import { withLazyLoad } from "@/hocs/withLazyLoad";

import JoinUsBlock from "../JoinUsBlock";

export default memo(withLazyLoad(JoinUsBlock));
