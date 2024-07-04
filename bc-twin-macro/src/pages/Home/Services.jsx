import ServiceBg from '~/assets/service1.svg';
import ServiceBg2 from '~/assets/service2.svg';
import ServiceBg3 from '~/assets/service3.svg';
import BgAbout from '~/assets/bg-body3.png';
import BgAbout1 from '~/assets/bg-body4.png';
import { BoxContainer, BoxServiceContent } from './Styled';
import tw from 'twin.macro';

function Services() {
    return (
        <div className="services">
            <BoxContainer>
                <BoxServiceContent>
                    <h3 className="text-heading">Main Services</h3>
                    <p className="text-title">Learn services to focus on your beauty</p>
                    <p className="text-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </BoxServiceContent>

                <div css={[tw`flex lg:flex-row flex-col gap-[56px]`]}>
                    <div css={[tw`px-[35px]`]} className="box-shadow">
                        <div css={[tw`py-[59px] flex justify-center`]}>
                            <img src={ServiceBg2} alt="" />
                        </div>

                        <div css={[tw`pb-[52px]`]}>
                            <span css={[tw`text-[#091156] inline-block text-[18px] font-semibold`]}>
                                Beauty consultation
                            </span>
                            <p css={[tw`text-[#8B8B8B] mt-[6px]`]}>
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>

                    <div css={[tw`px-[35px]`]} className="box-shadow">
                        <div css={[tw`py-[59px] flex justify-center`]}>
                            <img src={ServiceBg3} alt="" />
                        </div>

                        <div css={[tw`pb-[52px]`]}>
                            <span css={[tw`text-[#091156] inline-block text-[18px] font-semibold`]}>
                                Skin treatments
                            </span>
                            <p css={[tw`text-[#8B8B8B] mt-[6px]`]}>
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>

                    <div css={[tw`px-[35px]`]} className="box-shadow">
                        <div css={[tw`py-[59px] flex justify-center`]}>
                            <img src={ServiceBg} alt="" />
                        </div>

                        <div css={[tw`pb-[52px]`]}>
                            <span css={[tw`text-[#091156] inline-block text-[18px] font-semibold`]}>
                                Beauty product
                            </span>
                            <p css={[tw`text-[#8B8B8B] mt-[6px]`]}>
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>
                </div>
            </BoxContainer>

            <div className="services-bg">
                <img src={BgAbout} alt="Background About" />
                <img className="bg-service-item" src={BgAbout1} alt="Background About 1" />
            </div>
        </div>
    );
}

export default Services;
