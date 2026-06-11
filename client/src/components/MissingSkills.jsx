function MissingSkills({
  skills,
}) {
  return (
    <div>
      <h2>
        Missing Skills
      </h2>

      <ul>
        {skills?.map(
          (skill, index) => (
            <li key={index}>
              {skill}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MissingSkills;