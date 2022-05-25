import styles from '../components/layout.module.css'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import { pc, sp, tab } from '../utils/media';
import React, { useState } from 'react'

export default function IntroApp() {


    
    return (
        <div>


        <UlContainer>

            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen01.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.21</SubTitleContainer>
                <TitleContainer>カード型のhover</TitleContainer>
                </LinkContainer>
            </LiContainer>
            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen02.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2021.03.10</SubTitleContainer>
                <TitleContainer>動きをつけた方が良い</TitleContainer>
                </LinkContainer>
            </LiContainer>

            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen03.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.02</SubTitleContainer>
                <TitleContainer>半透明だと視認性が悪い</TitleContainer>
                </LinkContainer>
            </LiContainer>
            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen01.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.21</SubTitleContainer>
                <TitleContainer>カード型のhover</TitleContainer>
                </LinkContainer>
            </LiContainer>

            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen02.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished" >2021.03.10</SubTitleContainer>
                <TitleContainer>動きをつけた方が良い</TitleContainer>
                </LinkContainer>
            </LiContainer>
            <LiContainer>
                <LinkContainer href="">
                <PicContainer src="https://pulpxstyle.com/wp-main/common/codepen/post02-codepen03.jpg" alt="" width="320px" height="200px" />
                <SubTitleContainer className="time" itemProp="datePublished">2021.03.02</SubTitleContainer>
                <TitleContainer>半透明だと視認性が悪い</TitleContainer>
                </LinkContainer>
            </LiContainer>

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
  
const LiContainer = styled.li`
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