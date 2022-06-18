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

                        <ModalExWrap>
                            <ModalExWrapImg src={AppInfo.gif} />
                            <ModalExWrapBox>
                                <ModalExplanations>【概要】 {AppInfo.explanation}</ModalExplanations>
                                <ModalExplanations>【開発体制】 {AppInfo.work}</ModalExplanations>
                                <ModalExplanations>【言語・FW】 {AppInfo.type}</ModalExplanations>
                                <ModalExplanations>【制作期間】{AppInfo.time}</ModalExplanations>
                                <ModalExplanations>【リンク】 <a href={AppInfo.link}>こちら</a></ModalExplanations>
                                <ModalExplanations>【苦労した点】<br />{AppInfo.difficulty}</ModalExplanations>
                                <ModalExplanations>【着手箇所】<br />{AppInfo.comment}</ModalExplanations>
                                <Button onClick={() =>setModal("none")}>CLOSE</Button>
                            </ModalExWrapBox>
                        </ModalExWrap>
                    </ModalContents>
            </ModalContentWrap>
        </Modal>


        <UlContainer>

            <CardContainer id="DDApp" onClick={clickEvent}>
                <LinkContainer>
                <PicContainer src="images/AppInfoImg/Trello.png" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2020.08.21</SubTitleContainer>
                <TitleContainer>Fake Tr●llo</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="Blackjack" onClick={clickEvent}>
                <LinkContainer>
                <PicContainer src="images/AppInfoImg/BJ.png" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2020.11.8</SubTitleContainer>
                <TitleContainer>SPA Black Jack</TitleContainer>
                </LinkContainer>
            </CardContainer>

            <CardContainer id="NextCovidCharts" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="images/AppInfoImg/NCC.png" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.8.25</SubTitleContainer>
                <TitleContainer>Next Covid Charts</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="EnglishConversation" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="images/AppInfoImg/KET.png" alt="" width="100em" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.12.28</SubTitleContainer>
                <TitleContainer>KaTROPA ENGLISH HP</TitleContainer>
                </LinkContainer>
            </CardContainer>

            <CardContainer id="Portfolio" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="images/AppInfoImg/PF.png" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2022.06.10</SubTitleContainer>
                <TitleContainer>Portfolio</TitleContainer>
                </LinkContainer>
            </CardContainer>
            <CardContainer id="xCatFinder" onClick={clickEvent}>
                <LinkContainer >
                <PicContainer src="images/AppInfoImg/XCF.png" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.06.18</SubTitleContainer>
                <TitleContainer>X Cat Finder</TitleContainer>
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
    width: 85%;
    margin: 0 auto;
    margin-top: 4.5em;
    padding: 1.5em 2em 2em 1.5em;
    max-height: 80%;
        `}
    ${tab`
    border-radius: 10px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
    inset: 20px 0;
    width: 75%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1.5em 2em 2em 1.5em;
    max-height: 80%;
        `}
    ${pc`
    border-radius: 10px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
    inset: 20px 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 1em 1.7em 1.7em 1.5em;
    max-height: 80%;
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

const ModalExWrap =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const ModalExWrapImg =  styled.img`
    ${sp`
        display: block;
        width: 100%;
        height: auto;
    `}
    ${tab`
        display: block;
        width: 100%;
        height: auto;
    `}
    ${pc`
        display: block;
        width: 55%;
        height: auto;
    `}
`;
  
const ModalExWrapBox =  styled.div`
    ${sp`
        display: block;
        width: 110%;
        height: auto;
    `}
    ${tab`
        display: block;
        width: 100%;
        height: auto;
    `}
    ${pc`
        display: block;
        width: 42%;
        height: auto;
    `}
`;

const Button = styled.button`
  text-align: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 0.6em 5em;
  font-size: 1em;
  background-color: #053742; 
  color: #FFF;
  cursor: pointer;
  border-radius: 3px; 
  width: 100%;
  border: 0; 
  transition: 0.3s; 
  &:hover{
  background-color: #1aa1ff;
}`