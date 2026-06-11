const generateJobSpecificCoverLetter =
async (
  name,
  role,
  company,
  skills,
  jobDescription
) => {

return `
Dear Hiring Manager,

I am excited to apply for the
${role} position at ${company}.

My experience includes:
${skills}

Based on your requirements:

${jobDescription}

I believe my skills closely match
your expectations and I am eager
to contribute to your team.

Thank you for your consideration.

Sincerely,
${name}
`;

};

export default generateJobSpecificCoverLetter;