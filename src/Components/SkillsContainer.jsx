import React from "react";
import {
  C,
  Backend,
  CPP,
  DSA,
  Frontend,
  JS,
  MongoDB,
  Mysql,
  PHP,
  Python,
  ReactJS,
} from "../../public/index.js";
import {
  SkillIdicator,
} from "../Components/index.js"

function SkillsContainer() {
  return (
    <div className="skills flex flex-wrap px-4 gap-2 mt-6">
      <SkillIdicator level="81" name="C " icon={C} />
      <SkillIdicator level="89" name="C++ " icon={CPP} />
      <SkillIdicator level="81" name="java Script" icon={JS} />
      <SkillIdicator level="70" name="PHP " icon={PHP} />
      <SkillIdicator level="75" name="Python " icon={Python} />
      <SkillIdicator
        level="61"
        name="Data Structures and Algorithms"
        icon={DSA}
      />
      <SkillIdicator level="72" name="MySQL" icon={Mysql} />
      <SkillIdicator level="61" name="MongoDB" icon={MongoDB} />
      <SkillIdicator level="75" name="React" icon={ReactJS} />
      <SkillIdicator level="73" name="Backend" icon={Backend} />
      <SkillIdicator level="90" name="Frontend" icon={Frontend} />
    </div>
  );
}

export default SkillsContainer;
