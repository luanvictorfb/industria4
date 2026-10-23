import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function Hero() {
    const containerRef = useRef();

    useGSAP(
        () => {
            const titleSplit = new SplitText("#hero-title", {
                type: "chars,words",
            });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from("#hero-badge", {
                opacity: 0,
                y: -20,
                duration: 0.8,
                delay: 0.2,
            })
            .from(
                titleSplit.chars,
                {
                    opacity: 0,
                    y: 60,
                    rotateX: -40,
                    stagger: 0.02,
                    duration: 0.8,
                },
                "-=0.4"
            )
            .from(
                "#hero-banner",
                {
                    opacity: 0,
                    scale: 0.96,
                    y: 30,
                    duration: 1,
                },
                "-=0.5"
            )
            .from(
                "#hero-scroll-indicator",
                {
                    opacity: 0,
                    y: -10,
                    duration: 0.6,
                },
                "-=0.3"
            );

            return () => titleSplit.revert();
        },
        { scope: containerRef }
    );

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Glow de fundo */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primaria/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Badge Tecnológico */}
                <div
                    id="hero-badge"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-superficie border border-borda text-xs sm:text-sm text-texto-suave mb-6 sm:mb-8 shadow-inner"
                >
                    <span className="w-2 h-2 rounded-full bg-primaria animate-ping" />
                    <span>Inovação, Automação & Decisão em Tempo Real</span>
                </div>

                {/* Título Principal com Gradiente */}
                <h1
                    id="hero-title"
                    className="font-titulo text-texto font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.15] max-w-5xl mb-8"
                >
                    Inteligência Artificial na{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaria via-cyan-300 to-primaria-escura">
                        Indústria 4.0
                    </span>
                </h1>

                {/* Banner de Abertura */}
                <div
                    id="hero-banner"
                    className="w-full max-w-5xl my-4 sm:my-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-borda/80 shadow-[0_20px_50px_rgba(8,14,26,0.8)] relative group"
                >
                    <img
                        src="/images/banner_abertura_saida_jpg.jpg"
                        alt="Banner de Abertura Indústria 4.0"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fundo/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Indicador de Scroll */}
                <div
                    id="hero-scroll-indicator"
                    className="flex flex-col items-center gap-2 mt-4 text-texto-suave text-xs font-mono uppercase tracking-widest"
                >
                    <span>Role para explorar</span>
                    <div className="w-5 h-9 rounded-full border-2 border-borda flex items-start justify-center p-1">
                        <div className="w-1.5 h-2 bg-primaria rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
