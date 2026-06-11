import analyzeLinkedIn
from "../services/linkedinAnalyzer.js";

import generateHeadline
from "../services/headlineGenerator.js";

import generateAbout
from "../services/aboutGenerator.js";

// =============================
// LinkedIn Profile Analyzer
// =============================
export const profileAnalyzer =
async(req,res)=>{

try{

const {
headline,
about,
skills
}
= req.body;

const result =
await analyzeLinkedIn(
headline,
about,
skills
);

res.json({
success:true,
result
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"Analysis Failed"
});

}

};

// =============================
// LinkedIn Headline Generator
// =============================
export const headlineGenerator =
async(req,res)=>{

try{

const { role } = req.body;

const headline =
await generateHeadline(
role
);

res.json({
success:true,
headline
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"Headline Generation Failed"
});

}

};

// =============================
// LinkedIn About Generator
// =============================
export const aboutGenerator =
async(req,res)=>{

try{

const {
name,
role
}
= req.body;

if(!name || !role){

return res.status(400).json({
success:false,
message:
"Name and Role are required"
});

}

const about =
await generateAbout(
name,
role
);

res.status(200).json({
success:true,
about
});

}
catch(error){

console.log(error);

res.status(500).json({
success:false,
message:"About Generation Failed"
});

}

};
