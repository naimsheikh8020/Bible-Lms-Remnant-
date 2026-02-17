import { assets } from "../../../assets/assets"
import CoreFeaturesSectionCard from "../../../Components/CoreFeaturesSectionCard"

const CoreFeaturesSection = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <h1 className="text-3xl font-bold ">Core Features Section</h1>
        <p className="text-gray-600 mt-2 text-[20px]">Everything you need for comprehensive learning</p>
      </div>
      <div>
        <CoreFeaturesSectionCard img={assets.Admin} title="Courses & Quizzes" description="Age-appropriate courses with interactive assessments"/> 
      </div>
    </div>
  )
}

export default CoreFeaturesSection