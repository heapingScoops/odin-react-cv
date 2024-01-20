import WorkExperience from "./WorkExperience";

function WorkExperienceList({ workExperiences }) {

    return (
        <>
            <hr />
            <h2>Work Experience</h2>
            {workExperiences.map((experience, index) => (
                <WorkExperience key={index} experience={experience} />
            ))}
            <hr />
        </>
    )
}
export default WorkExperienceList;