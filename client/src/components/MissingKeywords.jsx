const MissingKeywords = ({
  keywords,
}) => {
  return (
    <div>
      <h2>
        Missing Keywords
      </h2>

      <ul>
        {keywords?.map(
          (
            keyword,
            index
          ) => (
            <li key={index}>
              {keyword}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MissingKeywords;