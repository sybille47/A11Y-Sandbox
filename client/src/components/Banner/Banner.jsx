import SideMenu from './SideMenu';
import './Banner.css'

export default function Banner() {
  return (
    <header className="banner">
      <h1>A11Y Sandbox</h1>
      <p className="tagline">An interactive playground for accessibility</p>
      <SideMenu />
      {/* <aside className="side-menu">
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#visual">Visual Accessibility</a></li>
          <li><a href="#preferences">User Preferences</a></li>
          {/* Easily scalable: just add more <li> items */}
        {/* </ul> */}
      {/* </aside> */} */}
    </header>
  );
}
