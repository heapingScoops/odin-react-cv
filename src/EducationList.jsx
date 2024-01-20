import Education from "./Education";

export default function EducationList( {educationExperiences} ){

    return(
        <>
            <h2>Education</h2>
            { educationExperiences.map( (experience, index) => (
                <Education key={index} experience={experience} />

            ))}
            
        
        </>
    )

}