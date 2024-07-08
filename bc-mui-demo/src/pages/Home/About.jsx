import { Box, Button } from '@mui/material';
import playButton from '~/assets/btn-play.svg';
import aboutBg from '~/assets/bgAbout.svg';

function About() {
    return (
        <Box
            sx={{
                maxWidth: '1188px',
                margin: '0 auto 142px',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box>
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
                    <Button
                        sx={{
                            bgcolor: '#FF64AE',
                            color: 'white',
                            p: '14px 41px',
                            ':hover': { bgcolor: ' #e74d96' },
                        }}
                    >
                        Learn More
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '13px',
                            color: '#8B8B8B',
                            fontWeight: '600',
                            cursor: 'pointer',
                        }}
                    >
                        <img src={playButton} alt="" />
                        <p>Watch Video</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ minWidth: { xs: 'fit-content', md: '476px' }, height: '350px' }}>
                <img src={aboutBg} alt="" style={{ width: '100%', height: '100%' }} />
            </Box>
        </Box>
    );
}

export default About;
