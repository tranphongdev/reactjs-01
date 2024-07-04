import { Box } from '@mui/material';
import playButton from '~/assets/btn-play.svg';
import aboutBg from '~/assets/bgAbout.svg';
import { BoxWatch, ButtonCustom, ContainerBox } from './Styled';

function About() {
    return (
        <ContainerBox
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' } }}>
                <h3 className="text-heading">About Us</h3>
                <p className="text-title">We are the best beauty clinic</p>
                <p className="text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                    Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
                    suspendisse placerat.
                </p>
                <p className="text-desc">
                    Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                </p>
                <Box sx={{ display: 'flex', gap: '44px' }}>
                    <ButtonCustom sx={{ ml: 0 }}>Learn More</ButtonCustom>
                    <BoxWatch>
                        <img src={playButton} alt="" />
                        <p>Watch Video</p>
                    </BoxWatch>
                </Box>
            </Box>
            <Box sx={{ minWidth: { xs: 'fit-content', md: '476px' }, height: '350px' }}>
                <img src={aboutBg} alt="" style={{ width: '100%', height: '100%' }} />
            </Box>
        </ContainerBox>
    );
}

export default About;
