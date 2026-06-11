const Suggestions = ({
  suggestions,
}) => {
  return (
    <div>
      <h2>
        Improvements
      </h2>

      <ul>
        {suggestions?.map(
          (
            item,
            index
          ) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Suggestions;