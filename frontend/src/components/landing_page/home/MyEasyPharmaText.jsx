import React, { useEffect, useState } from "react";

const MyEasyPharmaText = () => {
  const mainTitle = "MYEASY PHARMA";

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < mainTitle.length) {
        setDisplayText(mainTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } 
      else if (isDeleting && charIndex > 0) {
        setDisplayText(mainTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } 
      else if (!isDeleting && charIndex === mainTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <div
      className="
        absolute z-10
        top-2 left-3
        sm:top-3 sm:left-6
        md:top-[10px] md:left-[40px]
        max-w-[90vw]
      "
    >
      <div
        className="
        flex items-center uppercase font-black
        text-cyan-400 border-cyan-400
        drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]
        whitespace-nowrap overflow-hidden

        border-l-[3px] sm:border-l-[4px] md:border-l-[5px]
        pl-3 sm:pl-4 md:pl-5

        tracking-[1.5px] sm:tracking-[2.5px] md:tracking-[3px]

        text-[16px]
        sm:text-[20px]
        md:text-[24px]
        lg:text-[28px]

        min-h-[26px]
        sm:min-h-[32px]
        md:min-h-[36px]
        lg:min-h-[40px]
        "
      >
        {displayText}
        <span
          className="
            ml-1 bg-cyan-400 animate-pulse
            w-[2px] sm:w-[2.5px] md:w-[3px]
            h-4 sm:h-5 md:h-6
          "
        />
      </div>
    </div>
  );
};

export default MyEasyPharmaText;
