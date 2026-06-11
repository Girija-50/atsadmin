import jobSpecificCoverLetter
from "../services/jobSpecificCoverLetter.js";

export const generateJobCoverLetter =
async(req,res)=>{

try{

const {
name,
resumeText,
jobDescription
}
= req.body;

const result =
await jobSpecificCoverLetter(
name,
resumeText,
jobDescription
);

res.json({
success:true,
coverLetter:result
});

}
catch(error){

res.status(500).json({
success:false,
message:"Generation Failed"
});

}

};