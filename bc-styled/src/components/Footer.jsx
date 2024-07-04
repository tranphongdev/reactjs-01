import FooterBG2 from '~/assets/FooterBG2.svg';
import logofooter from '~/assets/logo-footer.svg';
import caretRight from '~/assets/caret-right.svg';
import { iconSocialFooter } from '~/constants';
import { BackGroundNavi, Container, FooterMain, TextAddress, TextContact, TextCopyRight } from './Styled';

function Footer() {
    return (
        <footer className="footer">
            <BackGroundNavi />
            <img className="bg-ft-top" src={FooterBG2} alt="" />

            <FooterMain>
                <Container>
                    <div className="footer-top-content">
                        <div className="row">
                            <div className="col l-4 m-12 c-12 footer-item-main">
                                <img src={logofooter} alt="" />
                                <p className="text-desc-left">
                                    <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                                </p>
                                <TextAddress className="footer-address">
                                    Baker Steet 101, NY, United States.
                                </TextAddress>
                                <TextContact className="footer-contact">
                                    <span>+521 569 8966.</span> <span>mail@company.com.</span>
                                </TextContact>
                            </div>

                            <div className="col l-4 m-12 c-12 footer-item-middle">
                                <h2 className="footer-title-menu">Pages</h2>
                                <ul>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="" /> Home
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="" /> About
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="" />
                                        Services
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="" />
                                        Gallery
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="" /> Team
                                    </li>
                                </ul>
                            </div>

                            <div className="col l-4 m-12 c-12 footer-item-right">
                                <h2 className="footer-title-menu">Informations</h2>
                                <ul>
                                    <li className="footer-link footer-link-right footer-link-right-first">
                                        <img src={caretRight} alt="" /> Terms & conditions
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="" />
                                        Privacy policy
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="" /> Blog
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="" />
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-content">
                        <div className="row">
                            <div className="col l-6 m-6 c-12 footer-socials">
                                {iconSocialFooter?.map((icon) => (
                                    <img key={icon?.id} src={icon?.icon} alt="" />
                                ))}
                            </div>
                            <div className="col l-6 m-6 c-12 text-copyrights">
                                <TextCopyRight className="text-copyright">
                                    © AltDesain Studio 2021 - All right reserved.
                                </TextCopyRight>
                            </div>
                        </div>
                    </div>
                </Container>
            </FooterMain>
        </footer>
    );
}

export default Footer;
