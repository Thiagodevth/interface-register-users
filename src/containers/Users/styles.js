import styled from 'styled-components';
import Backgroud from '../../assets/backgroud.png';

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
 width: 240px;
 margin-top: 20px;
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14PX;
width: 342PX;
height: 58PX;
border: none;
outline: none;
margin-top: 20px;

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`;