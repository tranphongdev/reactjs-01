import FooterBG2 from '../assets/FooterBG2.svg';
import logofooter from '../assets/logo-footer.svg';
import caretRight from '../assets/caret-right.svg';
import { iconSocialFooter } from '../constants';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-ft"></div>
            <img className="bg-ft-top" src={FooterBG2} alt="Footer Background" />

            <div className="footer-main">
                <div className="container">
                    <div className="footer-top-content">
                        <div className="row">
                            <div className="col l-4 m-12 c-12 footer-item-main">
                                <img src={logofooter} alt="Logo Footer" />
                                <p className="text-desc-left">
                                    <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                                </p>
                                <p className="footer-address">Baker Steet 101, NY, United States.</p>
                                <p className="footer-contact">
                                    <span>+521 569 8966.</span> <span>mail@company.com.</span>
                                </p>
                            </div>

                            <div className="col l-4 m-12 c-12 footer-item-middle">
                                <h2 className="footer-title-menu">Pages</h2>
                                <ul>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="Caret Right" /> Home
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="Caret Right" /> About
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="Caret Right" />
                                        Services
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="Caret Right" />
                                        Gallery
                                    </li>
                                    <li className="footer-link">
                                        <img src={caretRight} alt="Caret Right" /> Team
                                    </li>
                                </ul>
                            </div>

                            <div className="col l-4 m-12 c-12 footer-item-right">
                                <h2 className="footer-title-menu">Informations</h2>
                                <ul>
                                    <li className="footer-link footer-link-right footer-link-right-first">
                                        <img src={caretRight} alt="Caret Right" /> Terms & conditions
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="Caret Right" />
                                        Privacy policy
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="Caret Right" /> Blog
                                    </li>
                                    <li className="footer-link footer-link-right">
                                        <img src={caretRight} alt="Caret Right" />
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
                                    <img key={icon?.id} src={icon?.icon} alt={`Social Icon ${icon.id}`} />
                                ))}
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <p className="text-copyright">© AltDesain Studio 2021 - All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
