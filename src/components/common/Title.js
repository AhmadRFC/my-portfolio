import React from "react";

const Title = ({title}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-7">
      <h1 className="flex flex-col text-4xl md:text-5xl text-lightText font-bold capitalize">
        {title}
      </h1>
    </div>
  );
};

export default Title;
