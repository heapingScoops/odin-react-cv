export default function EducationForm({ id, experience, handleChange}){
    function handleInputChange(e){
        handleChange(e.target.name, e.target.value)
    }

    return(
        <>
            <form className="cv-form">
                <h3>Education {id} </h3>
                <div className="input-unit">
                    <div className="input-label">School Name</div>
                    <input className="input-box" type="text" name="school" value={experience.school} onChange={handleInputChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Degree Earned</div>
                    <input className="input-box" type="text" name="degreeEarned" value={experience.degreeEarned} onChange={handleInputChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Area of Study</div>
                    <input type="text" className="input-box" name="areaOfStudy" value={experience.areaOfStudy} onChange={handleInputChange} />
                </div>
                <div className="input-unit date-input">
                    <div>
                        <div className="input-label">From:</div>
                        <input type="date" name="fromDate" value={experience.fromDate} onChange={handleInputChange} />
                    </div>
                    <div>
                        <div className="input-label">To:</div>
                        <input type="date" name="toDate" value={experience.toDate} onChange={handleInputChange} />
                    </div>


                </div>
               
               

            </form>
        </>
    )



}