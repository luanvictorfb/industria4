import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Conclusion() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".conclusion-element", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.9,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="conclusao"
            ref={sectionRef}
            className="w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-borda/60 relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Linha de Identificação */}
                <div className="conclusion-element flex items-center justify-between border-b border-borda/60 pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-texto-suave">
                    <span className="text-primaria">[ 05 // CONSIDERAÇÕES FINAIS ]</span>
                    <span>SÍNTESE DA TESE & PERSPECTIVAS</span>
                </div>

                {/* Bloco de Conclusão / Manifesto Tipográfico */}
                <div className="conclusion-element flex flex-col gap-6 max-w-5xl">
                    <span className="font-mono text-xs text-primaria uppercase tracking-widest block">
                        // SÍNTESE ESTRUTURAL
                    </span>
                    <h2 className="font-titulo text-texto text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]">
                        A IA como o Cérebro das Operações
                    </h2>
                </div>

                {/* Parágrafos da Conclusão com Ritmo Editorial */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="conclusion-element lg:col-span-8 flex flex-col gap-8">
                        <p className="font-corpo text-xl sm:text-3xl text-texto font-light leading-relaxed">
                            Pode-se concluir que a <strong className="font-semibold text-primaria">Inteligência Artificial é a espinha dorsal</strong> que viabiliza as promessas da Indústria 4.0 na cadeia de suprimentos. Longe de ser apenas um recurso tecnológico auxiliar, ela funciona como o <span className="underline decoration-primaria decoration-2 underline-offset-8">cérebro das operações</span>.
                        </p>

                        <p className="font-corpo text-base sm:text-lg text-texto-suave leading-relaxed">
                            Conforme demonstrado pelos casos da <strong className="text-natura font-semibold">Natura</strong> e da <strong className="text-lenovo font-semibold">Lenovo</strong>, a união de robôs físicos autônomos com softwares analíticos e preditivos garante níveis superlativos de eficiência, resiliência climática e agilidade no atendimento ao consumidor. Por fim, o modelo de automação integral chinês evidencia que a implantação de armazéns inteligentes não é apenas uma tendência passageira, mas sim a base estrutural mandatória para a competitividade na economia global contemporânea.
                        </p>
                    </div>

                    {/* Coluna Lateral: Resumo de Pilares Críticos */}
                    <div className="conclusion-element lg:col-span-4 border-l border-borda/60 pl-6 lg:pl-10 flex flex-col gap-6 font-mono text-xs">
                        <div className="pb-4 border-b border-borda/40">
                            <span className="text-primaria block mb-1">01 / CAPACIDADE ANALÍTICA</span>
                            <span className="text-texto font-semibold text-sm">Decisão Preditiva</span>
                            <p className="font-corpo text-texto-suave text-xs mt-1">
                                Análise contínua de Big Data climática e viária sem intervenção manual.
                            </p>
                        </div>

                        <div className="pb-4 border-b border-borda/40">
                            <span className="text-primaria block mb-1">02 / AUTONOMIA FÍSICA</span>
                            <span className="text-texto font-semibold text-sm">Robótica de Precisão</span>
                            <p className="font-corpo text-texto-suave text-xs mt-1">
                                Separação, triagem tridimensional e transporte last-mile por drones.
                            </p>
                        </div>

                        <div>
                            <span className="text-primaria block mb-1">03 / EXIGÊNCIA DE MERCADO</span>
                            <span className="text-texto font-semibold text-sm">Pilar Estrutural</span>
                            <p className="font-corpo text-texto-suave text-xs mt-1">
                                Condição imperativa de competitividade para a economia global contemporânea.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conclusion;
