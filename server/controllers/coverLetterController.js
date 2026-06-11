import CoverLetter from "../models/CoverLetter.js";

export const createCoverLetter =
async (req, res) => {

try {

const {
name,
role,
company,
skills
} = req.body;

const coverLetter = `
Dear Hiring Manager,

My name is ${name}.

I am applying for the ${role}
position at ${company}.

My skills include:

${skills}

I believe my skills and passion
make me a strong candidate.

Thank you for your time.

Sincerely,
${name}
`;

res.status(200).json({
success:true,
coverLetter
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"Generation Failed"
});

}

};

export const saveCoverLetter =
async (req,res)=>{

try{

const cover =
await CoverLetter.create(
req.body
);

res.status(201).json({
success:true,
cover
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"Save Failed"
});

}

};
export const generateJobCoverLetter =
async (req, res) => {

try {

const {
name,
role,
company,
skills,
jobDescription,
template
} = req.body;

const coverLetter = `
${name}

Applying for:
${role}

Company:
${company}

Template:
${template}

Skills:
${skills}

Job Description:
${jobDescription}

I am excited to apply for this position.
My experience and skills align with the
requirements mentioned in the job description.

Thank you for your consideration.

Regards,
${name}
`;

res.status(200).json({
success:true,
coverLetter
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"Job Specific Generation Failed"
});

}

};


export const getHistory =
async(req,res)=>{

try{

const history =
await CoverLetter.find()
.sort({
createdAt:-1
});

res.status(200).json({
success:true,
history
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"History Failed"
});

}

};
