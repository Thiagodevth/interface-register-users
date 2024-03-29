import styled from 'styled-components';
import Backgroud from '../../assets/backgroud1.png';

export const Container = styled.div`
background: url("${Backgroud}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
height: 100vh;
min-height: 100vh;
`;

export const Image = styled.img`
    width: 280px;
    margin-top: 15px;
`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;
margin-left: 25px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom: 34px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #ffffff;

`;
