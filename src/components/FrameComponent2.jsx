const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1rem] text-gray font-med mq450:gap-[1rem]">
      <div className="self-stretch rounded-xl box-border overflow-hidden flex flex-row items-center justify-between py-[1.06rem] pr-[1.56rem] pl-[1.5rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-dodgerblue">
        <div className="relative leading-[1.63rem] font-semibold">
          Can education flashcards be used for all age groups?
        </div>
        <i className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 fa-solid fa-angle-down" />
      </div>
      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[1.06rem] pr-[1.56rem] pl-[1.5rem] gap-[1.25rem] border-[1px] border-solid border-dodgerblue">
        <div className="relative leading-[1.63rem] font-semibold">
          How do education flashcards work?
        </div>
        <i className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 fa-solid fa-angle-down" />
      </div>
      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[1.06rem] pr-[1.56rem] pl-[1.5rem] gap-[1.25rem] border-[1px] border-solid border-dodgerblue">
        <div className="relative leading-[1.63rem] font-semibold">
          Can education flashcards be used for test preparation?
        </div>
        <i className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 fa-solid fa-angle-down" />
      </div>
    </div>
  );
};

export default FrameComponent2;
