import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Conclusion() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".conclusion-anim", {
                opacity: 0,
                y: 35,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="conclusao"
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-borda/40 relative"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
                {/* Header da Seção */}
                <div className="conclusion-anim flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-primaria font-mono text-sm tracking-widest uppercase">
                            05 // CONSIDERAÇÕES FINAIS
                        </span>
                        <div className="h-[1px] flex-1 bg-borda" />
                    </div>
                    <h2 className="font-titulo text-texto text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Conclusão
                    </h2>
                </div>

                {/* Card de Destaque Síntese */}
                <div className="conclusion-anim p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-superficie via-superficie/90 to-borda/20 border border-primaria/40 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primaria/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col gap-6 relative z-10">
                        <span className="text-primaria text-xs font-mono font-bold tracking-widest uppercase">
                            A ESPINHA DORSAL DA INDÚSTRIA 4.0
                        </span>

                        <p className="texto !w-full !max-w-none text-base sm:text-xl lg:text-2xl !text-texto leading-relaxed">
                            Pode-se concluir que a <strong className="text-primaria font-semibold">Inteligência Artificial é a espinha dorsal</strong> que viabiliza as promessas da Indústria 4.0 na cadeia de suprimentos. Longe de ser apenas um recurso tecnológico auxiliar, ela funciona como o <strong className="text-texto underline decoration-primaria decoration-2 underline-offset-4">cérebro das operações</strong>.
                        </p>

                        <p className="texto !w-full !max-w-none text-base sm:text-xl lg:text-2xl text-texto-suave leading-relaxed">
                            Conforme demonstrado pelos casos da <strong className="text-natura font-semibold">Natura</strong> e da <strong className="text-lenovo font-semibold">Lenovo</strong>, a união de robôs físicos autônomos com softwares analíticos e preditivos garante níveis superlativos de eficiência, resiliência climática e agilidade no atendimento ao consumidor. Por fim, o modelo de automação integral chinês evidencia que a implantação de armazéns inteligentes não é apenas uma tendência passageira, mas sim a base estrutural mandatória para a competitividade na economia global contemporânea.
                        </p>
                    </div>
                </div>

                {/* Resumo dos 3 Fundamentos */}
                <div className="conclusion-anim grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-center">
                    <div className="p-4 rounded-xl bg-superficie/50 border border-borda">
                        <span className="text-primaria font-mono text-xs block mb-1">PENSAMENTO</span>
                        <span className="font-titulo text-texto text-sm sm:text-base font-semibold">Cérebro Analítico</span>
                    </div>
                    <div className="p-4 rounded-xl bg-superficie/50 border border-borda">
                        <span className="text-primaria font-mono text-xs block mb-1">EXECUÇÃO</span>
                        <span className="font-titulo text-texto text-sm sm:text-base font-semibold">Robótica Autônoma</span>
                    </div>
                    <div className="p-4 rounded-xl bg-superficie/50 border border-borda">
                        <span className="text-primaria font-mono text-xs block mb-1">FUTURO</span>
                        <span className="font-titulo text-texto text-sm sm:text-base font-semibold">Competitividade Global</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conclusion;

