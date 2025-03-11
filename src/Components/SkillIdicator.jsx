import React from "react";

function SkillIdicator({ level, icon, name }) {
  return (
    <div className="flex justify-start items-center ml-8 px-4 py-3 mt-2 rounded-2xl dark:text-black gap-4 dark:bg-slate-200 bg-slate-950 text-white">
      <div>
        <img src={icon} alt={name} className="h-10 dark:bg-transparent bg-slate-200 rounded-xl p-1" />
        <p>{name}</p>
      </div>
      <div className="flex items-center">
        <div className="relative w-32 h-2 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-amber-500 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="pl-4 text-xl font-semibold">{level}%</span>
      </div>
    </div>
  );
}

export default SkillIdicator;
