import React from 'react';
import ReactDOM from 'react-dom/client';
import GlogalStyle from './styles/glogalStyle';
import Routes from './routes';

//ReactDOM.render(<><Home /><GlogalStyle /></>,document.getElementById("root"));
const root = ReactDOM.createRoot(
    document.getElementById('root'));
root.render(
    <>
        <Routes />
        <GlogalStyle />
    </>,
);
