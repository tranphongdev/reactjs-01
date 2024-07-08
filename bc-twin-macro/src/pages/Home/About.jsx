import playButton from '~/assets/btn-play.svg';
import aboutBg from '~/assets/bgAbout.svg';
import { BoxAbout, BoxAboutContent, BoxContainer } from './Styled';
import tw from 'twin.macro';
import Button from '~/components/Button';

function About() {
    return (
        <BoxContainer>
            <BoxAbout>
                <BoxAboutContent>
                    <h3 className="text-heading">About Us</h3>
                    <p className="text-title" css={[tw`lg:w-[664px]`]}>
                        We are the best beauty clinic
                    </p>
                    <p className="text-desc" css={[tw`lg:w-[483px]`]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.
                    </p>
                    <br />
                    <p className="text-desc" css={[tw`lg:w-[483px]`]}>
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </p>
                    <div css={[tw`flex items-center gap-[44px] mt-[49px]`]}>
                        <Button color="pink">Learn More</Button>
                        <div css={[tw`flex items-center gap-3 cursor-pointer`]}>
                            <img src={playButton} alt="" />
                            <span css={[tw`text-[#8B8B8B] font-medium`]}>Watch Video</span>
                        </div>
                    </div>
                </BoxAboutContent>

                <div css={[tw`w-full flex justify-center`]}>
                    <img src={aboutBg} alt="" className="min-w-full" />
                </div>
            </BoxAbout>
        </BoxContainer>
    );
}

export default About;
