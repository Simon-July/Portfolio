import styled, { keyframes } from "styled-components";
import styles from '../components/layout.module.css'

export default function aboutMe () {

  return (
    <div className={styles.container}>

        <UlContainer>
            <BGContainer style = {{left: "0%", position:"absolute"}}></BGContainer>
            <BGContainer style = {{left: "25%"}}></BGContainer>
            <BGContainer style = {{left: "50%"}}></BGContainer>
            <BGContainer style = {{left: "75%"}}></BGContainer>
            <BGContainer style = {{left: "100%"}}></BGContainer>
        </UlContainer>

        <ul>
        <h3>開発言語</h3>
        <ChartContainer style={{background:"#0f697c",width:"60%"}}>
        Java
        <BarLabelContainer>65%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"70%"}}>
        Java Script
        <BarLabelContainer>70%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"60%"}}>
        TypeScript
        <BarLabelContainer>55%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"75%"}}>
        HTML
        <BarLabelContainer>75%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"75%"}}>
        CSS
        <BarLabelContainer>75%</BarLabelContainer>
        </ChartContainer>

        <h3>その他開発関連</h3>
        <ChartContainer style={{background:"#0f697c",width:"70%"}}>
        My SQL
        <BarLabelContainer>70%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"70%"}}>
        Git / SVN
        <BarLabelContainer>70%</BarLabelContainer>
        </ChartContainer>

        <ChartContainer style={{background:"#0f697c",width:"78%"}}>
        Microsoft
        <BarLabelContainer>78%</BarLabelContainer>
        </ChartContainer>
        </ul>

        <UlContainer>
            <AContainer >
                <LabelNameContainer>
                </LabelNameContainer>
            </AContainer>
            <AContainer style = {{left: "25%"}}>
                <LabelNameContainer> 
                    初心者
                </LabelNameContainer>
            </AContainer>
            <AContainer style = {{left: "50%"}}>
                <LabelNameContainer>
                    慣れた
                </LabelNameContainer>
            </AContainer>
            <AContainer style = {{left: "75%"}}>
                <LabelNameContainer>
                    自信あり
                </LabelNameContainer>
            </AContainer>
            <AContainer style = {{left: "100%"}}>
                <LabelNameContainer>
                    プロ
                </LabelNameContainer>
            </AContainer>
        </UlContainer>

    </div>
  )};

const BGContainer = styled.li`
  z-index: -9999;
  height: inherit;
  width: 2px;
  position: absolute;
  list-style: none;
  &:after{
    content: "";
    z-index: -9999;
    display: flex;
    margin-top: 50px;
    border-left: 1px solid #e5e5e5;
    height: 29em;
    }
`;

const UlContainer = styled.ul`
  height: 100%;
  position: relative;
`;

const LabelNameContainer = styled.span`
  display: block;
  width: 100px;
  text-align: center;
  position: absolute;
  bottom: -20px;
  right: -50px;
`;

const AContainer = styled.li`
  height: inherit;
  width: 2px;
  position: absolute;
  list-style: none;
  z-index: 2;
`;

const ChartContainer = styled.li`
  height: 40px;
  padding: 10px 0;
  line-height: 20px;
  margin: 20px 0;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  font-size: 15px;
  z-index: 9999;
  position: relative;
  margin-left: -2.6em;
`;

const BarLabelContainer = styled.span`
  padding-right: 10px;
  font-size: 15px;
  font-weight: 600;
  float: right;
`;
