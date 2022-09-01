import React, { useState } from 'react';
import './styles/App.css';
import Banner from './components/Banner';
import CVInput from './components/CVInput';
import CVOutput from './components/CVOutput.js';

function App() {
  let [isPrintCV, setIsPrintCV] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    summary: ''
  });
  const [skillHighlights, setSkillHighlights] = useState(['', '', '']);
  const [experiences, setExperiences] = useState([
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' }
  ]);
  const [educations, setEducations] = useState([
    { education: '', year: '' },
    { education: '', year: '' },
    { education: '', year: '' }
  ]);

  const handleSubmit = (values) => {
    setPersonalDetails(values.personalDetails);
    setSkillHighlights(values.skillHighlights);
    setExperiences(values.experiences);
    setEducations(values.educations);

    setIsPrintCV(true);
  };

  const addAttribute = (attribute) => {
    switch (attribute) {
      case 'skillHighlights':
        setSkillHighlights([...skillHighlights, '']);
        break;
      case 'experiences':
        setExperiences([...experiences, { title: '', value: '' }]);
        break;
      case 'educations':
        setEducations([...educations, { educ: '', year: '' }]);
        break;
      default:
        console.warn('addAttribute wrong attribute:', attribute);
    }
  };

  const deleteAttribute = (attribute) => {
    switch (attribute) {
      case 'skillHighlights':
        setSkillHighlights(
          skillHighlights.filter((val, index) => index !== skillHighlights.length - 1)
        );
        break;
      case 'experiences':
        setExperiences(experiences.filter((val, index) => index !== experiences.length - 1));
        break;
      case 'educations':
        setEducations(educations.filter((val, index) => index !== educations.length - 1));
        break;
      default:
        console.warn('deleteAttribute wrong attribute:', attribute);
    }
  };

  return (
    <>
      <Banner />
      <main className="container d-flex">
        <CVInput
          personalDetails={personalDetails}
          skillHighlights={skillHighlights}
          experiences={experiences}
          educations={educations}
          onSubmit={handleSubmit}
          addAttribute={addAttribute}
          deleteAttribute={deleteAttribute}
        />
        {isPrintCV ? (
          <CVOutput
            personalDetails={personalDetails}
            skillHighlights={skillHighlights}
            experiences={experiences}
            educations={educations}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default App;
