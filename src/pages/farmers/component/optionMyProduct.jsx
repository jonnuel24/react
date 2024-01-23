import React from "react";
import { Icon } from "@iconify/react";

function Option({ style, className}) {
  return (
    <div className={className} style={style}>
      <button>
        <Icon
          icon="iwwa:option-horizontal"
          color="#909090"
          width="24"
          height="24"
          rotate={1}
        />
      </button>
    </div>
  );
}

export default Option;
