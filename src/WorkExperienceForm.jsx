function WorkExperienceForm({ workExperience, handleChange, id }) {
    //function that takes in a target and returns another function
    const handleWorkChange = (e) => {
        //handle change needs to know the field name and the current value of that box
        handleChange(e.target.name, e.target.value);
    };
    return (
        <>

            <form className="cv-form">
                <h3>Experience {id} </h3>
                <div className="input-unit">
                    <div className="input-label">Company Name</div>
                    <input className="input-box" type="text" name="companyName" value={workExperience.companyName} onChange={handleWorkChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Position Title</div>
                    <input className="input-box" type="text" name="positionTitle" value={workExperience.positionTitle} onChange={handleWorkChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Responsibilities</div>
                    <textarea className="input-box" name="responsibilities" value={workExperience.responsibilities} onChange={handleWorkChange} />
                </div>
                <div className="input-unit date-input">
                    <div>
                        <div className="input-label">From:</div>
                        <input type="date" name="fromDate" value={workExperience.fromDate} onChange={handleWorkChange} />
                    </div>
                    <div>
                        <div className="input-label">To:</div>
                        <input type="date" name="toDate" value={workExperience.toDate} onChange={handleWorkChange} />
                    </div>


                </div>
                
                <br></br>

            </form>

        </>
    )

}

export default WorkExperienceForm;