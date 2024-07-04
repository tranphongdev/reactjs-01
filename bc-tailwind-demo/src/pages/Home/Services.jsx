import ServiceBg from '../../assets/service1.svg';
import ServiceBg2 from '../../assets/service2.svg';
import ServiceBg3 from '../../assets/service3.svg';
import BgAbout from '../../assets/bg-body3.png';
import BgAbout1 from '../../assets/bg-body4.png';

function Services() {
    return (
        <div className="services">
            <div className="wrapper">
                <div className="lg:w-[848px] w-fit m-auto text-center mb-[82px]">
                    <h3 className="text-heading">Main Services</h3>
                    <p className="text-title">Learn services to focus on your beauty</p>
                    <p className="text-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col gap-[56px]">
                    <div className="px-[35px] box-shadow">
                        <div className="py-[59px] flex justify-center">
                            <img src={ServiceBg2} alt="" />
                        </div>

                        <div className="pb-[52px]">
                            <span className="text-[#091156] inline-block text-[18px] font-semibold">
                                Skin treatments
                            </span>
                            <p className="text-[#8B8B8B] mt-[6px]">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>

                    <div className="px-[35px] box-shadow">
                        <div className="py-[59px] flex justify-center">
                            <img src={ServiceBg3} alt="" />
                        </div>

                        <div className="pb-[52px]">
                            <span className="text-[#091156] inline-block text-[18px] font-semibold">
                                Beauty product
                            </span>
                            <p className="text-[#8B8B8B] mt-[6px]">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>

                    <div className="px-[35px] box-shadow">
                        <div className="py-[59px]  flex justify-center">
                            <img src={ServiceBg} alt="" />
                        </div>

                        <div className="pb-[52px]">
                            <span className="text-[#091156] inline-block text-[18px] font-semibold">
                                Beauty consultation
                            </span>
                            <p className="text-[#8B8B8B] mt-[6px]">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-bg">
                <img src={BgAbout} alt="Background About" />
                <img className="bg-service-item" src={BgAbout1} alt="Background About 1" />
            </div>
        </div>
    );
}

export default Services;
