import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { useLanguage } from "../context/languageCtx";

const Contacto = () => {
  const { language, translate } = useLanguage();
  return (
    <div
      id="hablemos"
      className="grid grid-rows-[1fr_400px] md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50"
    >
      <section className="order-2 md:order-1 flex flex-col items-center bg-black text-light">
        <article className="h-full flex flex-col justify-center px-4 md:px-0">
          <div className=" text-naranja flex items-center grow-[1]">
            <Link className="home text-5xl" href="/">
              ARCA
            </Link>
          </div>
          <div className="grow-[3] flex flex-col justify-evenly">
            <p>{translate[language].contactoTel}</p>
            <p>Email: hi@arca.com.ar</p>
            <p>Villa Urquiza, Ciudad Autónoma de Buenos Aires</p>
            <div className="flex justify-evenly text-light">
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=54911 59367384&text= Hola!%20Quiero%20consultar%20por%20sus%20servicios!"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={35}
                  className="hover:text-naranja transition duration-250 ease-out hover:ease-in"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/arca-software"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size={33}
                  className="hover:text-naranja transition duration-250 ease-out hover:ease-in"
                />
              </Link>
            </div>
          </div>
        </article>
      </section>
      <section className="order-1 md:order-2 bg-light dark:bg-darkDark">
        <section className="flex flex-col items-center text-dark dark:text-light">
          <article className="p-4 md:pb-8 h-full flex flex-col justify-center">
            <div className=" text-naranja flex justify-center items-center grow-[1]">
              <h3 className="home text-2xl" href="/">
                {translate[language].contactoTit}
              </h3>
            </div>
            <div className="grow-[3] flex flex-col justify-evenly">
              <p className="mb-4">{translate[language].contactoTex}</p>
              <ContactForm />
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Contacto;
