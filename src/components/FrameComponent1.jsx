import logo2 from '../assets/logo2.png'

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-center justify-between min-h-[10.69rem] gap-[1.25rem] text-left text-[0.78rem] text-dimgray font-med mq675:flex-wrap">
      <div className="w-[13.56rem] flex flex-row items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.31rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem]">
          <b className="relative">Published by</b>
          <div className="logo flex items-center gap-2">
            <img
              className="relative  h-[2.44rem] object-cover"
              alt=""
              src={logo2}
            />
            <h1 className="text-2xl font-montserrat">
              Hygge<span className="font-bold">X</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0.5rem] text-[1.75rem]">
        <i class="fa-solid fa-plus p-2 bg-blue-800 rounded-full text-white"></i>
        <h3 className="m-0 relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[1.38rem]">
          Create Flashcard
        </h3>
      </div>
    </section>
  );
};

export default FrameComponent1;
