import BgSlider from '~/assets/bg-slider.png';
import { ButtonSlider, Content, ImageSlider, SliderStyled, TextDesc, TitleHeading } from './Styled';
import slidebtn from '~/assets/slide-btn.svg';

function Slider() {
    return (
        <SliderStyled>
            <div className="row">
                <div className="col l-6 m-6 c-12">
                    <Content className="slider-content">
                        <TitleHeading className="text-heading">
                            Clinic & beauty <br />
                            consultant
                        </TitleHeading>
                        <TextDesc className="text-desc-heading">
                            It is a long established fact that a reader will be by the readable content of a page.
                        </TextDesc>
                        <ButtonSlider className="btn btn-slider">More Details</ButtonSlider>
                    </Content>
                </div>
                <div className="col l-6 m-6 c-12">
                    <ImageSlider className="slider-image">
                        <img src={BgSlider} alt="" />
                    </ImageSlider>
                </div>
            </div>

            <div style={{ margin: '136px 0 131px', textAlign: 'center' }}>
                <img src={slidebtn} alt="" />
            </div>
        </SliderStyled>
    );
}

export default Slider;
