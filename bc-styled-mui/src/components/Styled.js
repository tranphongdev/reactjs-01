import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ContainerBox = styled(Box)`
    max-width: 1188px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const CustomAppBar = styled(AppBar)`
    position: static;
    background-color: transparent;
    overflow: hidden;
    box-shadow: none;
    margin: 0 auto;
    width: 1188px;
`;

export const BoxCustom = styled(Box)`
    display: flex;
    overflow: hidden;
`;

export const ButtonContact = styled(Button)`
    background-color: #ff64ae;
    color: white;
    padding: 14px 41px;
    margin-left: 140px;

    :hover {
        background-color: #e74d96;
    }
`;

export const BoxBgrNavi = styled(Box)`
    position: absolute;
    bottom: 0;
    z-index: -10;
    width: 100%;
    height: 500px;
    background-color: #0d165c;
`;

export const BoxFooterTop = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 225px 0 142px;
`;

export const BoxTopLeft = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const FooterBottom = styled(Box)`
    display: flex;
    gap: 8px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 90px;
`;

export const BoxFlex = styled(Box)`
    display: flex;
    align-items: center;
    gap: 45px;
`;
