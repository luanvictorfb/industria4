import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Logistics() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".logistics-anim", {
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
            id="logistica"
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-borda/40 relative"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
                {/* Header da Seção */}
                <div className="logistics-anim flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-primaria font-mono text-sm tracking-widest uppercase">02 // LOGÍSTICA INTELIGENTE</span>
                        <div className="h-[1px] flex-1 bg-borda" />
                    </div>
                    <h2 className="font-titulo text-texto text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        A IA na Logística da Indústria 4.0
                    </h2>
                </div>

                {/* Bloco Destaque Supply Chain 4.0 */}
                <div className="logistics-anim p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-superficie via-superficie/90 to-borda/30 border border-primaria/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <span className="text-primaria text-xs font-mono font-bold tracking-widest uppercase block mb-1">
                            CONCEITO CENTRAL
                        </span>
                        <h3 className="font-titulo text-texto text-xl sm:text-2xl font-bold">
                            Supply Chain 4.0
                        </h3>
                        <p className="text-texto-suave text-sm mt-1 max-w-xl">
                            A união de automação robótica, previsão de rotas e algoritmos preditivos em toda a cadeia de valor.
                        </p>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-primaria/10 text-primaria font-mono text-sm font-semibold border border-primaria/30 shrink-0">
                        100% CONECTADO
                    </div>
                </div>

                {/* Parágrafos de Conteúdo */}
                <div className="flex flex-col gap-8">
                    <p className="logistics-anim texto">
                        Com o avanço e o amadurecimento da digitalização das indústrias, a inteligência artificial começou a ganhar um espaço imprescindível em diversos âmbitos da operação corporativa, estendendo-se desde a linha de produção fabril até a logística. Essa integração tecnológica consolida o que o mercado passou a chamar de <strong className="text-texto font-semibold">"Supply Chain 4.0"</strong>, representando uma revolução onde a automação agiliza e integra todas as etapas de suprimentos.
                    </p>

                    <p className="logistics-anim texto">
                        Na prática da armazenagem e expedição, essa integração permite que robôs e sistemas de gestão armazenem, organizem, separem e embalem os produtos de maneira autônoma, rápida e livre de falhas humanas associadas ao trabalho repetitivo. A digitalização de processos garante o cumprimento das promessas feitas ao cliente e um alto nível de satisfação, uma vez que algoritmos cruzam dados de transporte, rotas e clima para garantir a pontualidade.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Logistics;

