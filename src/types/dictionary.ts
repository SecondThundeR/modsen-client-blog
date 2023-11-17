import { type getDictionary } from "@/helpers/getDictionary";

export type DictionaryType = Awaited<ReturnType<typeof getDictionary>>;
