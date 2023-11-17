import { getDictionary } from "@/helpers/getDictionary";

import { AuthorsGrid, JoinUsBlock } from "../_components";
import { AboutUsHeader, StartedBlock, TeamBlock } from "./_components";

export default async function AboutUs({
  params: { locale },
}: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const {
    joinUs,
    authorsGrid,
    aboutUsPage: {
      teamHeading,
      startedHeading,
      header,
      overview,
      missionVision,
    },
    positions,
  } = dictionary;

  return (
    <>
      <AboutUsHeader
        headerDictionary={header}
        overviewDictionary={overview}
        missionVisionDictionary={missionVision}
      />
      <TeamBlock headingString={teamHeading} />
      <StartedBlock headingString={startedHeading} />
      <AuthorsGrid
        locale={locale}
        headingString={authorsGrid.heading}
        positions={positions}
        extended
      />
      <JoinUsBlock locale={locale} dictionary={joinUs} />
    </>
  );
}
