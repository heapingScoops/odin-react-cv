function Education({ experience }) {

    return (
        <>
            <h3>{experience.school}: {experience.fromDate} to {experience.toDate}</h3>
            <h4>{experience.degreeEarned} | {experience.areaOfStudy}</h4>
        </>
    )

}
export default Education;