import styles from '../components/layout.module.css'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import { pc, sp, tab } from '../utils/media';
import React, { useState, useEffect } from 'react'
import {findAppInfo} from "./AppsCardsInfo"


export default function IntroApp() {

    // カード情報オブジェクト用useState
    const [AppInfo, setAppInfo] = useState<{[key: string]: any}>({});

    // モーダル表示用用useState
    const [modal, setModal] = useState("none");

    // カード要素のIDを取得する (Getting id of each elements by click)
    const clickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;

        // 取得されたカード情報オブジェクトをカード情報オブジェクト用useState(AppInfo)に設定
        setAppInfo(findAppInfo(id));
        setModal(" ");
      };


    return (
        <div>

        <Modal modal={modal}>
            <ModalContentWrap>
                    <ModalContents>
                        <h2 style = {{textAlign: "center"}}>{AppInfo.name}</h2>
                        <ModalExplanations>開発体制：{AppInfo.work}</ModalExplanations>
                        <ModalExplanations>言語・FW：{AppInfo.type}</ModalExplanations>
                        <ModalExplanations>制作期間：{AppInfo.time}</ModalExplanations>
                        <ModalExplanations>【概要】<br />{AppInfo.explanation}</ModalExplanations>
                        <ModalExplanations>【苦労した点】<br />{AppInfo.difficulty}</ModalExplanations>
                        <ModalExplanations>【着手箇所】<br />{AppInfo.comment}</ModalExplanations>
                        <button onClick={() =>setModal("none")}>とじる</button>
                    </ModalContents>
            </ModalContentWrap>
        </Modal>


        <UlContainer>

            <CardContainer id="DDApp" onClick={clickEvent}>
                <LinkContainer>
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen01.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.21</SubTitleContainer>
                <TitleContainer>Fake Tr●llo</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="Blackjack" onClick={clickEvent}>
                <LinkContainer>
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen02.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2021.03.10</SubTitleContainer>
                <TitleContainer>SPA Black Jack</TitleContainer>
                </LinkContainer>
            </CardContainer>

            <CardContainer id="NextCovidCharts" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen03.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.02</SubTitleContainer>
                <TitleContainer>Next Covid Charts</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="EnglishConversation" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen01.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.21</SubTitleContainer>
                <TitleContainer>KaTROPA ENGLISH HP</TitleContainer>
                </LinkContainer>
            </CardContainer>

            <CardContainer id="Portfolio" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen02.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2021.03.10</SubTitleContainer>
                <TitleContainer>Portfolio</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="java" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen03.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.02</SubTitleContainer>
                <TitleContainer>検討中</TitleContainer>
                </LinkContainer>
            </CardContainer>

        </UlContainer>
        </div>
    )
}

const LinkContainer = styled.a`
    display: block;
    color: #111;
    text-decoration: none;
    background-color: #f4f4f4;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    &:hover {
    transform: translateY(-5px);
    }
`;

  
const UlContainer = styled.ul`
    ${sp`
    margin: 0 auto;
        `}
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* margin: 50px auto; */
    width: 100%;
    list-style: none;
`;
  
const CardContainer = styled.div`
    border-radius: 18px;
    ${sp`
    margin-top: 1.5em;
    width: 80%;
        `}
    ${tab`
    margin-top: 1.5em;
    width: 45%;
        `}
    ${pc`
    margin-top: 1.5em;
    width: 45%;
    `}
`;
  
const PicContainer = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;
  
const TitleContainer = styled.h2`
    margin: 0;
    padding: 0 20px 20px;
    font-size: 14px;
`;
  
const SubTitleContainer = styled.h2`
    margin: 0;
    padding: 20px 20px 5px;
    font-size: 10px;
`;


const Modal = styled.div<{ modal: string }>`
    display: ${({ modal }) => modal};
    ${sp`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0em;
    left: 0;
    z-index: 10000;
    background-color: rgba(21, 21, 21, 0.5);
    transition: all 1s ease;
    transition-delay: 0.5s;
    `}
    ${tab`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0em;
    left: 0;
    z-index: 10000;
    background-color: rgba(21, 21, 21, 0.5);
    transition: all 1s ease;
    transition-delay: 0.5s;
    `}
    ${pc`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0em;
    left: 0;
    z-index: 10000;
    background-color: rgba(21, 21, 21, 0.5);
    transition: all 1s ease;
    transition-delay: 0.5s;
    `}
`;

const ModalContentWrap = styled.div`
    ${sp`
    border-radius: 10px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
    inset: 20px 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1.5em 1.7em 1.7em 1.5em;
    max-height: 450px;
        `}
    ${tab`
    border-radius: 10px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
    inset: 20px 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1.5em 1.7em 1.7em 1.5em;
    max-height: 450px;
        `}
    ${pc`
    border-radius: 10px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
    inset: 20px 0;
    width: 60%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1em 1.7em 1.7em 1.5em;
    max-height: 500px;
    `}
`;

const ModalContents = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalExplanations = styled.p`
    font-size: 15px;
`;
