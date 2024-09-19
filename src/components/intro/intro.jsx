export const Intro = () => {
  return (
    <div className="flex justify-center w-full pt-5">
      <div className="container grid grid-cols-2 h-[650px] items-center">
        <div className="flex flex-col gap-10">
          <p className="text-7xl leading-[100px] font-semibold">
            Want anything to be easy with <b>LaslesVPN.</b>
          </p>
          <p className="text-lg leading-[30px]">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <div className="btn btn-error w-[250px] text-white font-bold shadow-2xl ">
            Get Started
          </div>
        </div>
        <div>
          <img className="w-[100%]" src="/Carousel_logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};
