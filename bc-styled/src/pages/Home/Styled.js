import styled from 'styled-components';

export const SliderStyled = styled.section`
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;

    @media (min-width: 1024px) {
        .slider-content {
            align-items: start;
            margin-left: 39px;
        }
        .text-heading {
            text-align: start;
        }
        .slider-image {
            margin-top: 0;
            width: 100%;
        }
        .slider-image img {
            width: 602px;
        }
        .slide-btn {
            margin-top: 136px;
        }
        .text-desc-heading {
            display: flex;
            justify-content: start;
            text-align: start;
        }
    }
`;

export const TitleHeading = styled.h1`
    font-size: 48px;
    color: var(--blue-navi-dark);
    font-weight: 600;
    line-height: 125%;
    font-style: normal;
    text-align: center;
`;

export const Content = styled.div`
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 53px;
`;

export const TextDesc = styled.p`
    color: var(--blue-navi-dark);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    margin-bottom: 28px;
    text-align: center;
    justify-content: center;
`;

export const ImageSlider = styled.div`
    margin-top: 40px;
    width: 100%;

    img {
        min-width: 300px;
        height: 100%;
        width: 100%;
    }
`;

export const ButtonSlider = styled.button`
    width: 200px;
    padding: 16px 40px;
`;

export const Services = styled.section`
    position: relative;
`;

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
`;

export const Box = styled.div``;

export const TextHeading = styled.h2`
    color: #ff64ae;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
`;

export const TextTitle = styled.p`
    color: #091156;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    margin: 12px 0;
`;

export const TextDescription = styled.p`
    color: #8b8b8b;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
`;

export const BtnWatch = styled.button`
    display: flex;
    align-items: center;
    gap: 13px;
    border: none;
    background-color: transparent;
    color: #8b8b8b;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.6px;
`;

export const TextName = styled.p`
    color: var(--blue-navi-dark);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    margin: 12px 0;
`;

export const TextContentBox = styled.p`
    color: var(--gray);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.4px;
`;
