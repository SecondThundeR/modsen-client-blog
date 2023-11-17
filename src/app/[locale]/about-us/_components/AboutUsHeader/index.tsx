import styles from "./AboutUsHeader.module.scss";
import Header from "./Header";
import { type AboutUsHeaderProps } from "./interfaces";
import MissionVision from "./MissionVision";
import OverviewBlock from "./OverviewBlock";

export default function AboutUsHeader({
  headerDictionary,
  overviewDictionary,
  missionVisionDictionary,
}: AboutUsHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <Header dictionary={headerDictionary} />
      <OverviewBlock dictionary={overviewDictionary} />
      <MissionVision dictionary={missionVisionDictionary} />
    </div>
  );
}
