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
                {/* Metadados Técnicos no Topo */}
                <div
                    id="hero-meta-top"
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-borda/60 font-mono text-[11px] uppercase tracking-[0.22em] text-texto-suave"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primaria" />
                        <span>[ TESE 01 — AUTOMAÇÃO INDUSTRIAL ]</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>SUPPLY CHAIN 4.0</span>
                        <span className="text-primaria">REV. 2026 // BR</span>
                    </div>
                </div>

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
                <div
                    id="hero-meta-bottom"
                    className="pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 font-mono"
                >
                    <div className="max-w-md text-xs text-texto-suave leading-relaxed">
                        Estudo analítico sobre a convergência entre sensores IoT, redes neurais e automação robótica na transformação da cadeia produtiva contemporânea.
                    </div>

                    <a
                        href="#introducao"
                        className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-texto hover:text-primaria transition-colors"
                    >
                        <span>DESLOCAR PARA O DOSSIÊ</span>
                        <span className="w-8 h-8 border border-borda group-hover:border-primaria flex items-center justify-center transition-colors">
                            ↓
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
