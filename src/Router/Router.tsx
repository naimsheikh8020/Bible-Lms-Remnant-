import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "../Page/HomePage/Home";
import SkillDevelopmentSchool from "../Page/HomePage/SkillDevelopmentSchool";
import Reform from "../Page/HomePage/Reform";
import Ignite from "../Page/HomePage/Ignite";
import Event from "../Page/HomePage/Event";
import PartnerShip from "../Page/HomePage/PartnerShip";
import Donation from "../Page/HomePage/Donation";
import Course from "../Page/HomePage/Course";
import Contact from "../Page/HomePage/Contact";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="skills-development-school"
          element={<SkillDevelopmentSchool />}
        />
        <Route path="reform" element={<Reform />} />
        <Route path="ignite" element={<Ignite />} />
        <Route path="event" element={<Event />} />
        <Route path="partnership" element={<PartnerShip />} />
        <Route path="donation" element={<Donation />} />
        <Route path="course" element={<Course />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default Router;
