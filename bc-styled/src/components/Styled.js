import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
`;

export const HeaderStyled = styled.header`
    margin: 41px 0 159px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 63px;
    overflow: hidden;
    .header-logo {
        width: 258px;
        height: 63px;
    }
    .header-logo img {
        width: 100%;
        height: 100%;
    }
    .menu-mobile.show {
        visibility: visible;
        opacity: 1;
        position: fixed;
        min-width: 280px;
        will-change: transform;
        top: 0;
        left: 0;
        bottom: 0;
        transform: translateX(0);
        background-color: var(--white);
        transition: opacity 0.3s ease, visibility 0.3s ease;
        transition: all 0.4s ease;
        box-shadow: 0.1rem 0 0.6rem 0 rgba(51, 51, 51, 0.5);
    }
    .menu-mobile {
        z-index: 1001;
        visibility: hidden;
        opacity: 0;
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
    .menu-mobile {
        padding: 0 12px;
        position: relative;
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
    .header-main {
        display: flex;
        align-items: center;
        gap: 52px;
    }
    .menu {
        display: none;
        align-items: center;
        gap: 45px;
    }

    .menu-link {
        color: var(--gray);
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .menu-link:hover {
        color: var(--blue-navi);
        transition: color 3s all;
    }
    .menu-link-active {
        color: var(--blue-navi);
        font-weight: 500;
    }

    .btn-menu-mobile {
        display: block;
        width: 50px;
        height: 50px;
        font-size: 20px;
        background-color: var(--white);
        border: 1px solid var(--primary);
        color: var(--primary);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .btn-menu-mobile:hover {
        background-color: var(--primary);
        color: var(--white);
    }

    .btn-header {
        padding: 14px 41px;
        display: none;
    }
    @media (min-width: 1024px) {
        .header-main .menu {
            display: flex;
        }
        .btn-header {
            display: flex;
        }
        .btn-menu-mobile {
            display: none;
        }
        .menu-mobile {
            visibility: hidden;
            opacity: 0;
        }
    }
`;

export const Footer = styled.footer`
    background-repeat: no-repeat;
    background-image: url('/src/assets/FooterBG1.svg');
    background-size: cover;
`;

export const BackGroundNavi = styled.div`
    position: absolute;
    bottom: 0;
    z-index: -10;
    width: 100%;
    height: 500px;
    background-color: #0d165c;
`;

export const FooterMain = styled.div`
    padding-top: 225px;
    padding-bottom: 140px;
`;

export const TextAddress = styled.p`
    color: #d7dbff;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.4px;
`;

export const TextContact = styled.p`
    display: flex;
    justify-content: center;
    gap: 28px;
    align-items: center;

    span {
        color: #d7dbff;
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
    }
`;

export const TextCopyRight = styled.p`
    text-align: center;
    color: #d7dbff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
    text-align: right;
`;
