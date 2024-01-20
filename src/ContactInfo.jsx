export default function ContactInfo({ contact }) {

    return (
        <div className="contact-info-area">
            <div className="name-header">{contact.fullName}</div>
            <h5>{contact.email} | {contact.phoneNumber}</h5>
            
        </div>
    )

}