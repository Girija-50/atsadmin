import {
tailorResume
}
from "../services/aiTailorService.js";

export const tailorResumeController =
async (req, res) => {

try {

const {
resumeText,
jobDescription,
} = req.body;

const result =
await tailorResume(
resumeText,
jobDescription
);

res.status(200).json({
success: true,
result,
});

} catch (error) {

console.log(error);

res.status(500).json({
success: false,
message: "Tailoring Failed",
error: error.message,
});
}
};