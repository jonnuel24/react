import React from "react";
import { Icon } from "@iconify/react";

function Option({ style, className, onClick }) {
  return (
    <button onClick={onClick} className={`option-button ${className}`} style={style}>
      <Icon
        icon="iwwa:option-horizontal"
        color="#909090"
        width="24"
        height="24"
        rotate={1}
      />
    </button>
  );
}

export default Option;
