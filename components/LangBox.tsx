import styled from "styled-components";
import { pc, sp, tab } from '.././utils/media';

export default function LangBox () {

  return (
      <WrapContainer>
      <h2>学習した内容</h2>
        <Wrap>
            <ItemContainer>
                <img src="/images/lang-logo/java-logo.png" />
                <HorizonLine></HorizonLine>
                <div>・Spring Boot<br/>・Terasoluna</div>
            </ItemContainer>

            <ItemContainer>
                <img src="/images/lang-logo/javascript-logo.png" />
                <HorizonLine></HorizonLine>
                <div>・React<br/>・Angular</div>
            </ItemContainer>

            <ItemContainer className="item">
                <img src="/images/lang-logo/typescript-logo.png" />
                <HorizonLine></HorizonLine>
                <div>・React <br/>・Next.js</div>
            </ItemContainer>
        </Wrap>
    </WrapContainer>
  );
};

const WrapContainer = styled.div`
    margin-top: 4em;
    margin-bottom: 1em;
`;

const Wrap = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${sp`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    `}
`;
  
const ItemContainer = styled.div`
    ${sp`
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 15px;
        width: 60%;
        background-color: #fff;
        border-radius: 18px;
        background: #f5f4f4;
        box-shadow:  10px 10px 30px #bebebe,
                    -10px -10px 30px #ffffff;
    `}
    ${tab`
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 30px;
        width: 32%;
        background-color: #fff;
        border-radius: 18px;
        background: #f5f4f4;
        box-shadow:  10px 10px 30px #bebebe,
                    -10px -10px 30px #ffffff;
    `}
    ${pc`
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 30px;
        width: 32%;
        background-color: #fff;
        border-radius: 18px;
        background: #f5f4f4;
        box-shadow:  10px 10px 30px #bebebe,
                    -10px -10px 30px #ffffff;
    `}
`;

const HorizonLine = styled.div`
    border: 0.1px solid #e5e5e5;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
`;
