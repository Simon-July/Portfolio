import styles from '../components/layout.module.css'
import IntroductionBox from "../components/IntroductionBox"
import TimeLine from "../components/Timeline"
import LangBox from "../components/LangBox"
import LangBarCharts from "../components/LangBarCharts"
import utilStyles from '../styles/utils.module.css'

export default function aboutMe () {

  return (
    <div className={styles.container}>
      <h2 className={utilStyles.headingLg}>わたしの概要</h2>
      <IntroductionBox /> 
      <h2 className={utilStyles.headingLg}>わたしのタイムライン</h2>
      <TimeLine />
      <h2 className={utilStyles.headingLg}>学習した内容</h2>
      <LangBox />
      <h2 className={utilStyles.headingLg}>グラフで見る能力値</h2>
      <LangBarCharts />
    </div>
  );
};
