import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill background="lightcoral" name="PHP" emoji="🤪" />
      <Skill background="lightblue" name="Java" emoji="🤪" />
      <Skill background="lightgreen" name="HTML + CSS" emoji="🤪" />
      <Skill background="lightyellow" name="JavaScript" emoji="🤪" />
      <Skill background="violet" name="C++" emoji="🤪" />
      <Skill background="gray" name="Laravel" emoji="🤪" />
      <Skill background="orange" name="ASP.Net" emoji="🤪" />
    </div>
  );
}

export default SkillList;
