import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Logistics() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".logistics-block", {
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
            id="logistica"
            ref={sectionRef}
            className="w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-borda/60 relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Linha de Identificação */}
                <div className="logistics-block flex items-center justify-between border-b border-borda/60 pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-texto-suave">
                    <span className="text-primaria"> 02 - LOGÍSTICA INTELIGENTE </span>
                </div>

                {/* Banner Tipográfico / Arquitetura do Conceito */}
                <div className="logistics-block flex flex-col gap-4">
                    <h2 className="font-titulo text-texto text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]">
                        A IA na Logística da{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-texto via-texto-suave to-borda">
                            Cadeia Global
                        </span>
                    </h2>
                </div>

                {/* Grid Split de Leitura */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Painel Esquerdo: Especificação Técnica */}
                    <div className="logistics-block lg:col-span-5 border border-borda bg-superficie/30 p-6 sm:p-8 flex flex-col justify-between gap-8 relative">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primaria" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primaria" />

                        <div className="flex flex-col gap-3 font-mono">
                            <span className="text-[10px] text-primaria uppercase tracking-[0.25em]">
                                ARQUITETURA OPERACIONAL
                            </span>
                            <h3 className="font-titulo text-texto text-xl sm:text-2xl font-bold uppercase">
                                Supply Chain 4.0
                            </h3>
                            <p className="text-texto-suave text-xs sm:text-sm font-corpo leading-relaxed pt-2">
                                Da linha de produção fabril ao transporte final: sincronização total entre robôs de armazenagem, previsões climáticas e roteirização autônoma.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-borda/60 font-mono">
                            <div>
                                <span className="text-[10px] text-texto-suave block uppercase">FALHAS HUMANAS</span>
                                <span className="text-primaria text-lg font-bold">REDUZIDAS</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-texto-suave block uppercase">CRUZAMENTO</span>
                                <span className="text-texto text-lg font-bold">MULTIVARIÁVEL</span>
                            </div>
                        </div>
                    </div>

                    {/* Painel Direito: Parágrafos Originais do Usuário */}
                    <div className="logistics-block lg:col-span-7 flex flex-col gap-8">
                        <p className="font-corpo text-lg sm:text-xl text-texto font-light leading-relaxed">
                            Com o avanço e o amadurecimento da digitalização das indústrias, a inteligência artificial começou a ganhar um espaço imprescindível em diversos âmbitos da operação corporativa, estendendo-se desde a linha de produção fabril até a logística. Essa integração tecnológica consolida o que o mercado passou a chamar de <strong className="text-primaria font-semibold">"Supply Chain 4.0"</strong>, representando uma revolução onde a automação agiliza e integra todas as etapas de suprimentos.
                        </p>

                        <p className="font-corpo text-base sm:text-lg text-texto-suave leading-relaxed">
                            Na prática da armazenagem e expedição, essa integração permite que robôs e sistemas de gestão armazenem, organizem, separem e embalem os produtos de maneira autônoma, rápida e livre de falhas humanas associadas ao trabalho repetitivo. A digitalização de processos garante o cumprimento das promessas feitas ao cliente e um alto nível de satisfação, uma vez que algoritmos cruzam dados de transporte, rotas e clima para garantir a pontualidade.
                        </p>

                        <div className="pt-4 border-t border-borda/60 flex items-center justify-between font-mono text-xs text-texto-suave">
                            <span>CASES EM DESTAQUE NO SETOR:</span>
                            <span className="text-texto font-bold">NATURA (BR) - LENOVO (GL)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Logistics;
