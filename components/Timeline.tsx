import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { pc, sp, tab } from '../utils/media';

interface RefObject<T> {
  readonly current: T | null;
}

const Timeline = () => {
  // the width of the indicator (which is orange in color)
  const [width, setWidth] = useState(0);

  // this ref will be used to connected with the main content section
  // const contentRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollProgress = () => {
    // how far the user has scrolled down
    const scrollTop = document.documentElement.scrollTop + 250;

    if (contentRef.current) {
      // the distance from the content section to the top of the page
      const contentOffsetTop = contentRef.current?.offsetTop;

      // the height of the content section
      const contentHeight = contentRef.current?.clientHeight;

      if (scrollTop - contentOffsetTop <= 0) {
        return setWidth(0);
      }

      if (scrollTop - contentHeight > contentHeight) {
        return setWidth(0);
      }

      if (((scrollTop - contentOffsetTop) / contentHeight) * 120 >= 100) {
        return setWidth(100);
      }

      setWidth(((scrollTop - contentOffsetTop) / contentHeight) * 120);
    }
  };

  // add event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, []);

  return (
    <>
 
        <h2>わたしのタイムライン</h2>
        <ProgressContainer className="progress-container">
          <BarContainer className="progress-bar" style={{ width: `${width}%` }} />
        </ProgressContainer>
        
        <MainContainer className="content" ref={contentRef}>
        <ul>
        <YearContainer>
          <Explanation><strong>ー1993.7</strong>　青森県で爆誕</Explanation>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2016.9</strong>　大学 卒業</Explanation>
          <Details>留学のため半期遅れの卒業でした。<br/>研究テーマは「プロパガンダにおけるアジア人表象論」</Details>

        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2019.3</strong>　大学院 修了</Explanation>
          <Details>アメリカ文学にハマります。<br/>研究テーマは「The Great Gatsbyの成長物語とはなにか」</Details>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2019.9</strong>　SEへの第一歩</Explanation>
          <Details>業務の自動化に感動してITの道へ</Details>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2020.8</strong>　共同開発</Explanation>
          <Details>D&Dを用いたタスク管理アプリを作成</Details>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2020.11</strong>　個人開発</Explanation>
          <Details>SPAで遊ぶBLACK JACK</Details>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2021.8</strong>　チーム開発</Explanation>
          <Details>Next.jsでコロナ感染状況のチャートアプリを作成</Details>
        </YearContainer>
        <YearContainer>
          <Explanation><strong>ー2021.12</strong>　個人開発</Explanation>
          <Details>英会話教室で運用するHP作成</Details>
        </YearContainer>
        <YearContainer>
        <Explanation><strong>ー2022.5</strong>　現在</Explanation>
          <Details>JPIN参加：現在も４期生として参加中です。<br/>そろそろポートフォリオを作ろうと焦る（今）</Details>
        </YearContainer>
        </ul>
        </MainContainer>
    </>
  );
};

export default Timeline;

const ProgressContainer = styled.div `
    ${sp`
      background: #999;
      transform: rotate(90deg);
      position: relative;
      top: 35rem;
      left: -32rem;
      width: 68rem;
        `}
    ${tab`
      background: #999;
      transform: rotate(90deg);
      position: relative;
      top: 34rem;
      left: -32rem;
      width: 68rem;
        `}
    ${pc`
      background: #999;
      transform: rotate(90deg);
      position: relative;
      top: 33rem;
      left: -32rem;
       width: 68rem;
    `}
`;

const BarContainer = styled.div `
  height: 10px;
  background: black;
  width: 100%;
`;

const MainContainer = styled.div `
  width: 90%;
`;

const YearContainer = styled.li`
  list-style: none;
`;

const Explanation = styled.div`
  margin-top: 2em;
  font-size: 19px;
`;

const Details = styled.div`
    ${sp`
      font-size: 16px;
      background-color: #eee;
      margin-left: 1em;
      padding: 0.5em 0.5em 0.5em 1em;
        `}
  font-size: 16px;
  background-color: #eee;
  margin-left: 1em;
  padding: 1em 1em 1em 2em;
`;