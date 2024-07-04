import tw from 'twin.macro';

import Button from '~/components/Button';
import SliderImage from '~/assets/SliderBg.svg';
import SliderBtnDot from '~/assets/slide-btn.svg';
import { BoxContainer, BoxImage, BoxSlider, BoxSliderContent } from './Styled';

function Slider() {
    return (
        <BoxContainer>
            <BoxSlider>
                <BoxSliderContent>
                    <h1 css={[tw`text-[#091156] text-[48px] font-semibold`]}>
                        Clinic & beauty <br /> consultant
                    </h1>
                    <p css={[tw`text-[#091156] font-medium mb-[28px]`]}>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </p>
                    <Button color="pink">More Details</Button>
                </BoxSliderContent>
                <BoxImage>
                    <img src={SliderImage} alt="SliderImage" css={[tw`w-full h-full`]} />
                </BoxImage>
            </BoxSlider>

            <div css={[tw`flex justify-center mb-[131px]`]}>
                <img src={SliderBtnDot} alt="" />
            </div>
        </BoxContainer>
    );
}

export default Slider;
