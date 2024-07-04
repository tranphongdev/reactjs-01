import tw from 'twin.macro';
import { dataUser, iconSocial } from '~/constants';
import { BoxContainer, BoxUser } from './Styled';

function Professional() {
    return (
        <div css={[tw`mb-[144px]`]}>
            <BoxContainer>
                <div css={[tw`pb-[87px] lg:w-[848px] text-center m-auto`]}>
                    <h3 className="text-heading">Professional Teams</h3>
                    <p className="text-title">The Professional expert</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div css={[tw`flex lg:flex-row flex-col items-center gap-2 text-center`]}>
                    {dataUser?.map((user) => (
                        <BoxUser key={user?.id}>
                            <div css={[tw`pt-[91px] pb-[53px]`]}>
                                <img src={user?.avatar} alt="" />
                            </div>

                            <h3 className="text-heading">{user?.title}</h3>
                            <p css={[tw`text-[#091156] font-semibold mb-3 mt-2`]}>{user?.name}</p>
                            <p css={[tw`text-[#8B8B8B]`]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                            </p>

                            <div css={[tw`flex mt-[50px] gap-[34px] items-center`]}>
                                {iconSocial?.map((icon) => (
                                    <div
                                        key={icon?.id}
                                        css={[
                                            tw`w-[49px] h-[49px] rounded-full shadow-md flex justify-center items-center`,
                                        ]}
                                    >
                                        <img src={icon?.icon} alt="" />
                                    </div>
                                ))}
                            </div>
                        </BoxUser>
                    ))}
                </div>
            </BoxContainer>
        </div>
    );
}

export default Professional;
