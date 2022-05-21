import React from 'react'
import styled, { css } from 'styled-components'

const Hamburger = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 16px;
  right: 30px;
  width: 22px;
  height: 18px;
  transition: all 0.4s;

  span {
    :nth-of-type(2) {
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  ${(props) =>
    props.isOpen
      ? css`
          span {
            :nth-of-type(1) {
              -webkit-transform: translateY(20px) rotate(-45deg) scale(0.8);
              transform: translateY(8px) rotate(-45deg) scale(0.8);
            }

            :nth-of-type(2) {
              opacity: 0;
            }

            :nth-of-type(3) {
              -webkit-transform: translateY(-20px) rotate(45deg) scale(0.8);
              transform: translateY(-7px) rotate(45deg) scale(0.8);
            }
          }
        `
      : ''}
`

const HamburgerLine = styled.span`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #707070;
  transition: all 0.4s;

  &:nth-of-type(1) {
    top: 0;
  }
  &:nth-of-type(2) {
    top: 8px;
  }
  &:nth-of-type(3) {
    bottom: 0;
  }
`

type PropsType = {
  isOpen: boolean
  toggleIsOpen
}

export const MenuHamburger: React.FC<PropsType> = ({
  isOpen,
  toggleIsOpen,
}) => {
  return (
    <Hamburger isOpen={isOpen} onClick={toggleIsOpen}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </Hamburger>
  )
}