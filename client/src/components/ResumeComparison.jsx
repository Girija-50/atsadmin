const ResumeComparison = ({
  originalResume,
  tailoredResume,
  addedKeywords,
  removedWords,
  missingSkills,
}) => {
  return (
    <div>

      <h2>
        Resume Comparison
      </h2>

      <hr />

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >

        <div style={{ flex: 1 }}>
          <h3>
            Original Resume
          </h3>

          <textarea
            value={originalResume}
            readOnly
            rows="20"
            style={{
              width: "100%",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h3>
            AI Tailored Resume
          </h3>

          <textarea
            value={tailoredResume}
            readOnly
            rows="20"
            style={{
              width: "100%",
            }}
          />
        </div>

      </div>

      <hr />

      <h3>
        Added Keywords
      </h3>

      <ul>
        {addedKeywords?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>
        Removed Words
      </h3>

      <ul>
        {removedWords?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>
        Missing Skills
      </h3>

      <ul>
        {missingSkills?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

    </div>
  );
};

export default ResumeComparison;