import Link from "next/link";
import { useEffect, useRef } from "react";
import { RxArrowUp } from "react-icons/rx";

const ToTop = () => {
  const toTopRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (window.pageYOffset < 816) {
      toTopRef.current.style.display = "none";
    } else toTopRef.current.style.display = "block";
  };
  return (
    <div
      className="bg-marcosFinos text-dark border-[1px] border-neutral-400 opacity-60 rounded-full fixed bottom-14 md:bottom-4 right-4 p-2 md:p-4 z-50 hidden"
      ref={toTopRef}
    >
      <Link className="hover:bg-transparent" href="/">
        <RxArrowUp size={23} />
      </Link>
    </div>
  );
};

export default ToTop;
