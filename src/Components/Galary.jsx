import React, { useState } from "react";

function Galary({ data }) {
  let [display, setDisplay] = useState(data[0]);

  // Handling Click
  const handleClick = (imgId) => {
    setDisplay(imgId);
  };

  return (
    <div className="  ">
      <div className="grid gap-4 py-8">
        <div className="flex justify-center items-center h-full w-full">
          <img
            id="display"
            className="h-[300px] w-full max-w-full rounded-lg"
            src={display}
            alt=""
          />
        </div>
        <div className="flex gap-3 justify-between">
          {data.map((img) => (
            <div key={img}>
              <img
                className="h-8 sm:h-16 md:h-23 max-w-full rounded-lg image cursor-pointer"
                src={img}
                alt=""
                onClick={() => {
                  handleClick(img);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galary;
