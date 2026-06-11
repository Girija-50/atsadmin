export const calculateATSScore = (
  jdKeywords,
  resumeKeywords
) => {
  // Remove duplicate keywords
  const uniqueJD = [
    ...new Set(jdKeywords),
  ];

  // Find matching keywords
  const matches =
    uniqueJD.filter((keyword) =>
      resumeKeywords.includes(keyword)
    );

  // Calculate percentage
  const score = Math.round(
    (matches.length /
      uniqueJD.length) *
      100
  );

  return score;
};