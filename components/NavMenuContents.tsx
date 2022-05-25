import Link from 'next/link'
import { pc, sp, tab } from '.././utils/media';
import styled from 'styled-components'
import React, { useState, useMemo} from 'react';

export default function NavMenuContents() {

  // const [checked, setChecked] = useState(false);

  // const handleCheckboxClick = useMemo(() => {
  //   return (e) => {
  //     setChecked(!checked);
  //   };
  // }, [checked]);

  return (
  <>
      <NavContainer>

        <Link href="/">
          <LogoContainer src="/images/logo.png" />
        </Link>

        <UlContainer>
          <LiContainer className="no_show">
            <Link href="/">
              <AContainer>Home</AContainer>
            </Link>
          </LiContainer>


          <LiContainer>
            <Link href="/aboutMe">
              <AContainer>About Me</AContainer>
            </Link>
          </LiContainer>

          <LiContainer>
            <Link href="/Apps">
              <AContainer>Apps</AContainer>
            </Link>
          </LiContainer>
        </UlContainer>
        
        {/* <div >
            <CHKBox type="checkbox" checked={checked} onChange={handleCheckboxClick} /> 
            <HBBar className="first-child"></HBBar>
            <HBBar className="second-child"></HBBar>
            <HBBar className="third-child"></HBBar>
        </div> */}
    </NavContainer>

    {/* <DrawerContainer>
        {checked ?
        <DulContainer>
          <DliContainer>
            <Link href="/">
              <AContainer>Home</AContainer>
            </Link>
          </DliContainer>

          <DliContainer>
            <Link href="/aboutMe">
              <AContainer>About Me</AContainer>
            </Link>
          </DliContainer>

          <DliContainer>
            <Link href="/Apps">
              <AContainer>Apps</AContainer>
            </Link>
          </DliContainer>
        </DulContainer>  
        : ""}
    </DrawerContainer> */}
  </>
  );
}

const LogoContainer = styled.img`
    ${sp`
        margin-top: 1rem;
        margin-left: 1rem;
        float: left;
        height: 30px;
        width: 150px;
    `}
    ${tab`
        margin-top: 1.3rem;
        margin-left: 1rem;
        height: 37px;
        width: 190px;
    `}
    ${pc`
        justify-content: center;
        margin-top: 1.4rem;
        height: 37px;
        width: 190px;
    `}
`;

const NavContainer = styled.div`
        background-color: #053742;
    ${sp`
        height: 3.5rem;
        width: 110vw;
        display: flex;
        position: fixed;
        // justify-content: flex-end; imgタグ左寄せのためコメアウト
        z-index: 99999;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
    ${tab`
        height: 4.5rem;
        width: 100vw;
        display: flex;
        position: fixed;
        justify-content: flex-end;
        z-index: 99999;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
    ${pc`
        height: 5rem;
        width: 100vw;
        display: flex;
        position: fixed;
        justify-content: flex-end;
        z-index: 99999;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
`;

const UlContainer = styled.ul`
    ${sp`
        width: 56vw;
        display: flex;
        padding: 0 1vw;
        justify-content: flex-end;
        align-items: center;
        text-transform: uppercase;
        list-style: none;
        font-weight: 600;
    `}
    ${tab`
        width: 80vw;
        display: flex;
        padding: 0 1vw;
        justify-content: flex-end;
        align-items: center;
        text-transform: uppercase;
        list-style: none;
        font-weight: 600;
    `}
    ${pc`
        width: 80vw;
        display: flex;
        padding: 0 10vw;
        justify-content: flex-end;
        align-items: center;
        text-transform: uppercase;
        list-style: none;
        font-weight: 600;
    `}
`;

const LiContainer = styled.li`
    position: relative;
    ${sp`
    &.no_show {
        display: none;
              }
    `}
    ${tab`

    `}
    ${pc`

    `}

`;

const AContainer = styled.a`
    ${sp`
        color: white;
        margin: 0 1vw;
        text-decoration: none;
        transition: all ease-in-out 350ms;
        margin-right: 1em;
    `}
    ${tab`
        color: white;
        margin: 0 3vw;
        text-decoration: none;
        transition: all ease-in-out 350ms;
        padding: 10px;
    `}
    ${pc`
        color: white;
        margin: 0 3vw;
        text-decoration: none;
        transition: all ease-in-out 350ms;
        padding: 10px;
    `}
`;

// For Resposive design, however no use
const CHKBox = styled.input`
    ${sp`
        height: 3.5rem;
        width: 45px;
        position: fixed;
        top: 0px;
        // left: 17rem;
        left: 80%;
        cursor: pointer;
        opacity: 0; 
        // justify-content: flex-end; imgタグ左寄せのためコメアウト
        z-index: 99999;
    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;

const HBBar = styled.span`
    ${sp`
          display: block;
          width: 37px;
          height: 4px;
          margin-top: 10px;
          left: 80%;
          position: fixed;
          background: white;
          border-radius: 3px;
          z-index: 99998;
          transform-origin: 4px 0px;  
          transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
          
              &.first-child {
                margin-top: 0.95em;
              }
              &.second-child {
                margin-top: 1.6em;
              }
              &.third-child {
                margin-top: 2.3em;
              }

    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;

const DrawerContainer = styled.div`
    ${sp`
        width: 33rem;
        height: 50rem;
    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;

const DulContainer = styled.div`
    ${sp`
    text-align: center;
    padding-top: 10rem;
    padding-bottom: 30rem;
    background-color: #004a5a;
    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;

const DliContainer = styled.div`
    ${sp`
    list-style: none;
    margin-bottom: 10px;
    font-size: 2em;
    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;