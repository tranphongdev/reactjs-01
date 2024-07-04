import styled from '@emotion/styled';
import tw from 'twin.macro';

export const BoxContainer = styled.div`
    ${tw`max-w-[1170px] px-[15px] m-auto`}
`;

export const BoxSlider = styled.div`
    ${tw`flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-[136px] gap-4 lg:gap-[22px]`}
`;

export const BoxSliderContent = styled.div`
    ${tw`lg:w-[474px] lg:ml-[39px] ml-0 flex flex-col lg:items-start text-center items-center lg:text-left`}
`;

export const BoxImage = styled.div`
    ${tw`lg:w-[602px] h-[398px]`}
`;

export const BoxServiceContent = styled.div`
    ${tw`lg:w-[848px] m-auto text-center mb-[82px]`}
`;

export const BoxAbout = styled.div`
    ${tw`flex lg:flex-row flex-col mb-[142px]`}
`;

export const BoxAboutContent = styled.div`
    ${tw` flex flex-col lg:items-start items-center lg:text-left text-center`}
`;

export const BoxUser = styled.div`
    ${tw`flex lg:w-[424px] flex-col  items-center cursor-pointer px-[70px] h-[626px] hover:shadow-lg hover:bg-white hover:rounded-[42px]`}
`;

export const BoxContact = styled.div`
    ${tw`
        flex lg:flex-row flex-col justify-between items-center
    `}
`;
