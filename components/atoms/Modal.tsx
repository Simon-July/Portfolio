import styled from 'styled-components'
import { pc, sp, tab } from '../../utils/media';
import React, { useState, useEffect } from 'react'


export default function ModalFunc() {

    // モーダル表示用用useState
    const [modal, setModal] = useState("none");

    return(
        <ModalWrap modal={modal}>
            <ModalContainer>
                    <ModalContents>
 
                    </ModalContents>
            </ModalContainer>
        </ModalWrap>
    )
}


const ModalWrap = styled.div<{ modal: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0em;
  left: 0;
  z-index: 10000;
  background-color: rgba(21, 21, 21, 0.5);
  display: ${({ modal }) => modal};
  transition: all 1s ease;
  transition-delay: 0.5s;
`;

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: auto;
  inset: 20px 0;
  width: 600px;
  margin: 0 auto;
  margin-top: 5em;
  padding-top: 60px;
  max-height: 500px;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;