function SkillGapProgress({
  score,
}) {
  return (
    <div>
      <h3>
        Skill Match
      </h3>

      <progress
        value={score}
        max="100"
      />

      <p>{score}%</p>
    </div>
  );
}

export default SkillGapProgress;