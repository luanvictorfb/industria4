import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function China() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".china-anim", {
                opacity: 0,
                y: 40,
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
            id="china"
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-borda/40 relative"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
                {/* Header da Seção */}
                <div className="china-anim flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-primaria font-mono text-sm tracking-widest uppercase">
                            04 // REFERÊNCIA GLOBAL
                        </span>
                        <div className="h-[1px] flex-1 bg-borda" />
                    </div>
                    <h2 className="font-titulo text-texto text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        A China na Logística 4.0
                    </h2>
                </div>

                {/* Parágrafo 1: Armazéns Tridimensionais Automatizados */}
                <p className="china-anim texto">
                    Ao observar o panorama global da Indústria 4.0, a <strong className="text-texto font-semibold">China desponta como a nação-referência</strong> na adoção e escalabilidade da logística inteligente. O país é pioneiro no desenvolvimento de <span className="text-primaria">"armazéns tridimensionais automatizados"</span>. Esses centros operacionais utilizam o espaço de maneira altamente eficiente através de arranjos verticais imensos, onde a movimentação de mercadorias é gerenciada por softwares complexos que controlam empilhadeiras robóticas, esteiras de triagem de alta velocidade e elevadores de carga, minimizando a intervenção humana.
                </p>

                {/* Cards de Métricas e Inovações (Last-Mile & Drones) */}
                <div className="china-anim grid grid-cols-1 sm:grid-cols-3 gap-6 my-2">
                    <div className="bg-superficie/70 border border-borda rounded-2xl p-6 flex flex-col gap-2 hover:border-primaria/50 transition-colors">
                        <span className="text-primaria font-mono text-xs font-bold uppercase tracking-wider">
                            DESDE 2016
                        </span>
                        <h4 className="font-titulo text-texto text-xl font-bold">Entrega via Drones</h4>
                        <p className="text-texto-suave text-sm leading-relaxed font-corpo">
                            Realidade comercial em território chinês para entregas expressas de última milha (last mile).
                        </p>
                    </div>

                    <div className="bg-superficie/70 border border-primaria/40 rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden group hover:border-primaria transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primaria/10 rounded-full blur-xl pointer-events-none" />
                        <span className="text-primaria font-mono text-xs font-bold uppercase tracking-wider">
                            EFICIÊNCIA COMPROVADA
                        </span>
                        <div className="font-titulo text-primaria text-4xl font-extrabold">-80%</div>
                        <p className="text-texto-suave text-sm leading-relaxed font-corpo">
                            Redução comprovada nos custos de modalidades de entrega e tempo reduzido para minutos.
                        </p>
                    </div>

                    <div className="bg-superficie/70 border border-borda rounded-2xl p-6 flex flex-col gap-2 hover:border-primaria/50 transition-colors">
                        <span className="text-primaria font-mono text-xs font-bold uppercase tracking-wider">
                            INFRAESTRUTURA
                        </span>
                        <h4 className="font-titulo text-texto text-xl font-bold">Redes 5G & Frotas</h4>
                        <p className="text-texto-suave text-sm leading-relaxed font-corpo">
                            Portos e centros de distribuição conectados operando como laboratórios vivos para o mundo.
                        </p>
                    </div>
                </div>

                {/* Parágrafo 2: Last-Mile, Drones e 5G */}
                <p className="china-anim texto">
                    O uso da tecnologia na China se estende de maneira inovadora também ao transporte final (<em>last mile</em>). A entrega de pacotes via drones, por exemplo, já é uma realidade comercial no país desde o ano de 2016. Testes com essa tecnologia em território chinês comprovaram uma <strong className="text-texto font-semibold">redução de 80% nos custos</strong> de algumas modalidades de entrega, além de despencar o tempo de transporte de dezenas de minutos para apenas uma fração desse tempo. Graças ao fomento de redes de conectividade, como o 5G, e o forte investimento em integração de frotas autônomas, os portos e os centros de distribuição chineses operam como laboratórios do futuro, servindo de norte para corporações do mundo inteiro.
                </p>

                {/* Citação Acadêmica */}
                <div className="china-anim flex items-center justify-end">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-superficie border border-borda text-texto-suave text-xs sm:text-sm font-mono">
                        <span className="text-primaria font-bold">Fonte:</span>
                        <span>(WANG; ZHANG, 2022)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default China;

