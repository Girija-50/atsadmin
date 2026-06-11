import {
generateProjectDescription
}
from "../services/projectGenerator.js";

export const generateProject =
async (req, res) => {

try {

const {
projectName,
techStack
} = req.body;

const result =
await generateProjectDescription(
projectName,
techStack
);

res.status(200).json({
success: true,
result
});

} catch (error) {

console.log(error);

res.status(500).json({
success: false,
message:
"Project Generation Failed"
});

}
};