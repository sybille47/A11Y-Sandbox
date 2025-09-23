import { useNavigate, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import SmallBanner from "../Banner/SmallBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import './Layout.css';

function Layout({ children, nextPath, prevPath, currentStep, totalSteps }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically decide which banner to show
  const showSmallBanner = location.pathname !== "/";

  return (
    <div>
      {showSmallBanner ? <SmallBanner /> : <Banner />}

      {children}

    <div className="bottom-banner">
      <div className="nav-buttons-container">
        {prevPath && (
          <button
            className="nav-button back-button"
            onClick={() => navigate(prevPath)}
          >
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" color={"#FA9819"} />
          </button>
        )}

        {nextPath && (
          <button
            className="nav-button next-button"
            onClick={() => navigate(nextPath)}
          >
            <FontAwesomeIcon icon={faCircleChevronRight} size="2x" color={"#FA9819"} />
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

export default Layout;
