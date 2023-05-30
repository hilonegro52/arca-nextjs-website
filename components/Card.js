import React, { useState } from "react";

const Card = ({ img, title, backText, align }) => {
  const [cardState, setCardState] = useState(false);
  const handleCards = (e) => {
    const card = e.currentTarget;
    card.style.animation = !cardState
      ? "2s cubic-bezier(0.34, 1.56, 0.64, 1) 0s running forwards card-flip-fw"
      : "2s cubic-bezier(0.34, 1.56, 0.64, 1) 0s running forwards card-flip-bw";
    setCardState(!cardState);
  };

  return (
    <section className="relative flip-card bg-transparent cursor-pointer">
      <div className="inner" onClick={handleCards}>
        <div className="front absolute rounded-3xl overflow-hidden">
          <img src={img} alt="" />
          {/* <div className="absolute top-0 right-0 left-0 bottom-0 m-auto bg-naranja"></div> */}
          <div className="w-full h-full absolute top-0 px-4 md:px-8 flex">
            <h2
              className={`text-[4.7rem] md:text-[5.3rem] lg:text-[9.4rem] break-all ${align} text-light`}
            >
              {title}
            </h2>
          </div>
        </div>

        <div className="back relative rounded-3xl overflow-hidden bg-naranja">
          <img className="invisible" src="/ingreso.jpg" alt="" />
          <div className="absolute top-0 bottom-0 flex items-center p-10 ">
            <p className="text-light leading-7 md:leading-10 lg:leading-normal text-xl md:text-[21px] lg:text-4xl">
              {backText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
