import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import tw from 'twin.macro';

export const ContainerBox = styled(Box)`
    ${tw`max-w-[1188px] m-auto px-[24px]`}
`;

export const CustomAppBar = styled(AppBar)`
    ${tw`static bg-transparent overflow-hidden shadow-none m-auto max-w-[1188px]`}
`;

export const BoxCustom = styled(Box)`
    ${tw`flex overflow-hidden`}
`;

export const ButtonContact = styled(Button)`
    ${tw`bg-[#ff64ae] text-white px-[41px] py-[14px] ml-[40px]`}

    :hover {
        ${tw`bg-[#e74d96]`}
    }
`;

export const BoxBgrNavi = styled(Box)`
    ${tw`absolute bottom-0 w-full h-[500px] bg-[#0d165c]`}
    z-index: -10
`;

export const BoxFooterTop = styled(Box)`
    ${[tw`flex justify-between mt-[225px] lg:mb-[142px] mb-[20px]`]}
`;

export const BoxTopLeft = styled(Box)`
    ${[tw`flex flex-col text-center`]}
`;

export const FooterBottom = styled(Box)`
    ${[tw`flex gap-[8px] items-center text-center justify-between mb-[90px]`]}
`;

export const BoxFlex = styled(Box)`
    ${[tw`flex items-center gap-[45px]`]}
`;
