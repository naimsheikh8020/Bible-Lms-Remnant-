import HeroImg from './HeroImg.svg'
import loginImg from "./loginimg.svg"
import Logo from "./Logo.svg"
import Role_select from "./Role_select.svg"
import mailbox from "./mailbox.svg"
import phone from "./phone.svg"
import location from "./locatino.svg"
import Admin from "./Admin.svg"
import Student from "./Student.svg"
import Teacher from "./Teacher.svg"
import Grow_Spriritually_academially from "./Grow_Spiritually_academically.svg"
import LearnAttendLiveClasses from "./LearnAttendLiveClasses.svg"
import SignUpandCreateAccount from "./SignUpandCreateAccount.svg"
import Track_Progress from "./Track_Progress.svg"
import trackProgress_Netwrok from "./trackProgress_Network.svg"
import Boy from "./Boy.svg"
import Women from "./Women.png"
import Avatar1 from "./Avatar1.svg"
import Avatar2 from "./Avatar2.svg"
import Avatar3 from "./Avatar3.svg"
import Course from './Course.svg'
import Live from "./Live.svg"
import AI from "./AI.svg"
import Personalized from "./Personalized.svg"
import Progress from "./Progress.svg"
import Icon_Exprience from "./Icon_Exprience.svg"
import handShackImg from "./handshackImg.svg"
import kidsProgram from "./KidsProgram.svg"
import TeamsProgram from "./TeamsProgram.svg"
import YoungAdultsProgram from "./YoungAdultsProgram.svg"
import Img01 from "./Img01.svg"
import Mentorship from "./Mentorship.svg"
import Career from "./Career.svg"
import getCertificate from "./getCertificate.svg"
import PracticeTest from "./PracticeTest.svg"
import joinClass from "./JoinClass.svg"
import search from "./search.svg"


export const assets = {
  Img01,
  HeroImg,
  loginImg,
  Logo,
  Role_select,
  mailbox,
  phone,
  location,
  Admin,
  Student,
  Teacher,
  Grow_Spriritually_academially,
  LearnAttendLiveClasses,
  SignUpandCreateAccount,
  Track_Progress,
  trackProgress_Netwrok,
  Boy,
  Women,
  Avatar1,
  Avatar2,
  Avatar3,
  Course,
  Live,
  AI,
  Personalized,
  Progress,
  Icon_Exprience,
  handShackImg,
  kidsProgram,
  TeamsProgram,
  YoungAdultsProgram,
  Mentorship,
  Career,
  getCertificate,
  PracticeTest,
  joinClass,
  search
}


export const coreFeatures = [
  {
    id: 1,
    title: "Courses & Quizzes",
    description: "Age-appropriate courses with interactive assessments",
    img: assets.Course,
  },
  {
    id: 2,
    title: "Live Classes",
    description: "Real-time interaction with teachers and mentors",
    img: assets.Live,
  },
  {
    id: 3,
    title: "AI Spiritual Guide",
    description: "Personalized Bible verses and spiritual guidance",
    img: assets.AI,
  },
  {
    id: 4,
    title: "Progress Tracking",
    description: "Monitor academic and spiritual growth",
    img: assets.Progress,
  },
  {
    id: 5,
    title: "Admin ERP System",
    description: "Comprehensive management and analytics",
    img: assets.Admin,
  },
  {
    id: 6,
    title: "Personalized Learning",
    description: "Adaptive content based on age and progress",
    img: assets.Personalized,
  },
];

export const ageBasedLearningData = [
  {
    id: 1,
    title: "Kids",
    ageRange: "5–12",
    accentColor: "bg-orange-400",
    borderColor: "border-cyan-400",
    bgColor: "bg-orange-50",
    features: [
      "Interactive stories",
      "Fun quizzes",
      "Visual learning",
    ],
  },
  {
    id: 2,
    title: "Teens",
    ageRange: "13–18",
    accentColor: "bg-cyan-500",
    borderColor: "border-cyan-400",
    bgColor: "bg-orange-50",
    features: [
      "Discussion forums",
      "Project-based learning",
      "Peer collaboration",
    ],
  },
  {
    id: 3,
    title: "Young Adults",
    ageRange: "19–25",
    accentColor: "bg-purple-500",
    borderColor: "border-cyan-400",
    bgColor: "bg-orange-50",
    features: [
      "In-depth theology",
      "Leadership training",
      "Career guidance",
    ],
  },
];


export const trustStats = [
  {
    id: 1,
    value: "5,000+",
    label: "Active Students",
  },
  {
    id: 2,
    value: "200+",
    label: "Expert Teachers",
  },
  {
    id: 3,
    value: "95%",
    label: "Satisfaction Rate",
  },
];


export const programs = [
  {
    img: assets.kidsProgram,
    title: "Kids Program",
    ageRange: "Ages 6–10",
    description:
      "Creative exploration and foundational learning through fun, interactive activities,for future readiness.",
    skills: ["Creative Thinking", "Teamwork", "Basic Tech", "Problem Solving"],
  },
  {
    img: assets.TeamsProgram,
    title: "Teens Program",
    ageRange: "Ages 14–17",
    description:
      "Advanced technical skills, career exploration, and personal development for future readiness.",
    skills: [
      "Web Development",
      "AI & ML",
      "Entrepreneurship",
      "Public Speaking",
    ],
  },
  {
    img: assets.YoungAdultsProgram,
    title: "Young Adults Program",
    ageRange: "Ages 18–25",
    description:
      "Career-focused training and professional skill development to prepare for the modern workforce.",
    skills: [
      "Full-Stack Dev",
      "Data Science",
      "Career Planning",
      "Freelancing",
    ],
  },
];