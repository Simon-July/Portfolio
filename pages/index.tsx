import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/molecules/date'
import { GetStaticProps } from 'next'
import { getTweet } from "../pages/api/getTweet"
import { useEffect } from "react" 

export default function Home (){
  let isLoad = false;
  useEffect(() => {
    if (!isLoad) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoad = true;
    }
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} >
        <Headline>Simonのポートフォリオです、じわじわと更新していきます。</Headline>
        <Headline>GitHubは<a href="https://github.com/Simon-July">こちら</a>。</Headline>
        <Headline>ご連絡などはTwitterの<a href="https://twitter.com/nanaseseman">DM</a>からお願いします。</Headline>
        <Headline>同期４人で作成したAPP紹介ページは<a href="https://ecstatic-villani-84736e.netlify.app">こちら</a>、チームリーダーが作成してくれました。</Headline>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>近況</h2>
      <a className="twitter-timeline" data-width="550" data-height="630" data-theme="light" href="https://twitter.com/nanaseseman?ref_src=twsrc%5Etfw">Tweets by nanaseseman</a>
      </section>
    </Layout>
  )
}

const Headline = styled.p`
  font-size: 16px;
`;
