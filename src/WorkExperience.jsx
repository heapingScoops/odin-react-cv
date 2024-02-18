function WorkExperience({ experience }) {

    return (
        <>
            <h3>{experience.companyName} </h3>
            <h4>{experience.positionTitle} | {experience.fromDate} to {experience.toDate}</h4>
            <p>{experience.responsibilities}</p>
        </>
    )

}
export default WorkExperience;