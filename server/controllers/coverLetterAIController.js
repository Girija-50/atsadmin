import generateCoverLetter
from "../services/coverLetterGenerator.js";

export const createCoverLetter =
async(req,res)=>{

try{

const {
name,
role,
company
}
= req.body;

const result =
await generateCoverLetter(
name,
role,
company
);

res.json({
success:true,
coverLetter:result
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