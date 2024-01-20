import EducationForm from "./EducationForm"

export default function EducationFormList({ experiences, addExperience, handleChange }) {

    return (
        <div className="form-list">
            <h2>Education</h2>
            {experiences.map((experience, index) => (
                <EducationForm
                    key={index}
                    experience={experience}
                    id={index + 1}
                    handleChange={(fieldName, value) => handleChange(index, fieldName, value)}
                />
            ))}
            <button onClick={addExperience}>Add Education</button>
        </div>
    )


}

