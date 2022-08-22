import { useState } from "react";

import { MdToggleOn, MdToggleOff } from "react-icons/md";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-100 text-center">
      <div className="flex flex-row items-center font-[600] text-[20px] lg:text-[24px] space-x-3 px-[600px] py-[300px]">
      <p>Toggle Off</p>
      <div onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <MdToggleOn className="text-[40px] text-violet-800" />
        ) : (
          <MdToggleOff className="text-[40px]  text-violet-400" />
        )}
      </div>
      <p>Toggle On</p>
    </div>
    </div>
    
  );
};

export default Toggle;
