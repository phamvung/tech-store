import React from "react";
import { Link } from "react-router-dom";

import policies from "../../util/policies";

function Guide() {
  return (
    <ul className="flex flex-auto gap-5 border-b py-2">
      {policies.INSTRUCTIONS.map((instruction) => (
        <li
          key={instruction.name}
          className="flex justify-center items-center gap-2"
        >
          <img src={instruction.icon} />
          <Link
            to={instruction.link}
            className=" visited:text-black hover:text-[#f00] active:text-[#f00]"
          >
            {instruction.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Guide;
