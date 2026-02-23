import OurApproachSection from "./ReformSection/OurApproachSection"
import ReformHeader from "./ReformSection/ReformHeader"
import ReformNeedSection from "./ReformSection/ReformNeedSection"
import ReformOurMission from "./ReformSection/ReformOurMission"


const Reform = () => {
  return (
    <div>
      <ReformHeader/>
      <ReformOurMission/>
      <ReformNeedSection/>
      <OurApproachSection />
    </div>
  )
}

export default Reform