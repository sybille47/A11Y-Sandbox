import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Intro from "./components/SectionIntro/Intro";
// Add remaining SectionIntro files
import ContrastDemo from "./components/SectionVisualAccess/ContrastDemo";
import FormDemo from "./components/SectionVisualAccess/FormDemo";
import PreferencesToggle from "./components/SectionUserPref/PreferencesToggle";

function Layout({ children, nextPath, prevPath }) {
  const navigate = useNavigate();

  return (
    <div>
      {children}

      {/* Navigation buttons */}
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
  return (
    <Router>
      <NavBar />
      <Banner />
      <Routes>
        <Route
          path="/"
            element={
            <Layout nextPath="/contrast">
              <Intro />
              </Layout>
          }
        />
        <Route
          path="/contrast"
          element={
            <Layout prevPath="/" nextPath="/form">
              <ContrastDemo />
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout prevPath="/contrast" nextPath="/prefs">
              <FormDemo />
            </Layout>
          }
        />
        <Route
          path="/prefs"
          element={
            <Layout prevPath="/form">
              <PreferencesToggle />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
