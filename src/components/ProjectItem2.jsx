// eslint-disable-next-line no-unused-vars
import React from "react";

const ProjectItem2 = ({ title, imgUrl, stack, link }) => {
  return (
    <div className="border-2 border-gray-800 rounded-xl overflow-hidden hover:scale-105 ease-in duration-150 cursor-pointer">
      <a href={link}>
        <img
          src={imgUrl}
          alt="project"
          className="w-full h-36 md:h-48 object-cover"
        />
        <div className="-full p-4 cursor-pointer">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-800">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row item-center justify-start text-xs md:text-sm">
            {stack.map((item, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 font-semibold border-2 border-gray-800 rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem2;
