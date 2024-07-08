import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import tw from 'twin.macro';

export const ContainerBox = styled(Box)`
    ${tw`max-w-[1188px] mx-auto px-[24px]`}
`;

export const BoxContent = styled(Box)`
    ${tw`mt-[159px] flex items-center gap-[12px]`}
`;

export const TextTitleHeading = styled(Typography)`
    ${tw`text-[#091156] text-[48px] font-semibold`}
    font-family: 'Poppins', sans-serif;
`;

export const TextDescHeading = styled(Typography)`
    ${tw`text-[#091156] font-medium mb-[28px]`}
    font-family: 'Poppins', sans-serif;
`;

export const ButtonMore = styled(Button)`
    ${tw`bg-[#ff64ae] text-white px-[41px] py-[14px] `}

    :hover {
        background-color: #e74d96;
    }
`;

export const ButtonDot = styled(Box)`
    ${tw`mt-[136px] mb-[131px] flex justify-center`}
`;

export const BoxServiceHeading = styled(Box)`
    ${[tw`flex items-center mx-auto flex-col text-center mb-[82px]`]}
`;

export const BoxImgService = styled(Box)`
    ${[tw`w-[166px] h-[166px] my-[59px]`]}
`;

export const BoxUserService = styled(Box)`
    ${[tw`px-[35px] max-w-[343px] h-[458px] cursor-pointer`]}
`;

export const ButtonCustom = styled(Button)`
    ${[tw`bg-[#ff64ae] text-white px-[41px] py-[14px] ml-[140px]`]}
    box-shadow: 0px 17px 22px 0px #ffedf6;
    :hover {
        background-color: #e74d96;
    }
`;

export const BoxWatch = styled(Box)`
    ${tw`flex items-center gap-[13px] text-[ #8b8b8b] font-semibold cursor-pointer`}
`;

export const ProfessionalBox = styled(Box)`
    ${[tw`max-w-[848px] mt-[142px] mb-[87px] text-center`]}
`;

export const BoxProfessionalUser = styled(Box)`
    ${tw`px-[77px] cursor-pointer flex flex-col justify-center text-center`}
`;

export const BoxSocialsIcon = styled(Box)`
    ${tw`mt-[50px] flex justify-center gap-[34px] mb-[96px]`}
`;
