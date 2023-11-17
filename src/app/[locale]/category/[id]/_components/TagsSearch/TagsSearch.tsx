"use client";

import { memo } from "react";

import { useTagsQuerySearch } from "@/hooks/useTagsQuerySearch";

import { type TagsSearchProps } from "./interfaces";
import styles from "./TagsSearch.module.scss";

function TagsSearch({ dictionary: { placeholder, button } }: TagsSearchProps) {
  const { currentSearchQuery, handleSearch } = useTagsQuerySearch();

  return (
    <form className={styles.wrapper} onSubmit={handleSearch}>
      <input
        className={styles.input}
        name="q"
        type="text"
        placeholder={placeholder}
        defaultValue={currentSearchQuery}
      />
      <button className={styles.button} type="submit">
        {button}
      </button>
    </form>
  );
}

export default memo(TagsSearch);
