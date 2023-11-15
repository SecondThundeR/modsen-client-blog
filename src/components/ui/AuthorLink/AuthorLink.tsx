import Link from "next/link";

import { routes } from "@/constants/routes";

import styles from "./AuthorLink.module.scss";
import { type AuthorLinkProps } from "./interfaces";

export default function AuthorLink({
  id,
  name,
  locale,
  bodyString,
  color = "regular",
}: AuthorLinkProps) {
  const linkColor = color === "purple" ? styles.link__purple : "";

  return (
    <>
      {bodyString}{" "}
      <Link className={linkColor} href={`/${locale}${routes.author}/${id}`}>
        {name}
      </Link>
      {" | "}
    </>
  );
}
