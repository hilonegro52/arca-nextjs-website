import { useLanguage } from "../context/languageCtx";

const Equipo = () => {
  const { language, translate } = useLanguage();

  return (
    <div className="bg-light dark:bg-darkDark text-dark dark:text-light p-4 md:p-8 md:pt-14 pt-14 xl:pt-24">
      <section id="equipo" className="max-w-[720px] m-auto">
        <h2 className="text-5xl mb-5">{translate[language].eqTit}</h2>
        <p className="text-lg mb-4 lg:mb-8 leading-6 md:leading-7">
          {translate[language].eqTex}
        </p>
      </section>
      <section>
        <img
          className="w-full object-cover h-[250px] object-[56%] md:h-[491px] md:object-[56%] lg:object-[63%]"
          src="/equipo.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Equipo;
