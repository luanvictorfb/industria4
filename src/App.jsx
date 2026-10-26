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
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.4,
      smoothTouch: 0.1, // Garante rolagem tátil fluida sem travamento no Safari iOS / Android
      effects: true,
    });

    // Intercepta cliques de âncoras para rolagem com ScrollSmoother em todos os navegadores
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          smoother.scrollTo(targetElement, true, "top 80px");
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  });

  return (
    <div className="min-h-screen bg-fundo text-texto">
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
