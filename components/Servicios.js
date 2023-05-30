import { useLanguage } from "../context/languageCtx";

const Servicios = () => {
  const { language, translate } = useLanguage();

  return (
    <div id="servicios" className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr]">
      <section className="flex flex-col pt-8 md:pt-24 items-center bg-light dark:bg-darkDark text-dark h-[200px] md:h-[370px]">
        <article className="max-w-xs h-[80%] md:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr_3fr]">
          {/* linea-cursor */}
          <div className="relative row-[1/4] flex items-center">
            <div className="relative h-[90%] w-px bg-dark dark:bg-light">
              <div className="absolute top-[15px] left-px bg-dark dark:bg-light w-[3px] h-24"></div>
            </div>
          </div>

          <p className="text-sm text-dark dark:text-light">
            {translate[language].servTit}
          </p>
          <h2 className="text-dark dark:text-light text-2xl md:leading-relaxed">
            {translate[language].servSubTit}
          </h2>
        </article>
      </section>
      <div className=" bg-light dark:bg-darkDark hidden md:block"></div>
    </div>
  );
};

export default Servicios;
