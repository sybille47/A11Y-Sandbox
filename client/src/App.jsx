import { Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/SectionIntro/Intro";
import WhyAccess from "./components/SectionIntro/WhyAccess";
import HowAccess from "./components/SectionIntro/HowAccess";
import ContrastDemo from "./components/SectionVisualAccess/ContrastDemo";
import FormDemo from "./components/SectionVisualAccess/FormDemo";
import PreferencesToggle from "./components/SectionUserPref/PreferencesToggle";
import ToolRefs from "./components/ToolsRefs/ToolsRefs";

import Layout from "./components/Layout/Layout";

function AppContent() {
  const totalSteps = 8;
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              prevPath="/"
              nextPath="/intro"
              currentStep={1}
              totalSteps={totalSteps}
            >
              <Home />
            </Layout>
          }
        />
        <Route
          path="/intro"
          element={
            <Layout
              prevPath="/home"
              nextPath="/why"
              currentStep={2}
              totalSteps={totalSteps}
            >
              <Intro />
            </Layout>
          }
        />
        <Route
          path="/why"
          element={
            <Layout
              prevPath="/intro"
              nextPath="/how"
              currentStep={3}
              totalSteps={totalSteps}
            >
              <WhyAccess />
            </Layout>
          }
        />
        <Route
          path="/how"
          element={
            <Layout
              prevPath="/why"
              nextPath="/contrast"
              currentStep={4}
              totalSteps={totalSteps}
            >
              <HowAccess />
            </Layout>
          }
        />
        <Route
          path="/contrast"
          element={
            <Layout
              prevPath="/how"
              nextPath="/form"
              currentStep={5}
              totalSteps={totalSteps}
            >
              <ContrastDemo />
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout
              prevPath="/contrast"
              nextPath="/prefs"
              currentStep={6}
              totalSteps={totalSteps}
            >
              <FormDemo />
            </Layout>
          }
        />
        <Route
          path="/prefs"
          element={
            <Layout
              prevPath="/form"
              nextPath="/tools"
              currentStep={7}
              totalSteps={totalSteps}
            >
              <PreferencesToggle />
            </Layout>
          }
        />
        <Route
          path="/tools"
          element={
            <Layout prevPath="/prefs" currentStep={8} totalSteps={totalSteps}>
              <ToolRefs />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}