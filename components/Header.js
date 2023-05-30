import { useLanguage } from "../context/languageCtx";
import Link from "next/link";

export const Header = () => {
  const { language, translate } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center md:items-start absolute z-20 w-full mt-14 md:mt-40">
      <div className="w-full md:w-[80%] 2xl:w-[70%] bg-dark opacity-80 pt-1 pb-3 md:pb-4 md:pt-3 px-4 flex justify-end">
        <div className="max-w-[800px] mt-2 md:mt-0">
          <h1 className="text-light text-center md:text-right hero-shadow-h1 text-3xl md:text-[40px] tracking-widest leading-tight">
            {translate[language].headerTit}
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[80%] 2xl:w-[70%] bg-dark opacity-80 mt-14 md:mt-24 px-4 flex justify-start self-end">
        <div className="max-w-[650px]">
          <p className="text-light md:max-w-[830px] text-center md:text-left text-lg md:text-2xl pt-1 pb-2 md:pb-3">
            {translate[language].headerSubTit}
          </p>
        </div>
      </div>
      <Link href="#hablemos" className="self-center">
        <button className="hero-button mt-20 md:mt-36 bg-naranja text-light p-2 rounded-lg">
          {translate[language].headerBoton}
        </button>
      </Link>
    </div>
  );
};
