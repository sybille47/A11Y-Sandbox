import SideMenu from './SideMenu';
import './SmallBanner.css';

export default function Banner() {
  return (
    <header className="small-banner">
      <h2>A11Y Sandbox</h2>
      <SideMenu />
    </header>
  );
}