import { Routes, Route } from "react-router-dom";

// layouts
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";

// auth pages
import Splash from "../pages/auth/Splash";
import Welcome from "../pages/auth/Welcome";
import RoleSelect from "../pages/auth/RoleSelect";
import OTP from "../pages/auth/OTP";
import Onboarding from "../pages/auth/Onboarding";

// main pages
import Discover from "../pages/discover/Discover";
import ChatList from "../pages/connect/ChatList";
import Courses from "../pages/upskill/Courses";
import Profile from "../pages/profile/Profile";
import Alerts from "../pages/alerts/Alerts";
import NotFound from "../pages/not-found";
import CourseDetail from "../pages/upskill/CourseDetail";
import Player from "../pages/upskill/Player";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Flow */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/role" element={<RoleSelect />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>

      {/* App Flow */}
      <Route element={<AppLayout />}>
        <Route path="/discover" element={<Discover />} />
        <Route path="/connect" element={<ChatList />} />
        <Route path="/upskill" element={<Courses />} />
        <Route path="/upskill/:id" element={<CourseDetail />} />
        <Route path="/upskill/:id/player" element={<Player />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/alerts" element={<Alerts />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
