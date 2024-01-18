import Relations from "../components/Relations";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import logo from '../assets/logo.jpg'

const Desktop = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-center justify-start pt-[1.69rem] px-[1.25rem] pb-[19.19rem] box-border gap-[4rem] tracking-[normal] mq450:gap-[1rem] mq675:gap-[2rem]">
      <header className="w-[77.06rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-left text-[1.13rem] text-darkslategray-100 font-med mq750:w-[44.25rem]">
            
        <div className="logo flex items-center gap-2">
        <img
          className="relative  h-[2.44rem] object-cover"
          alt=""
          src={logo}
        />
        <h1 className="text-2xl font-montserrat">Hygge<span className="font-bold">X</span></h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-[2.5rem] max-w-full mq675:gap-[1.25rem] mq750:hidden">
          <div className="w-[17.63rem] flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="relative">Home</div>
            <div className="relative">Flashcard</div>
            <div className="relative">Contact</div>
          </div>
          <div className="relative">FAQ</div>
          <button className="cursor-pointer [border:none] p-[0.81rem] bg-[transparent] rounded-[32px] [background:linear-gradient(180deg,_#06286e,_#164ec0)] w-[8rem] flex flex-row items-center justify-center box-border">
            <div className="relative text-[1.13rem] font-medium font-med text-white text-left">
              Login
            </div>
          </button>
        </div>
      </header>
      <main className="w-[77.25rem] flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] box-border gap-[4rem] max-w-full text-center text-[1.13rem] text-dimgray font-med mq450:gap-[1rem] mq675:gap-[2rem]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <i
              className="relative w-[1.5rem] overflow-hidden shrink-0 fa-solid fa-house"
              alt=""
            ></i>
            <i
              className="relative w-[1.88rem] overflow-hidden shrink-0 fa-solid fa-angle-right"
              loading="eager"
              alt=""
            />
            <div className="relative font-medium">Flashcard</div>
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <i
              className="relative w-[1.5rem] overflow-hidden shrink-0 fa-solid fa-angle-right"
              alt=""
            />
            <div className="relative font-medium">Mathematics</div>
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <i
                className="relative w-[1.5rem]  overflow-hidden shrink-0 fa-solid fa-angle-right"
                alt=""
              />
              <div className="relative font-semibold">
                Relation and Function
              </div>
            </div>
          </div>
        </div>
        <Relations />
        <FrameComponent1 />
        <section className="w-[53rem] flex flex-col items-start justify-start gap-[3rem] max-w-full text-left text-[3rem] font-med mq450:gap-[1.5rem]">
          <h1 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[1.81rem] mq750:text-[2.38rem]">
            FAQ
          </h1>
          <FrameComponent2 />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
