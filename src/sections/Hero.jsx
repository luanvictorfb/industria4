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

            tl.from("#hero-meta-top", {
                opacity: 0,
                y: -15,
                duration: 0.8,
                delay: 0.2,
            })
            .from(
                titleSplit.chars,
                {
                    opacity: 0,
                    y: 70,
                    stagger: 0.015,
                    duration: 0.9,
                },
                "-=0.4"
            )
            .from(
                "#hero-media-wrapper",
                {
                    opacity: 0,
                    scale: 0.97,
                    y: 40,
                    duration: 1.1,
                },
                "-=0.5"
            )
            .from(
                "#hero-meta-bottom",
                {
                    opacity: 0,
                    y: 15,
                    duration: 0.6,
                },
                "-=0.4"
            );

            return () => titleSplit.revert();
        },
        { scope: containerRef }
    );

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-4 sm:px-8 lg:px-12 border-b border-borda/60"
        >
            {/* Linhas Técnicas de Mira (Corners Awwwards) */}
            <div className="absolute top-24 left-6 text-white/20 font-mono text-xs select-none">+</div>
            <div className="absolute top-24 right-6 text-white/20 font-mono text-xs select-none">+</div>

            <div className="w-full max-w-7xl mx-auto flex flex-col">
                

                {/* Título Monumental Brutalista */}
                <div className="py-10 sm:py-16">
                    <h1
                        id="hero-title"
                        className="font-titulo text-texto font-black text-3xl sm:text-6xl md:text-7xl lg:text-[5.8rem] leading-[1.08] tracking-tight uppercase"
                    >
                        Inteligência Artificial na{" "}
                        <span className="text-primaria">
                            Indústria 4.0
                        </span>
                    </h1>
                </div>

                {/* Banner de Abertura com Frame Técnico de Engenharia */}
                <div
                    id="hero-media-wrapper"
                    className="relative w-full border border-borda bg-superficie/30 p-2 sm:p-3 my-4 group"
                >
                    {/* Cantoneiras de precisão técnica */}
                    <div className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 border-t-2 border-l-2 border-primaria pointer-events-none" />
                    <div className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 border-t-2 border-r-2 border-primaria pointer-events-none" />
                    <div className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 border-b-2 border-l-2 border-primaria pointer-events-none" />
                    <div className="absolute -bottom-[5px] -right-[5px] w-2.5 h-2.5 border-b-2 border-r-2 border-primaria pointer-events-none" />

                    <div className="relative overflow-hidden aspect-[16/8] sm:aspect-[21/9]">
                        <img
                            src={`${import.meta.env.BASE_URL}images/banner_abertura_saida_jpg.jpg`}
                            alt="Planta e Logística Inteligente na Indústria 4.0"
                            className="w-full h-full object-cover grayscale-[30%] contrast-[110%] group-hover:scale-[1.015] group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-fundo via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>

                    {/* Rodapé técnico da figura */}
                    <div className="flex items-center justify-between pt-2 px-1 font-mono text-[10px] uppercase tracking-widest text-texto-suave/80">
                        <span>[ FIGURA 01.0 // SISTEMA DE PRODUÇÃO INTEGRADA ]</span>
                        <span className="hidden sm:inline">HIGH-SPEED LOGISTICS AUTOMATION</span>
                    </div>
                </div>

                {/* Metadados Inferiores com Chamada de Ação */}
                
            </div>
        </section>
    );
}

export default Hero;
