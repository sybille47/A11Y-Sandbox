import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
// import Banner from "./components/Banner/Banner";
import Intro from "./components/SectionIntro/Intro";
import WhyAccess from "./components/SectionIntro/WhyAccess";
import HowAccess from "./components/SectionIntro/HowAccess";
import ContrastDemo from "./components/SectionVisualAccess/ContrastDemo";
import FormDemo from "./components/SectionVisualAccess/FormDemo";
import PreferencesToggle from "./components/SectionUserPref/PreferencesToggle";
// import Progress from "./components/Progress/Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";;


import "./App.css";

function Layout({ children, nextPath, prevPath, currentStep, totalSteps }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Progress currentStep={currentStep} totalSteps={totalSteps} /> */}

      {children}

      <div className="nav-buttons-container">
        {prevPath && (
          <button
            className="nav-button back-button"
            onClick={() => navigate(prevPath)}
          >
            {/* ← Back */}

            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              size="2x"
              color={"#FA9819"}
              />

          </button>




        )}
        {nextPath && (
          <button
            className="nav-button next-button"
            onClick={() => navigate(nextPath)}
          >
            {/* Next → */}

            <FontAwesomeIcon
              icon={faCircleChevronRight}
              size="2x"
              color={"#FA9819"}
              />

          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const totalSteps = 7;

  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout prevPath="/" nextPath="/intro" currentStep={1} totalSteps={totalSteps}>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/intro"
          element={
            <Layout
              prevPath="/"
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
            <Layout prevPath="/form" currentStep={7} totalSteps={totalSteps}>
              <PreferencesToggle />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
