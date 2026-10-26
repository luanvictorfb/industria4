import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Cases() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".case-panel", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
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
            id="cases"
            ref={sectionRef}
            className="w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-borda/60 relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Cabeçalho da Seção */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-borda/60 pb-6">
                    <div>
                        
                        <h2 className="font-titulo text-texto text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
                            Casos de Referência
                        </h2>
                    </div>
                    <p className="max-w-md font-mono text-xs text-texto-suave leading-relaxed">
                        Implementações que comprovam a viabilidade prática da convergência entre robótica autônoma e algoritmos preditivos.
                    </p>
                </div>

                {/* Grid Split Dossier Awwwards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Dossiê 01: Natura */}
                    <div className="case-panel relative border border-borda bg-superficie/20 p-8 sm:p-12 flex flex-col justify-between gap-8 group hover:border-natura/80 transition-colors duration-500">
                        {/* Cantoneiras de Precisão */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-natura" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-natura" />

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between font-mono text-xs">
                                <span className="text-natura tracking-widest">// DOSSIÊ 01</span>
                                <span className="text-texto-suave">ORIGEM: BRASIL [LATAM]</span>
                            </div>

                            <div>
                                <h3 className="font-titulo text-texto text-3xl sm:text-4xl font-extrabold uppercase group-hover:text-natura transition-colors">
                                    Natura
                                </h3>
                                <span className="font-mono text-[11px] text-texto-suave tracking-wider uppercase block mt-1">
                                    ARMAZENAGEM VERTICAL & PREVISÃO DE DEMANDA
                                </span>
                            </div>

                            <p className="font-corpo text-sm sm:text-base text-texto-suave leading-relaxed">
                                Referência brasileira na aplicação de armazéns verticais autônomos. A empresa alia robôs de separação inteligente a algoritmos preditivos que cruzam variáveis de clima, rotas de tráfego e sazonalidade para garantir a precisão nas entregas em escala continental.
                            </p>
                        </div>

                        {/* Metadados Técnicos do Caso */}
                        <div className="pt-6 border-t border-borda/60 grid grid-cols-2 gap-4 font-mono text-xs">
                            <div>
                                <span className="text-[10px] text-texto-suave block">FOCO PRIMÁRIO</span>
                                <span className="text-texto font-semibold">Picking Autônomo</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-texto-suave block">IMPACTO</span>
                                <span className="text-natura font-semibold">Pontualidade Contínua</span>
                            </div>
                        </div>
                    </div>

                    {/* Dossiê 02: Lenovo */}
                    <div className="case-panel relative border border-borda bg-superficie/20 p-8 sm:p-12 flex flex-col justify-between gap-8 group hover:border-lenovo/80 transition-colors duration-500">
                        {/* Cantoneiras de Precisão */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lenovo" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lenovo" />

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between font-mono text-xs">
                                <span className="text-lenovo tracking-widest">// DOSSIÊ 02</span>
                                <span className="text-texto-suave">ALCANCE: GLOBAL [MULTINATIONAL]</span>
                            </div>

                            <div>
                                <h3 className="font-titulo text-texto text-3xl sm:text-4xl font-extrabold uppercase group-hover:text-lenovo transition-colors">
                                    Lenovo
                                </h3>
                                <span className="font-mono text-[11px] text-texto-suave tracking-wider uppercase block mt-1">
                                    GÊMEOS DIGITAIS & SUPPLY CHAIN RESILIENTE
                                </span>
                            </div>

                            <p className="font-corpo text-sm sm:text-base text-texto-suave leading-relaxed">
                                Com fábricas inteligentes distribuídas globalmente, a multinacional orquestra sua cadeia de suprimentos integrando réplicas digitais (Digital Twins) e inteligência artificial para antecipar desabastecimentos e reprogramar fluxos logísticos marítimos e aéreos instantaneamente.
                            </p>
                        </div>

                        {/* Metadados Técnicos do Caso */}
                        <div className="pt-6 border-t border-borda/60 grid grid-cols-2 gap-4 font-mono text-xs">
                            <div>
                                <span className="text-[10px] text-texto-suave block">FOCO PRIMÁRIO</span>
                                <span className="text-texto font-semibold">Digital Twins</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-texto-suave block">IMPACTO</span>
                                <span className="text-lenovo font-semibold">Resiliência Operacional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cases;
