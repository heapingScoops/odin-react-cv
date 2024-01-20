import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkExperienceFormList from './WorkExperienceFormList'
import WorkExperienceList from './WorkExperienceList'
import EducationFormList from './EducationFormList'
import EducationList from './EducationList'
import ContactInfoForm from './ContactInfoForm'
import ContactInfo from './ContactInfo'

function App() {
  // CONTACT INFO //
  const [contactInfo, setContactInfo] = useState({ fullName: '', email: '', phoneNumber: '' })
  function handleContactChange(fieldName, value) {
    setContactInfo(prevContactInfo => {
      //had to make sure this was an object
      const newContactInfo = { ...prevContactInfo };
      newContactInfo[fieldName] = value;
      return newContactInfo;
    })
  }

  // WORK EXPERIENCE //
  const [workExperiences, setWorkExperiences] = useState([{ companyName: '', positionTitle: '', responsibilities: '', fromDate: '', toDate: '' }]);

  const handleAddExperience = () => {
    setWorkExperiences([...workExperiences, { companyName: '', positionTitle: '', responsibilities: '', fromDate: '', toDate: '' }]);
  };

  function handleChangeWork(index, fieldName, value) {
    //this is totally resetting the state of workExperiences. Recent state is passed in as an argument to setState should we choose to use it.
    setWorkExperiences(prevExperiences => {
      //make a shallow copy of the previous state
      const newExperiences = [...prevExperiences];
      //drill into what changed and sat that and only that to 'value'; everything else is the same
      newExperiences[index][fieldName] = value;
      return newExperiences;
    });
  }

  //EDUCATION//
  const [educationExperiences, setEducationExperiences] = useState([{ school: '', degreeEarned: '', areaOfStudy: '', fromDate: '', toDate: '' }])

  function handleAddEducation() {
    setEducationExperiences([...educationExperiences, { school: '', degreeEarned: '', areaOfStudy: '', fromDate: '', toDate: '' }])
  }

  //index gets introduced in the list. FieldName and value are introduced in the form itself
  function handleEducationChange(index, fieldName, value) {
    setEducationExperiences(prevExperiences => {
      const newExperiences = [...prevExperiences];
      newExperiences[index][fieldName] = value;
      return newExperiences;
    })
  }

  return (
    <>
      <ContactInfoForm contact={contactInfo} handleChange={handleContactChange} />
      <WorkExperienceFormList workExperiences={workExperiences} addExperience={handleAddExperience} handleChange={handleChangeWork} />
      <EducationFormList experiences={educationExperiences} addExperience={handleAddEducation} handleChange={handleEducationChange} />

      <div id="cv-output">

        <ContactInfo contact={contactInfo} />
        <WorkExperienceList workExperiences={workExperiences} />
        <EducationList educationExperiences={educationExperiences} />

      </div>
    </>
  )
}

export default App
