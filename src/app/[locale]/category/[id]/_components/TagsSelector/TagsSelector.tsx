"use client";

import clsx from "clsx";
import { useMemo } from "react";

import { Body, Heading } from "@/components/ui";
import { tags } from "@/constants/data/tags";
import { useTagsQuerySearch } from "@/hooks/useTagsQuerySearch";
import { useTagsQuerySelect } from "@/hooks/useTagsQuerySelect";

import { type TagsSelectorProps } from "./interfaces";
import styles from "./TagsSelector.module.scss";

export default function TagsSelector({
  headingString,
  noTagsString,
  tagsLocale,
}: TagsSelectorProps) {
  const { currentTags, onClick } = useTagsQuerySelect();
  const { currentSearchQuery } = useTagsQuerySearch();

  const buttons = useMemo(
    () =>
      tags
        .filter((tag) =>
          (tagsLocale[tag.id]?.toLocaleLowerCase() ?? "").includes(
            currentSearchQuery.toLocaleLowerCase(),
          ),
        )
        .map(({ id }) => {
          const tagName = tagsLocale[id];
          const isSelected = currentTags.includes(id);
          return (
            <button
              key={id}
              className={clsx(styles.tagButton, {
                [styles.tagButton__selected!]: isSelected,
              })}
              onClick={() => onClick(id)}
            >
              {tagName}
            </button>
          );
        }),
    [currentSearchQuery, currentTags, onClick, tagsLocale],
  );

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{headingString}</Heading>
      <div className={styles.buttonsWrapper}>
        {buttons.length > 0 ? (
          buttons
        ) : (
          <Body color="mediumGray">{noTagsString}</Body>
        )}
      </div>
    </div>
  );
}
