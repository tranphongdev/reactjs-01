import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ContainerBox = styled(Box)`
    max-width: 1188px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const BoxContent = styled(Box)`
    margin-top: 159px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const TextTitleHeading = styled(Typography)`
    color: #091156;
    font-size: 48px;
    font-weight: 600;
`;

export const TextDescHeading = styled(Typography)`
    color: #091156;
    font-weight: 500;
    margin-bottom: 28px;
`;

export const ButtonMore = styled(Button)`
    background-color: #ff64ae;
    color: white;
    padding: 14px 41px;

    :hover {
        background-color: #e74d96;
    }
`;

export const ButtonDot = styled(Box)`
    margin-top: 136px;
    margin-bottom: 131px;
    display: flex;
    justify-content: center;
`;

export const BoxServiceHeading = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 82px;
    text-align: center;
`;

export const BoxImgService = styled(Box)`
    width: 166px;
    height: 166px;
    margin: 59px 0;
`;

export const BoxUserService = styled(Box)`
    padding: 0 35px;
    max-width: 343px;
    height: 458px;
    cursor: pointer;
`;

export const ButtonCustom = styled(Button)`
    background-color: #ff64ae;
    color: white;
    padding: 14px 41px;
    margin-left: 140px;
    box-shadow: 0px 17px 22px 0px #ffedf6;
    :hover {
        background-color: #e74d96;
    }
`;

export const BoxWatch = styled(Box)`
    display: flex;
    align-items: center;
    gap: 13px;
    color: #8b8b8b;
    font-weight: 600;
`;

export const ProfessionalBox = styled(Box)`
    max-width: '848px';
    margin: 142px auto 87px;
    text-align: center;
`;

export const BoxProfessionalUser = styled(Box)`
    padding: 0 77px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const BoxSocialsIcon = styled(Box)`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 34px;
    margin-bottom: 96px;
`;
