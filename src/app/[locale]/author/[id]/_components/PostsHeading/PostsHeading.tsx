import { Heading } from "@/components/ui";

import { type PostsHeadingProps } from "./interfaces";

export default function PostsHeading({ headingString }: PostsHeadingProps) {
  return <Heading>{headingString}</Heading>;
}
