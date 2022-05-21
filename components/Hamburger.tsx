import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components'
import { pc, sp, tab } from '.././utils/media';


export default function Hamburger () {

const [checked, setChecked] = useState(false);
const handleCheckboxClick = useMemo(() => {
  return (e) => {
    setChecked(!checked);
  };
}, [checked]);

    
  return(
    <div style = {{marginLeft: "auto"}}>
          <CHKBox type="checkbox" checked={checked} onChange={handleCheckboxClick} /> 

          <HBBar></HBBar>
          <HBBar></HBBar>
          <HBBar></HBBar>

          {checked ? 
          <Test >
            {/* <CHKBox2 type="checkbox" checked={checked} onChange={handleCheckboxClick} />  */}
          </Test> : ""}

    </div>
  );
}

const Test = styled.div`
background-color: #053742;
    margin-top: 1rem;
    height: 50rem;
    width: 30rem;
    z-index: 99993;
    transform: scale(-1, 1);
`;

const CHKBox2 = styled.input`
${sp`
    height: 3.5rem;
    width: 45px;
    display: flex;
    position: absolute;
    cursor: pointer;
    opacity: 0; 
    // justify-content: flex-end; imgタグ左寄せのためコメアウト
    z-index: 99998;
`}
${tab`
    display:none;
`}
${pc`
    display:none;
`}
`;

const CHKBox = styled.input`
    ${sp`
        height: 3.5rem;
        width: 45px;
        display: flex;
        position: absolute;
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
          margin-right: 1em;
          position: relative;
          background: white;
          border-radius: 3px;
          z-index: 99999;
          transform-origin: 4px 0px;  
          transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

    `}
    ${tab`
        display:none;
    `}
    ${pc`
        display:none;
    `}
`;

