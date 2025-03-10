import React from "react";

function SkillIdicator({ level, icon, name }) {
  return (
    <div className="flex justify-start items-center ml-8 px-4 py-3 mt-2 rounded-2xl dark:text-black gap-4 dark:bg-slate-200 bg-slate-950 text-white">
      <div>
        <img src={icon} alt={name} className="h-10 dark:bg-transparent bg-slate-200 rounded-xl p-1" />
        <p>{name}</p>
      </div>
      <div className="">
        <input type="range" value={level} disabled name={name} id={name} />
        <span className="pl-4 text-xl font-semibold">{level}%</span>
      </div>
    </div>
  );
}

export default SkillIdicator;
