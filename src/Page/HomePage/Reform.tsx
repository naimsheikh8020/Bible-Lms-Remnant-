import InnovationSection from "./ReformSection/InnovationSection"
import OurApproachSection from "./ReformSection/OurApproachSection"
import ReformHeader from "./ReformSection/ReformHeader"
import ReformNeedSection from "./ReformSection/ReformNeedSection"
import ReformOurMission from "./ReformSection/ReformOurMission"
import ReformReview from "./ReformSection/ReformReview"


const Reform = () => {
  return (
    <div>
      <ReformHeader/>
      <ReformOurMission/>
      <ReformNeedSection/>
      <OurApproachSection />
      <InnovationSection/>
      <ReformReview/>
    </div>
  )
}

export default Reform