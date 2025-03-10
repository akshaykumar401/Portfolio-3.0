import React, { useState } from "react";

function Galary({ data }) {
  let [display, setDisplay] = useState(data[0]);

  // Handling Click
  const handleClick = (imgId) => {
    setDisplay(imgId);
  };

  return (
    <div className=" w-full  h-auto ">
      <div className="grid gap-4 py-8">
        <div className="flex justify-center items-center h-full w-full">
          <img
            id="display"
            className="h-[300px] w-full max-w-full rounded-lg"
            src={display}
            alt=""
          />
        </div>
        <div className={`grid grid-cols-${data.length} gap-3`}>
          {data.map((img) => (
            <div key={img}>
              <img
                className="h-auto max-w-full rounded-lg image"
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
