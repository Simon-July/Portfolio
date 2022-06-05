import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/molecules/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} >
        <p>Simonのポートフォリオです、じわじわと更新していきます。</p>
        <p>ご連絡などはTwitterの<a href="https://twitter.com/nanaseseman">DM</a>からお願いします。</p>
      </section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Apps</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>近況</h2>
      <a className="twitter-timeline" data-width="550" data-height="630" data-theme="light" href="https://twitter.com/nanaseseman?ref_src=twsrc%5Etfw">Tweets by nanaseseman</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}