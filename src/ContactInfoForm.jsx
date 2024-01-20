export default function ContactInfoForm({ contact, handleChange }) {
    function handleInputChange(e) {
        handleChange(e.target.name, e.target.value)
    }

    return (
        <div className="form-list">
            <form className="cv-form">
                <h2>Contact Information</h2>
                <div className="input-unit">
                    <div className="input-label">Full Name</div>
                    <input className="input-box" type="text" name="fullName" value={contact.fullName} onChange={handleInputChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Email</div>
                    <input className="input-box" type="text" name="email" value={contact.email} onChange={handleInputChange} />
                </div>
                <div className="input-unit">
                    <div className="input-label">Phone Number</div>
                    <input className="input-box" type="text" name="phoneNumber" value={contact.phoneNumber} onChange={handleInputChange} />
                </div>
            </form>
        </div>
    )
}