import Box from '@mui/material/Box';
import SliderImage from '~/assets/SliderBg.svg';
import SliderBtnDot from '~/assets/slide-btn.svg';
import { BoxContent, ButtonDot, ButtonMore, ContainerBox, TextDescHeading, TextTitleHeading } from './Styled';
import tw from 'twin.macro';

function Slider() {
    return (
        <ContainerBox>
            <BoxContent
                sx={{
                    ml: { xs: '0', md: '39px' },
                    flexDirection: { xs: 'column', md: 'row' },
                    textAlign: { xs: 'center', md: 'start' },
                }}
            >
                <Box>
                    <TextTitleHeading variant="h1">
                        Clinic & beauty <br /> consultant
                    </TextTitleHeading>
                    <TextDescHeading>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </TextDescHeading>
                    <ButtonMore>More Details</ButtonMore>
                </Box>
                <Box sx={{ minWidth: { xs: 'fit-content', md: '602px' }, height: '359px' }}>
                    <img src={SliderImage} alt="" css={[tw`w-full h-full`]} />
                </Box>
            </BoxContent>

            <ButtonDot>
                <img src={SliderBtnDot} alt="" />
            </ButtonDot>
        </ContainerBox>
    );
}

export default Slider;
