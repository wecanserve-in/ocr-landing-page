import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import DemoVideo from "./components/DemoVideo/DemoVideo";
import Benefits from "./components/Benefits/Benefits";
import Plans from "./components/Plans/Plans";
import CTABanner from "./components/CTABanner/CTABanner";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <DemoVideo />
        <Benefits />
        <Plans />
        <CTABanner />
      </main>

      <Footer />

      {/* Floating Google Play Button */}
      <a
        href="#download"
        className="floatingPlayBtn"
        aria-label="Get ScanMyCard on Google Play"
      >
        <svg
          className="floatingPlayIcon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3.5 2.8c-.3.3-.5.8-.5 1.4v15.6c0 .6.2 1.1.5 1.4L13.2 12 3.5 2.8Z" />
          <path d="m16.4 15.2-2.6-2.5L4.1 21c.3.1.7.1 1.1-.1l11.2-5.7Z" />
          <path d="m16.4 8.8-11.2-5.7c-.4-.2-.8-.2-1.1-.1l9.7 8.3 2.6-2.5Z" />
          <path d="m20 10.7-2.9-1.5-2.9 2.8 2.9 2.8 2.9-1.5c.8-.4.8-1.9 0-2.6Z" />
        </svg>

        <span className="floatingPlayText">
          <span className="floatingPlaySmall">
            GET IT ON
          </span>

          <span className="floatingPlayBig">
            Google Play
          </span>
        </span>
      </a>
    </>
  );
}

export default App;