import styled from "styled-components";
import { pc, sp, tab } from '../utils/media';

export default function IntroductionBox () {

  return (
    <>
    <Wrap>
    <PicWrap src="images/hobby/aomori.png" />

    <DivBox>
        <h2>Simonとは？</h2>
        <div style={{fontSize:"16px"}}>あだ名です。<br/>基本やり込み型の人間です。<br/>趣味ものめり込むものばかりです。<br/>住まいは都内、心は青森。</div>
    </DivBox>
    </Wrap>

    <Wrap>

    <PicWrap src="images/hobby/bike.png" />
    <DivBox>
        <h2>趣味</h2>
        <div style={{fontSize:"15px"}}>・本：米原万里・阿刀田高・中野京子<br/>・プラモデル制作<br/>・英語：最近はTOEFL ibt対策中<br />・愛車のCD50sでぶらぶら</div>
    </DivBox>
    </Wrap>
    </>
  );
};

const Wrap = styled.div`
    ${sp`
    background-color: #eee;
    padding: 1em 1em 1em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &:last-child{
        margin-bottom: 80px;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
    }
    `}
    ${tab`
    background-color: #eee;
    padding: 1em 1em 1em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &:last-child{
        margin-bottom: 80px;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
    }
    `}
    ${pc`
    background-color: #eee;
    padding: 1em 1em 1em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &:last-child{
        margin-bottom: 80px;
    }
    &:nth-child(even){
        flex-direction: row-reverse;
    }
    `}
`;
    
const PicWrap = styled.img`
    ${sp`
    display: block;
    width: 100%;
    height: auto;
    `}
    ${tab`
    display: block;
    width: 48%;
    height: auto;
    `}
    ${pc`
    display: block;
    width: 48%;
    height: auto;
    `}
`;

const DivBox = styled.div`
    ${sp`
    width: 100%;
    `}
    ${tab`
    width: 48%;
    `}
    ${pc`
    width: 48%;
    `}
`;