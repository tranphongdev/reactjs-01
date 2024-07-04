import { dataUser, iconSocial } from '~/constants';

function Professional() {
    return (
        <div className="mb-[144px]">
            <div className="wrapper">
                <div className="mb-[87px] w-fit lg:w-[848px] text-center m-auto">
                    <h3 className="text-heading">Professional Teams</h3>
                    <p className="text-title">The Professional expert</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className="flex lg:flex-row flex-col items-center gap-2 text-center">
                    {dataUser?.map((user) => (
                        <div
                            key={user?.id}
                            className="flex w-fit lg:w-[424px] flex-col  items-center cursor-pointer px-[70px] h-[626px] hover:shadow-lg hover:bg-white hover:rounded-[42px]"
                        >
                            <div className="pt-[91px] pb-[53px]">
                                <img src={user?.avatar} alt="" />
                            </div>

                            <h3 className="text-heading">{user?.title}</h3>
                            <p className="text-[#091156] font-semibold mb-3 mt-2">{user?.name}</p>
                            <p className="text-[#8B8B8B]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                            </p>

                            <div className="flex mt-[50px] gap-[34px] items-center ">
                                {iconSocial?.map((icon) => (
                                    <div
                                        key={icon?.id}
                                        className="w-[49px] h-[49px] rounded-full shadow-md flex justify-center items-center"
                                    >
                                        <img src={icon?.icon} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Professional;
