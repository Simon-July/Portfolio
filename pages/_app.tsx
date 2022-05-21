import '../styles/global.css'
import styles from '../components/layout.module.css'
import { NavBar } from '../components/Navbar'

// 共通のページレイアウト構成ファイル
export default function App({ Component, pageProps }) {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className={styles.container}>
         <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}
