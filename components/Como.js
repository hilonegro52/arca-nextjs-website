import { useEffect, useRef } from "react";
import { useLanguage } from "../context/languageCtx";

const HeroBottom = () => {
  const { language, translate } = useLanguage();

  const heroBottomRef = useRef(null);
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    let heroBottomRefTopY = heroBottomRef.current.getBoundingClientRect();
    if (window.innerHeight >= heroBottomRefTopY.y) {
      let posicionY = heroBottomRefTopY.y;
      let posicionParallax = posicionY * 0.2;
      imgRef.current.style.transform =
        "translate3d(0px," + posicionParallax + "px,0px)";
      cardRef.current.style.transform = "translatey(-115px)";
    }
  };

  return (
    <div
      id="como"
      className="w-full items-center relative h-[650px] md:h-[750px] lg:h-[880px]"
      ref={heroBottomRef}
    >
      <div
        className="card-como absolute bottom-[-100px] h-full grid grid-rows-1 md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50"
        ref={cardRef}
      >
        <section className="flex flex-col justify-end text-light">
          <article className="h-[95%] md:h-[90%] flex justify-center lg:justify-end 2xl:justify-center px-4 md:pr-0">
            <section className="bg-black rounded-2xl md:rounded-3xl h-full max-w-[100%] lg:max-w-[70%] xl:max-w-[80%] 2xl:max-w-[55%] p-8 md:pt-8 lg:pt-16 flex justify-center">
              <article className="h-full md:h-[100%] lg:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr] w-[100%]">
                {/* linea-cursor */}
                <div className="relative row-[1/4] flex items-center">
                  <div className="relative h-[90%] w-px bg-light">
                    <div className="absolute top-[40px] left-px bg-light w-[3px] h-32"></div>
                  </div>
                </div>
                <div className="flex flex-col self-center justify-between h-full">
                  <p className="text-sm">{translate[language].comoTit}</p>
                  <h2 className="text-2xl md:leading-relaxed">
                    <span className="color_11 wixui-rich-text__text">
                      {translate[language].comoSubTit}
                    </span>
                  </h2>
                  <p className="text-base md:text-lg">
                    {translate[language].comoTex}
                  </p>
                </div>
              </article>
            </section>
          </article>
        </section>
      </div>
      <img
        className="w-full fixed top-0 z-[-2] object-cover object-[55%] md:object-[35%] h-[750px] md:h-[1080px]"
        src="/como.jpg"
        alt=""
        ref={imgRef}
      />
    </div>
  );
};

export default HeroBottom;
