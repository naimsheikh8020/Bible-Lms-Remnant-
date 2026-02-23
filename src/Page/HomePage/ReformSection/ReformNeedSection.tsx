import ReformNeedCard from "../../../Components/ReformNeedCard"
import { assets } from "../../../assets/assets"

const ReformNeedSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Reform is Needed</h2>
        <p className="text-gray-500 mt-2 text-base">Today's generation faces unprecedented spiritual challenges that demand intentional, compassionate intervention.</p>
      </div>
      <div className="grid  md:grid-cols-4 gap-8 mt-8">
        <ReformNeedCard
        icon={<img src={assets.YouthLosing}/>}
        title="Youth Losing Spiritual Direction"
        description="Many young people are growing up without a biblical foundation or clear sense of spiritual purpose."
        highlightText="72% feel spiritually disconnected"
      />
      <ReformNeedCard
        icon={<img src={assets.DigitalDistraction}/>}
        title="Digital Distraction & Identity Confusion"
        description="Constant digital noise creates identity crises and pulls youth away from meaningful spiritual growth."
        highlightText="4.5 hours daily on social media"
      />
      <ReformNeedCard
        icon={<img src={assets.LackOfStructured}/>}
        title="Lack of Structured Bible Learning"
        description="Limited access to age-appropriate, engaging biblical education leaves gaps in spiritual knowledge.."
        highlightText="Only 11% read Bible weekly"
      />
      <ReformNeedCard
        icon={<img src={assets.LimitedMentorShip}/>}
        title="Limited Mentorship Opportunities"
        description="Few young people have access to godly mentors who can guide them through spiritual and life challenges."
        highlightText="86% want a spiritual mentor"
      />
      </div>
      <div className="text-center mt-8">
        <p className="italic  ">"A generation without spiritual guidance is a generation lost. But with intentional discipleship, we can see transformation."</p>
        <p className="text-[#1B7694] mt-2 font-semibold">— The Remnant Foundation</p>
      </div>
    </div>
  )
}

export default ReformNeedSection
