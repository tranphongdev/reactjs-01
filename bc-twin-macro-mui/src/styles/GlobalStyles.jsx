import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
    :root {
        --primary: #ff64ae;
        --blue-navi: #414880;
        --blue-navi-dark: #091156;
        --gray: #8b8b8b;
        --white: #fff;
        --black: #000;
    }

    html {
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        background-image: url('/src/assets/bg-body.png'), url('/src/assets/bg-body2.png');
        background-repeat: no-repeat, no-repeat;
        background-size: 1213px 711px, 1266px 743px;
    }

    .text-heading {
        color: #ff64ae;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        font-family: 'Poppins', sans-serif;
    }

    .text-title {
        color: #091156;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        margin: 12px 0;
    }

    .text-desc {
        color: #8b8b8b;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.4px;
    }

    .box-item {
        border-radius: 42px;
        background: #fff;
        box-shadow: 0px 25px 50px 25px #f6f7ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .box-title {
        color: #091156;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
    }

    .box-desc {
        color: #8b8b8b;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.4px;
    }

    .services {
        position: relative;
        margin-bottom: 134px;
    }

    .services-bg {
        position: absolute;
        right: 0;
        top: 70%;
        z-index: -10;
    }

    .bg-service-item {
        position: absolute;
        right: 0;
        top: 10px;
    }

    .box-services-item:hover {
        border-radius: 42px;
        background: #fff;
        box-shadow: 0px 25px 50px 25px #f6f7ff;
    }

    .social-item {
        width: 49px;
        height: 49px;
        background-color: var(--white);
        box-shadow: -2px 6px 16px #e6e9fd;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .form-control {
        display: block;
        width: 100%;
        margin-bottom: 39px;
        background-color: var(--white);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1.6px;
        border-radius: 15px;
        border: 1px solid #d9ddfe;
        outline-color: var(--primary);
        transition: all 0.5s;
        padding: 17px 24px;
        color: var(--gray);
        caret-color: var(--primary);
    }

    .form-control::placeholder {
        color: #c5c5c5;
    }

    .contact {
        position: relative;
        margin-bottom: 70px;
        min-width: 100%;
        margin-top: 144px;
    }

    .contact-bg {
        position: absolute;
        top: -170px;
        left: 0;
        z-index: -10;
    }

    .contact-bg img {
        width: 100%;
    }

    .contact-bg-item {
        position: absolute;
        left: 0;
        top: 30px;
    }

    .footer {
        background-repeat: no-repeat;
        background-image: url('/src/assets/FooterBG1.svg');
        background-size: cover;
    }

    .footer {
        position: relative;
        overflow: hidden;
    }

    .bg-ft-top {
        position: absolute;
        z-index: -9;
        width: 100%;
    }

    .text-desc-left {
        color: #d7dbff;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.6px;
        margin: 33px 0 26px;
    }

    .text-desc-left b {
        color: #d7dbff;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.6px;
    }

    .footer-address {
        color: #d7dbff;
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
    }

    .footer-contact {
        display: flex;
        justify-content: center;
        gap: 28px;
        align-items: center;
    }

    .footer-contact span {
        color: #d7dbff;
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
    }

    #btnScrollToTop {
        display: none;
        position: fixed;
        bottom: 60px;
        right: 65px;
        z-index: 99;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: var(--primary);
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 5px;
        width: 36px;
        height: 36px;
        transition: all 0.5s;
    }

    #btnScrollToTop:hover {
        background-color: #d15d95;
    }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;
