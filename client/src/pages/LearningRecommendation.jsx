import { useState } from "react";
import axios from "axios";

function LearningRecommendation() {

const [goal,setGoal] =
useState("");

const [result,setResult] =
useState(null);

const getRecommendations =
async () => {

try {

const response =
await axios.post(
"http://localhost:5000/api/learning/recommend",
{
careerGoal: goal
}
);

setResult(
response.data.data
);

}
catch(error){

console.log(error);

alert("Error");

}

};

return (

<div>

<h1>
Learning Recommendation AI
</h1>

<input
type="text"
placeholder="Career Goal"
value={goal}
onChange={(e)=>
setGoal(e.target.value)
}
/>

<button
onClick={getRecommendations}
>
Get Recommendations
</button>

{result && (

<div>

<h2>
Recommended Skills
</h2>

<ul>
{result.skills.map(
(skill,index)=>(
<li key={index}>
{skill}
</li>
)
)}
</ul>

<h2>
Recommended Courses
</h2>

<ul>
{result.courses.map(
(course,index)=>(
<li key={index}>
{course}
</li>
)
)}
</ul>

<h2>
Recommended Projects
</h2>

<ul>
{result.projects.map(
(project,index)=>(
<li key={index}>
{project}
</li>
)
)}
</ul>

<h2>
Recommended Certifications
</h2>

<ul>
{result.certifications.map(
(cert,index)=>(
<li key={index}>
{cert}
</li>
)
)}
</ul>

</div>

)}

</div>

);

}

export default LearningRecommendation;