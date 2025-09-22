import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Intro from "./components/SectionIntro/Intro";
import WhyAccess from "./components/SectionIntro/WhyAccess";
import HowAccess from "./components/SectionIntro/HowAccess";

import ContrastDemo from "./components/SectionVisualAccess/ContrastDemo";
import FormDemo from "./components/SectionVisualAccess/FormDemo";
import PreferencesToggle from "./components/SectionUserPref/PreferencesToggle";
import Progress from "./components/Progress/Progress";

function Layout({ children, nextPath, prevPath, currentStep, totalSteps = 6 }) {
  const navigate = useNavigate();

  return (
    <div>
      <Progress currentStep={currentStep} totalSteps={totalSteps} />

      {children}

      <div className="nav-buttons-container">
        {prevPath && (
          <button
            className="nav-button back-button"
            onClick={() => navigate(prevPath)}
          >
            ← Back
          </button>
        )}
        {nextPath && (
          <button
            className="nav-button next-button"
            onClick={() => navigate(nextPath)}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const totalSteps = 6;

  return (
    <>
      <NavBar />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <Layout nextPath="/why" currentStep={1} totalSteps={totalSteps}>
              <Intro />
            </Layout>
          }
        />

        <Route
          path="/why"
          element={
            <Layout
              prevPath="/"
              nextPath="/how"
              currentStep={2}
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
              currentStep={3}
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
              prevPath="/why"
              nextPath="/form"
              currentStep={4}
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
              currentStep={5}
              totalSteps={totalSteps}
            >
              <FormDemo />
            </Layout>
          }
        />
        <Route
          path="/prefs"
          element={
            <Layout prevPath="/form" currentStep={6} totalSteps={totalSteps}>
              <PreferencesToggle />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
