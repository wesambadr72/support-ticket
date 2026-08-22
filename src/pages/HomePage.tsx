import Nav from '../components/Nav';
import HomeSection from '../components/landing/HomeSection';
import AboutSection from '../components/landing/AboutSection';
import ButtonsSection from '../components/landing/ButtonsSection';

export default function HomePage() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <HomeSection />
      <AboutSection />
      <ButtonsSection />
    </>
  );
}