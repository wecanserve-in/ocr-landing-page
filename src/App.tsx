import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import DemoVideo from "./components/DemoVideo/DemoVideo";
import Benefits from "./components/Benefits/Benefits";
import Plans from "./components/Plans/Plans";
import WhyDownload from "./components/WhyDownload/WhyDownload";
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
        <WhyDownload />
        <CTABanner />
      </main>
      <Footer />

      <a
        href="#"
        className="floatingPlayBtn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 3.455l10.937 6.333-2.302 2.302-8.635-8.635z" />
        </svg>
        <div className="floatingPlayBtnText">
          <span className="floatingPlayBtnSmall">GET IT ON</span>
          <span className="floatingPlayBtnBig">Google Play</span>
        </div>
      </a>
    </>
  );
}

export default App;
