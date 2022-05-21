import styles from '../components/layout.module.css'
import IntroductionBox from "../components/IntroductionBox"
import TimeLine from "../components/Timeline"
import LangBox from "../components/LangBox"
import LangBarCharts from "../components/LangBarCharts"

export default function aboutMe () {

  return (
    <div className={styles.container}>
      <IntroductionBox /> 
      <TimeLine />
      <LangBox />
      <LangBarCharts />
    </div>
  );
};
