import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import RythmeSection from "./sections/RythmeSection.tsx";
import Faqs from "./sections/Faqs.tsx";
import Download from "./sections/Download.tsx";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <RythmeSection />
      <Faqs />
      <Download/>
      <Footer />
    </div>
  );
}

export default App;
