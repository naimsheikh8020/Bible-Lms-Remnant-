import AgeGroupedProgramsSection from "./SkillDevelopmentSection/AgeGroupedProgramsSection"
import BecomeSponsorSection from "./SkillDevelopmentSection/BecomeSponsorSection"
import CertificatonSection from "./SkillDevelopmentSection/CertificatonSection"
import LearningWorksSection from "./SkillDevelopmentSection/LearningWorksSection"
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
      <BecomeSponsorSection/>
      <SkillDevelopmentSchoolSection/>
    </div>
  )
}

export default SkillDevelopmentSchool