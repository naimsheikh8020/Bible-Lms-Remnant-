import AgeGroupedProgramsSection from "./SkillDevelopmentSection/AgeGroupedProgramsSection"
import CertificatonSection from "./SkillDevelopmentSection/CertificatonSection"
import LearningWorksSection from "./SkillDevelopmentSection/LearningWorksSection"
import ScholarShipSection from "./SkillDevelopmentSection/ScholarShipSection"
import SkillDevelopmentHeader from "./SkillDevelopmentSection/SkillDevelopmentHeader"
import SkillDevelopmentSchoolSection from "./SkillDevelopmentSection/SkillDevelopmentSchoolSection"
import WhyChooseUsSection from "./SkillDevelopmentSection/WhyChooseUsSection"

const SkillDevelopmentSchool = () => {
  return (
    <div>
      <SkillDevelopmentHeader/>
      <WhyChooseUsSection/>
      <AgeGroupedProgramsSection/>
      <LearningWorksSection/>
      <CertificatonSection/>
      <ScholarShipSection/>
      <SkillDevelopmentSchoolSection/>
    </div>
  )
}

export default SkillDevelopmentSchool