import React from "react";

function Profile({imageSrc, name}) {
  return (
    <img
      className="lg:h-[420px] lg:w-[420px] sm:h-[350px] sm:w-[350px] h-[280px] w-[280px] bg-blue-500 shadow-[0px_0px_10px_#fff] rounded-4xl"
      style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
      src={imageSrc}
      alt={name}
    />
  );
}

export default Profile;
