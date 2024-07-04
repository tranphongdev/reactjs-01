import playButton from '~/assets/btn-play.svg';
import aboutBg from '~/assets/bgAbout.svg';

function About() {
    return (
        <div className="wrapper">
            <div className="flex lg:flex-row flex-col mb-[142px]">
                <div className="flex flex-col lg:items-start items-center lg:text-left text-center">
                    <h3 className="text-heading">About Us</h3>
                    <p className="text-title w-fit lg:w-[664px]">We are the best beauty clinic</p>
                    <p className="text-desc w-fit lg:w-[483px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.
                    </p>
                    <br />
                    <p className="text-desc w-fit lg:w-[483px]">
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </p>
                    <div className="flex items-center gap-[44px] mt-[49px]">
                        <button className="btn py-4 px-10">Learn More</button>
                        <div className="flex items-center gap-3">
                            <img src={playButton} alt="" />
                            <span className="text-[#8B8B8B] font-medium">Watch Video</span>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img src={aboutBg} alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default About;
