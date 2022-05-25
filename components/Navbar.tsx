import Link from 'next/link'
import { pc, sp, tab } from '.././utils/media';
import styled, { css } from 'styled-components'
import NavMenuContents from '../components/NavMenuContents';
// import Hamburger from '../components/Hamburger';

export function NavBar() {
  return (

  <NavContainer>

      <NavMenuContents />
      {/* <Hamburger /> */}

  </NavContainer>

  );
}

const NavContainer = styled.nav`
        background-color: #053742;
    ${sp`
        height: 3.5rem;
        width: 100vw;
        display: flex;
        position: fixed;
        // justify-content: flex-end; imgタグ左寄せのためコメアウト
        z-index: 99991;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
    ${tab`
        height: 4.5rem;
        width: 100vw;
        display: flex;
        position: fixed;
        justify-content: flex-end;
        z-index: 99991;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
    ${pc`
        height: 5rem;
        width: 100vw;
        display: flex;
        position: fixed;
        justify-content: flex-end;
        z-index: 99991;
        box-shadow: 0 3px 20px rgba(0,0,0,0.2);
    `}
`;

