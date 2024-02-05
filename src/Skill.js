function Skill(props) {
  const skillColor = { backgroundColor: props.background };
  return (
    <div className="skill" style={skillColor}>
      <p>{props.name}</p>
      <span>{props.emoji}</span>
    </div>
  );
}

export default Skill;
