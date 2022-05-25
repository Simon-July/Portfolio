import styles from '../components/layout.module.css'
import IntroApp from "../components/IntroApp"
import utilStyles from '../styles/utils.module.css'

export default function Apps() {
    return (
        <div className={styles.container}>
        <h2 className={utilStyles.headingLg}>Apps</h2>
            <IntroApp />
        </div>
    )
}
