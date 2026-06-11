function SkillGapCard({
  score,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>
        Skill Gap Score
      </h2>

      <h1>{score}%</h1>
    </div>
  );
}

export default SkillGapCard;