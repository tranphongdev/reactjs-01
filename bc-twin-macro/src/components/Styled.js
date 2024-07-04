import styled from '@emotion/styled';
import tw from 'twin.macro';

export const HeaderStyled = styled.header`
    ${tw`max-w-[1170px] h-[63px] px-[15px] m-auto flex justify-between items-center mb-[159px] mt-[45px]`}
`;

export const ImgLogo = styled.img`
    ${tw`w-[258px] h-[63px] cursor-pointer`}
`;

export const ButtonBar = styled.button`
    ${tw`lg:hidden block w-[50px] h-[50px] text-xl rounded border border-[var(--primary)] text-[var(--primary)] bg-white hover:text-white hover:bg-[var(--primary)] transition-colors`}
`;

export const BoxContainer = styled.div`
    ${tw`max-w-[1170px] px-[15px] m-auto`}
`;

export const BoxFooterTop = styled.div`
    ${tw`flex lg:flex-row flex-col items-center lg:items-start lg:gap-0 gap-3 justify-between mt-[225px] mb-[142px] `}
`;

export const BoxFooterBottom = styled.div`
    ${tw`flex lg:flex-row flex-col items-center gap-2 text-center lg:items-start justify-between mb-[90px]`}
`;
