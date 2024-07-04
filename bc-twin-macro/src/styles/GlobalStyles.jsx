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

    .menu-mobile {
        position: fixed;
        left: -280px;
        top: 0;
        bottom: 0;
        z-index: 1001;
        background-color: var(--white);
        width: 100%;
        max-width: 280px;
        box-shadow: 0.1rem 0 0.6rem 0 rgba(51, 51, 51, 0.5);
        will-change: transform;
        visibility: hidden;
        padding: 0 12px;
        transition: all 0.4s ease;
    }

    .menu-mobile.menu-mobile-active {
        visibility: visible;
        transform: translateX(280px);
    }

    .mobile-menu-close {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 30px;
        height: 30px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        color: var(--primary);
        border-radius: 4px;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        background: var(--white);
        border: 1px solid var(--primary);
        transition: all 0.1s ease-in;
    }

    .mobile-menu-close:hover {
        background: var(--primary);
        color: var(--white);
    }

    .mobile-menu-link-logo {
        display: inline-block;
        color: var(--blue-navi-dark);
        width: 100%;
        padding: 12px 0;
        font-size: 20px;
        text-align: center;
        font-weight: 600;
        margin: 12px 0;
    }

    .mobile-menu-link {
        display: inline-block;
        color: var(--blue-navi-dark);
        width: 100%;
        padding: 8px 0;
        font-size: 16px;
        text-align: center;
        transition: all 0.1s ease-in;
        border-radius: 4px;
    }

    .mobile-menu-link:hover {
        background-color: var(--primary);
        color: var(--white);
    }

    .text-heading {
        color: #ff64ae;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
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
        letter-spacing: 1.6px;
    }

    .box-shadow {
        border-radius: 42px;
        background: #fff;
        text-align: center;
        box-shadow: 0px 25px 50px 25px #f6f7ff;
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

    .shadow-avt {
        box-shadow: 0px 25px 50px 25px #f6f7ff;
    }

    .contact {
        position: relative;
        margin-bottom: 70px;
        min-width: 100%;
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

    .form-control {
        display: block;
        width: 100%;
        margin-bottom: 39px;
        background-color: var(--white);
        font-size: 16px;
        font-family: Poppins;
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

    .footer {
        background-repeat: no-repeat;
        background-image: url('/src/assets/FooterBG1.svg');
        background-size: cover;
    }

    .footer {
        position: relative;
        overflow: hidden;
    }

    .bg-ft {
        position: absolute;
        bottom: 0;
        z-index: -10;
        width: 100%;
        height: 500px;
        background-color: #0d165c;
    }

    .bg-ft-top {
        position: absolute;
        z-index: -9;
        width: 100%;
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
