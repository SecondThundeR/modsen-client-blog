import { Heading } from "@secondthunder/modsen-client-blog-ui";

import { type PostsHeadingProps } from "./interfaces";

export default function PostsHeading({ headingString }: PostsHeadingProps) {
  return <Heading>{headingString}</Heading>;
}
