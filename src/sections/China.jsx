import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function China() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".china-element", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.9,
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
            id="china"
            ref={sectionRef}
            className="w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-borda/60 relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Linha de Identificação */}
                <div className="china-element flex items-center justify-between border-b border-borda/60 pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-texto-suave">
                    <span className="text-primaria">[ 04 // ESCALABILIDADE GLOBAL ]</span>
                    <span>HUB LOGÍSTICO & LABORATÓRIO DO FUTURO</span>
                </div>

                {/* Grid Editorial com Métrica Brutalista Monumental */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Coluna Esquerda: Texto e Título */}
                    <div className="china-element lg:col-span-7 flex flex-col gap-8">
                        <div>
                            <span className="font-mono text-xs text-primaria uppercase tracking-widest block mb-2">
                                // FRONTEIRA OPERACIONAL
                            </span>
                            <h2 className="font-titulo text-texto text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05]">
                                A China como Referência em Logística 4.0
                            </h2>
                        </div>

                        <p className="font-corpo text-lg sm:text-xl text-texto font-light leading-relaxed">
                            Ao observar o panorama global da Indústria 4.0, a <strong className="text-primaria font-semibold">China desponta como a nação-referência</strong> na adoção e escalabilidade da logística inteligente. O país é pioneiro no desenvolvimento de <em>"armazéns tridimensionais automatizados"</em>. Esses centros operacionais utilizam o espaço de maneira altamente eficiente através de arranjos verticais imensos, onde a movimentação de mercadorias é gerenciada por softwares complexos que controlam empilhadeiras robóticas, esteiras de triagem de alta velocidade e elevadores de carga, minimizando a intervenção humana.
                        </p>

                        <p className="font-corpo text-base sm:text-lg text-texto-suave leading-relaxed">
                            O uso da tecnologia na China se estende de maneira inovadora também ao transporte final (<em>last mile</em>). A entrega de pacotes via drones, por exemplo, já é uma realidade comercial no país desde o ano de 2016. Testes com essa tecnologia em território chinês comprovaram uma redução drástica nos custos e no tempo de transporte. Graças ao fomento de redes de conectividade, como o 5G, e o forte investimento em integração de frotas autônomas, os portos e os centros de distribuição chineses operam como laboratórios do futuro, servindo de norte para corporações do mundo inteiro.
                        </p>

                        {/* Citação Técnica / Carimbo Bibliográfico */}
                        <div className="pt-4 border-t border-borda/60 flex items-center justify-between font-mono text-xs text-texto-suave">
                            <span>DOCUMENTAÇÃO ACADÊMICA:</span>
                            <span className="text-texto font-bold">WANG; ZHANG (2022)</span>
                        </div>
                    </div>

                    {/* Coluna Direita: Estatística de Escala Brutalista (Estilo Awwwards) */}
                    <div className="china-element lg:col-span-5 flex flex-col gap-6">
                        <div className="border border-borda bg-superficie/30 p-8 sm:p-10 flex flex-col justify-between gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primaria" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primaria" />

                            <div className="font-mono text-xs text-texto-suave uppercase tracking-widest">
                                [ IMPACTO COMPROVADO // LAST MILE ]
                            </div>

                            <div>
                                <div className="font-titulo text-primaria text-7xl sm:text-8xl lg:text-[6.5rem] font-black tracking-tighter leading-none">
                                    -80%
                                </div>
                                <span className="font-mono text-xs text-texto uppercase tracking-wider block mt-3 font-semibold">
                                    REDUÇÃO DE CUSTOS OPERACIONAIS
                                </span>
                                <p className="font-corpo text-xs text-texto-suave mt-2 leading-relaxed">
                                    Comprovado em testes de rotas comerciais via drones autônomos, com redução temporal de dezenas de minutos para apenas frações desse tempo.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-borda/60 grid grid-cols-2 gap-3 font-mono text-[11px]">
                                <div>
                                    <span className="text-texto-suave block">COMERCIAL</span>
                                    <span className="text-texto font-bold">Desde 2016</span>
                                </div>
                                <div>
                                    <span className="text-texto-suave block">INFRAESTRUTURA</span>
                                    <span className="text-primaria font-bold">5G & Frotas</span>
                                </div>
                            </div>
                        </div>

                        {/* Indicador de Blueprint */}
                        <div className="border border-borda/60 p-4 font-mono text-[11px] text-texto-suave flex items-center justify-between">
                            <span>SISTEMA DE ARMAZENAGEM 3D:</span>
                            <span className="text-texto">VERTICAL INTEGRADO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default China;
