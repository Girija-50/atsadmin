const generateCoverLetter =
async(
name,
role,
company,
skills
)=>{

return `
Dear Hiring Manager,

My name is ${name}.

I am applying for the
${role}
position at
${company}.

I have experience working with
modern technologies and building
real-world projects.

I would welcome the opportunity
to contribute to your team.

Sincerely,

${name}
`;

};

export default generateCoverLetter;