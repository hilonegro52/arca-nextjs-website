import { useEffect, useRef } from "react";
import { useLanguage } from "../context/languageCtx";

const Porque = () => {
  const { language, translate } = useLanguage();

  const imgRef = useRef(null);
  let x = 0;
  let old = 0;
  /* useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  /* const handleScroll = (e) => {
    if (window.innerWidth > 726) {
      let imgRefY = imgRef.current.getBoundingClientRect();
      if (window.pageYOffset === 0) x = 0;
      //if (imgRefY.bottom < 10 && imgRefY.bottom > -10) x = 0;
      if (window.innerHeight >= imgRefY.y && imgRefY.bottom > 0) {
        if (window.pageYOffset > old) {
          x++;
          imgRef.current.style.transform =
            "translate3d(" + x * 2 + "px,0px,0px)";
        } else {
          x--;
          imgRef.current.style.transform =
            "translate3d(" + x * 2 + "px,0px,0px)";
        }
      }
      old = window.pageYOffset;
    }
  }; */

  return (
    <div
      id="porque"
      className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50"
    >
      <section className="flex flex-col pt-8 md:pt-24 items-center bg-black text-light h-[450px] md:h-[800px]">
        <article className="max-w-xs h-[80%] md:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr_3fr_2fr]">
          {/* linea-cursor */}
          <div className="relative row-[1/4] flex items-center">
            <div className="relative h-[90%] w-px bg-light">
              <div className="absolute top-[40px] left-px bg-light w-[3px] h-24"></div>
            </div>
          </div>

          <p className="text-sm">{translate[language].xqTit}</p>
          <h2 className="text-2xl md:leading-relaxed">
            {translate[language].xqSubTit}
          </h2>
          <p className="text-base md:text-lg">{translate[language].xqTex}</p>
        </article>
      </section>
      <section className="">
        <img
          ref={imgRef}
          className="z-[-1] left-[0px] md:left-[100px] xl:left-[350px] h-[450px] md:h-[800px] object-cover"
          src="/porque.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Porque;
//la imagen va absolute
