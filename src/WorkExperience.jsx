function WorkExperience({ experience }) {

    return (
        <>
            <h3>{experience.companyName}: {experience.fromDate} to {experience.toDate}</h3>
            <h4>{experience.positionTitle}</h4>
            <p>{experience.responsibilities}</p>
        </>
    )

}
export default WorkExperience;