import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Accordion({ question, active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
    if (setActive) {
      setActive(question);
    }
  }

  return (
    <div className="w-[640px] flex flex-col gap-2">
      <button className="flex justify-between w-full bg-[#D0DED9] p-[24px] rounded-[4px] border border-black-[0.5px] " onClick={handleToggle}>
        <div className="text-[24px] font-medium">{question}?</div>
        <Icon
          icon={isOpen ? "tdesign:minus" : "tdesign:add"}
          width="64"
          height="64"
          style={{ color: "black" }}
        />
      </button>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col w-full bg-white p-[24px] rounded-[4px] border border-black-[0.5px] text-left`}>
        <div className="">Thi djnjanolnf ajklnuowjlsugojlwfnbs urojgnvionwfionvwfoijlnvionf sdaivonwfins the answer</div>
      </div>
    </div>
  );
}

export default Accordion;