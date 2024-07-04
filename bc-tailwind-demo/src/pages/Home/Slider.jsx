import SliderImage from '~/assets/SliderBg.svg';
import SliderBtnDot from '~/assets/slide-btn.svg';

function Slider() {
    return (
        <div className="wrapper">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-[136px] gap-4 lg:gap-[22px]">
                <div className="w-fit lg:w-[474px] ml-[39px] flex flex-col lg:items-start text-center items-center lg:text-left">
                    <h1 className="text-[#091156] text-[48px] font-semibold">
                        Clinic & beauty <br /> consultant
                    </h1>
                    <p className="text-[#091156] font-medium mb-[28px]">
                        It is a long established fact that a reader will be by the readable content of a page.
                    </p>
                    <button className="btn py-[16px] px-[41px]">More Details</button>
                </div>
                <div className="w-fit lg:w-[602px] h-[398px]">
                    <img src={SliderImage} alt="SliderImage" className="w-full h-full" />
                </div>
            </div>

            <div className="flex justify-center mb-[131px]">
                <img src={SliderBtnDot} alt="" />
            </div>
        </div>
    );
}

export default Slider;
