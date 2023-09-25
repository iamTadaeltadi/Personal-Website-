import React from "react";
import { BallCanvas } from './canvas/index';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constant/index";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Pass the icon component as a JSX element */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
