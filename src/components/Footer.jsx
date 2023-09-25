import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center mt-8 p-8">
      <h1 className="text-xl font-bold mb-2">FIND ME ON</h1>
      <p>
        Feel free to <span className="text-purple-500">connect </span>with me
      </p>
      <ul className="flex mt-4">
        <li className="mr-2">
          <a
            href="https://github.com/iamTadaeltadi"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 px-3"
          >
            <AiFillGithub className="text-2xl" />
          </a>
        </li>
        {/* <li className="mr-2">
          <a
            href="https://twitter.com/pour_qua"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700"
          >
            <AiOutlineTwitter className="text-2xl" />
          </a>
        </li> */}
        <li className="mr-2">
          <a
            href="https://www.linkedin.com/in/tadael-gebre-a50613255/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 p-3"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tadael_shewaregaa/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 p-3"
          >
            <AiFillInstagram className="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
