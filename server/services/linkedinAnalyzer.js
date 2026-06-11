const analyzeLinkedIn = async (
  headline,
  about,
  skills
) => {

let score = 0;
let suggestions = [];

if(headline.length > 20)
score += 30;
else
suggestions.push(
"Improve LinkedIn Headline"
);

if(about.length > 100)
score += 30;
else
suggestions.push(
"Add detailed About section"
);

if(skills.length >= 5)
score += 40;
else
suggestions.push(
"Add more skills"
);

return {
profileScore: score,
suggestions
};

};

export default analyzeLinkedIn;