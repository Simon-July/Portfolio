import Link from 'next/link'
import { pc, sp, tab } from '.././utils/media';
import styled from 'styled-components'

export default function NavMenuContents() {
  return (

    <NavContainer>

      <Link href="/">
        <LogoContainer src="/images/logo.png" />
      </Link>

      <UlContainer>
        <LiContainer>
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

  </NavContainer>

  );
}

const LogoContainer = styled.img`
    ${sp`
        // margin-top: 1rem;
        // margin-left: 1rem;
        // float: left;
        // height: 30px;
        // width: 150px;
        display:none;
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
        width: 100vw;
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
        width: 100vw;
        display: flex;
        padding: 0 1vw;
        justify-content: flex-end;
        align-items: center;
        text-transform: uppercase;
        list-style: none;
        font-weight: 600;
        // display: none;
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
    position:relative;
`;

const AContainer = styled.a`
    color: white;
    margin: 0 3vw;
    text-decoration: none;
    transition: all ease-in-out 350ms;
    padding: 10px;
`;



