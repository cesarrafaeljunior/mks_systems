import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    
    --white: #ffffff;
    --black: #000000;

    --backGroundBody: #E5E5E5;

    --colorPrimary:      #0F52BA;
    --colorPrimaryHover: #2561BD;

    --greyScale4: #373737;
    --greyScale3: #2C2C2C;
    --greyScale2: #BFBFBF;
    --greyScale1: #EEEEEE;

    --fontWeLight:    300;
    --fontWeRegular:  400;
    --fontWeMedium:   500;
    --fontWeSemiBold: 600;
    --fontWeBold:     700;

    --fontSiDescription:      10px;
    --fontSiPrices:           15px;
    --fontSiTitle:            16px;
    --fontSiLogo:             40px;
    --fontSiSubLogo:          20px;
    --fontSiFooter:           12px;
    --fontSiCartInformation:  18px;
    --fontSiCartTitle:        13px;
    --fontSiCartQtd:          5px;
    --fontSiCartPrice:        14px;
    --fontSiCartInformations: 28px;
}

body {
    width: 100%;
    height: 100%;
    background-color: var(--backGroundBody);
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

ul,ol {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    border: none;
    cursor: pointer;
}

`;

export { GlobalStyle };
