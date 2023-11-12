import { getDictionary } from "@/locale/get-dictionary";

import { AuthorsGrid, JoinUsBlock } from "../_components";
import { StartedBlock, TeamBlock } from "./_components";

export default async function AboutUs({
  params: { locale },
}: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const {
    joinUs,
    authorsGrid,
    aboutUsPage: { teamHeading, startedHeading },
  } = dictionary;

  return (
    <>
      <TeamBlock headingString={teamHeading} />
      <StartedBlock headingString={startedHeading} />
      <AuthorsGrid locale={locale} dictionary={authorsGrid} extended />
      <JoinUsBlock locale={locale} dictionary={joinUs} />
    </>
  );
}
