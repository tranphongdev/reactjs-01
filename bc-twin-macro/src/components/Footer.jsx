import FooterBG2 from '~/assets/FooterBG2.svg';
import logofooter from '~/assets/logo-footer.svg';
import caretRight from '~/assets/caret-right.svg';
import { iconSocialFooter, infoMenu, menuMobile } from '~/constants';
import { BoxContainer, BoxFooterBottom, BoxFooterTop } from './Styled';
import tw from 'twin.macro';

function Footer() {
    return (
        <footer className="footer">
            <div className="bg-ft"></div>
            <img className="bg-ft-top" src={FooterBG2} alt="Footer Background" />

            <div>
                <BoxContainer>
                    <BoxFooterTop>
                        <div css={[tw`flex flex-col items-center lg:items-start text-center`]}>
                            <div>
                                <img src={logofooter} alt="" />
                            </div>
                            <p css={[tw`text-[#D7DBFF] tracking-[1.6px] font-light text-base mt-[33px] mb-[26px]`]}>
                                <b css={[tw`font-bold`]}>Beautice</b> is a Beauty Clinic WordPress Theme.
                            </p>

                            <p css={[tw`text-[#d7dbff] text-sm font-medium tracking-[1.4px]`]}>
                                Baker Steet 101, NY, United States.
                            </p>
                            <p css={[tw`flex gap-[28px] items-center`]}>
                                <span css={[tw`text-[#d7dbff] text-sm tracking-[1.4px] italic`]}>+521 569 8966.</span>{' '}
                                <span css={[tw`text-[#d7dbff] text-sm tracking-[1.4px] italic`]}>
                                    mail@company.com.
                                </span>
                            </p>
                        </div>

                        <div css={[tw`flex justify-between lg:gap-[173px] gap-[50px]`]}>
                            <div>
                                <h3 css={[tw`text-[18px] mb-6 tracking-[1.8px] text-white font-semibold`]}>Pages</h3>
                                <ul>
                                    {menuMobile?.map((menu) => (
                                        <li key={menu?.id}>
                                            <a
                                                href=""
                                                css={[
                                                    tw`flex items-center gap-2 mb-[11px] text-[#D7DBFF] tracking-[1.6px]`,
                                                ]}
                                            >
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 css={[tw`text-[18px] mb-6 tracking-[1.8px] text-white font-semibold`]}>
                                    Informations
                                </h3>
                                <ul>
                                    {infoMenu?.map((menu) => (
                                        <li key={menu?.id}>
                                            <a
                                                href=""
                                                css={[
                                                    tw`flex items-center gap-2 mb-[11px] text-[#D7DBFF] tracking-[1.6px]`,
                                                ]}
                                            >
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </BoxFooterTop>

                    <BoxFooterBottom>
                        <div css={[tw`flex items-center gap-[45px]`]}>
                            {iconSocialFooter?.map((icon) => (
                                <img key={icon?.id} src={icon?.icon} alt="" />
                            ))}
                        </div>
                        <p css={[tw`text-[#D7DBFF] tracking-[1.6px] font-normal`]}>
                            © AltDesain Studio 2021 - All right reserved.
                        </p>
                    </BoxFooterBottom>
                </BoxContainer>
            </div>
        </footer>
    );
}

export default Footer;
