const Relations = () => {
  return (
    <section className="w-[60.69rem] flex flex-col items-start justify-start gap-[3.5rem] max-w-full text-center text-[2rem] text-dimgray font-montserrat mq675:gap-[1.75rem]">
      <h2 className="m-0 relative text-inherit font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-[1.19rem] mq750:text-[1.63rem]">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-[1.25rem] font-med">
        <div className="w-[44.5rem] flex flex-col items-center justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="w-[34.63rem] flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq675:flex-wrap">
              <div className="h-[1.81rem] flex flex-col items-center justify-start gap-[0.88rem] text-darkslateblue">
                <b className="relative mq450:text-[1rem]">Study</b>
                <div className="relative box-border w-[5.25rem] h-[0.13rem] border-t-[2px] border-solid border-darkslateblue" />
              </div>
              <div className="h-[1.81rem] flex flex-col items-center justify-start gap-[0.88rem]">
                <div className="relative font-medium mq450:text-[1rem]">
                  Quiz
                </div>
                <div className="relative box-border w-[4.38rem] h-[0.13rem] border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[1.81rem] flex flex-col items-center justify-start gap-[0.88rem]">
                <div className="relative font-medium mq450:text-[1rem]">
                  Test
                </div>
                <div className="relative box-border w-[4.25rem] h-[0.13rem] border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[1.81rem] flex flex-col items-center justify-start gap-[0.88rem]">
                <div className="relative font-medium mq450:text-[1rem]">
                  Game
                </div>
                <div className="relative box-border w-[5.13rem] h-[0.13rem] border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[1.81rem] flex flex-col items-center justify-start gap-[0.88rem]">
                <div className="relative font-medium mq450:text-[1rem]">
                  Others
                </div>
                <div className="relative box-border w-[5.75rem] h-[0.13rem] border-t-[2px] border-solid border-whitesmoke" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative shrink-0 text-center text-[2.39rem] text-white font-lato">
            <div className="bg-gradient-to-t from-blue-700 to-blue-950 w-[100%] py-28 rounded-2xl relative">
              <div className="upper w-[100%] absolute top-5 flex justify-between">
                <i class="fa-regular fa-lightbulb ms-10"></i>
                <i class="fa-solid fa-volume-high me-10"></i>
              </div>
              <h3>9 + 6 + 7x -2x - 3</h3>
            </div>
          </div>
          <div className="w-[38.25rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full shrink-0 text-[1.5rem] text-darkslategray-200 mq450:flex-wrap mq450:justify-center">
            <i className="relative w-[1.88rem] text-[2rem] fa-solid fa-rotate-right text-gradient-to-t from-blue-700 to-blue-950 rounded-full" />
            <div className="w-[17rem] flex flex-row items-center justify-start gap-[2.69rem] mq450:gap-[1.31rem]">
              <i className="relative w-[1.77rem] fa-solid fa-angle-left p-2 bg-gradient-to-t from-blue-700 to-blue-950 text-white rounded-full flex align-middle justify-center " />
              <b className="relative mq450:text-[1.19rem]">01/10</b>
              <i className="relative w-[1.77rem] fa-solid fa-angle-right p-2 bg-gradient-to-t from-blue-700 to-blue-950 text-white rounded-full flex align-middle justify-center " />
            </div>
            <i
              className="relative w-[1.88rem] text-[2rem] fa-solid fa-expand"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relations;
