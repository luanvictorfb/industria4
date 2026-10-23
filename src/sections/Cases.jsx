import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Cases() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".case-card", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.9,
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
            className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-borda/40 relative"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
                {/* Header da Seção */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-primaria font-mono text-sm tracking-widest uppercase">03 // ESTUDOS DE CASO</span>
                        <div className="h-[1px] flex-1 bg-borda" />
                    </div>
                    <h2 className="font-titulo text-texto text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Excelência na Prática
                    </h2>
                    <p className="text-texto-suave text-base sm:text-lg max-w-2xl mt-2 font-corpo">
                        Duas empresas de referência global que transformaram sua logística e armazenagem com inteligência artificial e automação avançada.
                    </p>
                </div>

                {/* Grid dos Cases */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Case 1: Natura */}
                    <div className="case-card group relative bg-superficie/70 border border-borda hover:border-natura/60 rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]">
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-natura/10 text-natura border border-natura/30">
                                    <span className="w-2 h-2 rounded-full bg-natura" />
                                    Case Brasileiro
                                </span>
                                <span className="text-texto-suave/60 font-mono text-xs">LOGÍSTICA PREVENTIVA</span>
                            </div>

                            <h3 className="font-titulo text-texto text-2xl sm:text-3xl font-bold mb-4 group-hover:text-natura transition-colors">
                                Natura
                            </h3>

                            <p className="text-texto-suave text-sm sm:text-base leading-relaxed font-corpo mb-6">
                                Pioneira no Brasil no uso de armazéns verticais autônomos e algoritmos de previsão de demanda. A Natura combina robôs de separação com sistemas preditivos que cruzam clima, sazonalidade e rotas rodoviárias para assegurar entregas no prazo em escala continental.
                            </p>

                            <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-borda">
                                <div className="p-3 rounded-xl bg-borda/20">
                                    <div className="font-titulo text-natura text-xl sm:text-2xl font-bold">100%</div>
                                    <div className="text-texto-suave text-xs mt-0.5">Rastreamento Inteligente</div>
                                </div>
                                <div className="p-3 rounded-xl bg-borda/20">
                                    <div className="font-titulo text-natura text-xl sm:text-2xl font-bold">Autônomo</div>
                                    <div className="text-texto-suave text-xs mt-0.5">Picking & Armazenagem</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between text-xs font-mono text-natura">
                            <span>AUTOMAÇÃO VERTICAL</span>
                            <span>→</span>
                        </div>
                    </div>

                    {/* Case 2: Lenovo */}
                    <div className="case-card group relative bg-superficie/70 border border-borda hover:border-lenovo/60 rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(239,68,68,0.12)]">
                        <div>
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-lenovo/10 text-lenovo border border-lenovo/30">
                                    <span className="w-2 h-2 rounded-full bg-lenovo" />
                                    Multinacional
                                </span>
                                <span className="text-texto-suave/60 font-mono text-xs">SUPPLY CHAIN GLOBAL</span>
                            </div>

                            <h3 className="font-titulo text-texto text-2xl sm:text-3xl font-bold mb-4 group-hover:text-lenovo transition-colors">
                                Lenovo
                            </h3>

                            <p className="text-texto-suave text-sm sm:text-base leading-relaxed font-corpo mb-6">
                                Com fábricas inteligentes globais, a Lenovo utiliza gêmeos digitais (Digital Twins) e IA para orquestrar sua cadeia de suprimentos de ponta a ponta. A tecnologia mitiga riscos de escassez de componentes e otimiza rotas de transporte aéreo e marítimo em tempo real.
                            </p>

                            <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-borda">
                                <div className="p-3 rounded-xl bg-borda/20">
                                    <div className="font-titulo text-lenovo text-xl sm:text-2xl font-bold">IA & Twins</div>
                                    <div className="text-texto-suave text-xs mt-0.5">Simulação de Fábrica</div>
                                </div>
                                <div className="p-3 rounded-xl bg-borda/20">
                                    <div className="font-titulo text-lenovo text-xl sm:text-2xl font-bold">Global</div>
                                    <div className="text-texto-suave text-xs mt-0.5">Otimização de Rotas</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between text-xs font-mono text-lenovo">
                            <span>DECISÃO PREDITIVA</span>
                            <span>→</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cases;

