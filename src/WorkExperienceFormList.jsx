import WorkExperienceForm from "./WorkExperienceForm"

function WorkExperienceFormList({ workExperiences , handleChange, addExperience }) {

    return (
        <div className="form-list">
            <h2>Work Experience</h2>                                           
            {workExperiences.map((experience, index) => (
                <WorkExperienceForm 
                    key={index} 
                    id={index + 1}
                    workExperience={experience} 
                    //here, we are basically adding fieldName and value to the function. Why
                    //basically, we're telling the child component: HEY! I'm giving you a function where you have to plug in
                    // fildname & value
                    //I will then pass it to my handle change, use your fieldName and value, and then just plug in my index
                    handleChange={(fieldName, value) => handleChange(index, fieldName, value)}
                    
                />
            ))}

            <button onClick={addExperience}>Add another work experience</button>
            
        </div>
    )

}
export default WorkExperienceFormList