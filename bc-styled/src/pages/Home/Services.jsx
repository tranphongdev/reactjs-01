import ServiceBg from '~/assets/service1.svg';
import ServiceBg2 from '~/assets/service2.svg';
import ServiceBg3 from '~/assets/service3.svg';
import BgAbout from '~/assets/bg-body3.png';
import BgAbout1 from '~/assets/bg-body4.png';
import { Box, Container, TextDescription, TextHeading, TextTitle } from './Styled';

function Services() {
    return (
        <section className="services">
            <Container>
                <Box>
                    <Box style={{ textAlign: 'center' }}>
                        <TextHeading className="text-primary-title">Main Services</TextHeading>
                        <TextTitle>
                            Learn services to focus <br />
                            on your beauty
                        </TextTitle>
                    </Box>
                    <TextDescription>
                        <div className="services-desc">
                            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                            feugiat tellus sagittis, scelerisque eget nulla turpis.
                        </div>
                    </TextDescription>
                </Box>

                <div className="row" style={{ justifyContent: 'space-between', gap: '47px' }}>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg} alt="ServiceBg" />
                        </div>
                        <div className="services-item-content">
                            <span>Beauty consultation</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg2} alt="ServiceBg2" />
                        </div>
                        <div className="services-item-content">
                            <span>Skin treatments</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg3} alt="ServiceBg3" />
                        </div>
                        <div className="services-item-content">
                            <span>Beauty product</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="services-bg">
                <img src={BgAbout} alt="BgAbout" />
                <img className="bg-service-item" src={BgAbout1} alt="BgAbout1" />
            </div>
        </section>
    );
}

export default Services;
