const Hero = () => {
    return (
        <section className="container py-[102px] text-center px-4">
            <div className="bg-gray-100 pt-[40px] pb-[95px] rounded-[18px] max-w-[1260px] mx-auto">
                <h2 className="text-3xl font-light mb-12">How much does it cost to make an App?</h2>

                <div className="flex justify-center lg:gap-[26px] lg:flex-row flex-col gap-[50px] px-4 lg:px-2 ">
                    <div className="bgBlack text-white pt-[47px] px-[76px] rounded-xl max-w-[507px] flex flex-col items-center justify-center lg:mx-0 mx-auto">
                        <h3 className="font-thin textmd leading-[28px] mb-[15px]">Like existing Apps</h3>
                        <p className="mb-[48px] textsm leading-[30px]">Uber, Intagram, Airbnb, Whatsapp etc.</p>
                        <img src="/Home/mobile.svg" alt="App Preview" className=" " />
                    </div>

                    <div className="bgBlue text-white rounded-xl max-w-[507px] pt-[47px] px-[88px] lg:mx-0 mx-auto">
                        <h3 className="textmd font-thin">For my own business</h3>
                        <p className="mb-[32px] text-[18px] max-w-[360px] text-center leading-[30px] mb-[2px]">
                            Cars & Transport, Social networking, Travel, Health & Beauty etc.
                        </p>
                        <img src="/Home/purse.svg" alt="Business Preview" className=" " />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Hero;
