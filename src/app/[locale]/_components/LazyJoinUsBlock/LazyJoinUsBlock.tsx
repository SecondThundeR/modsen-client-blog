"use client";

import { memo } from "react";

import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import JoinUsBlock from "../JoinUsBlock/JoinUsBlock";

export default memo(withLazyLoad(JoinUsBlock));
