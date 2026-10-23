import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Logistics from "./sections/Logistics";
import Cases from "./sections/Cases";
import China from "./sections/China";
import Conclusion from "./sections/Conclusion";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.4,
      effects: true,
    });
  });

  return (
    <div className="min-h-screen bg-fundo text-texto selection:bg-primaria selection:text-fundo">
      {/* Barra de Navegação Fixa */}
      <NavBar />

      {/* GSAP Smooth Scroll Containers */}
      <div id="smooth-wrapper" className="w-full overflow-hidden">
        <div id="smooth-content" className="w-full">
          <Hero />
          <Introduction />
          <Logistics />
          <Cases />
          <China />
          <Conclusion />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
