import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Introduction() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".intro-fade", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.8,
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
            id="introducao"
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-borda/40 relative"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
                {/* Header da Seção */}
                <div className="intro-fade flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-primaria font-mono text-sm tracking-widest uppercase">01 // VISÃO GERAL</span>
                    </div>
                    <h2 className="font-titulo text-texto text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        A Quarta Revolução Industrial
                    </h2>
                </div>

                {/* Parágrafos de Conteúdo com Excelente Leitura */}
                <div className="flex flex-col gap-8">
                    <p className="intro-fade texto">
                        A <strong className="text-texto font-semibold">Indústria 4.0</strong> trata-se da quarta revolução industrial, sendo caracterizada pela profunda digitalização das atividades fabris e de toda a cadeia de suprimentos. A partir dessa digitalização no setor industrial, adquiriu-se a capacidade de tomada de decisão em tempo real, além de uma maior produtividade e de um monitoramento contínuo da produção, transformando radicalmente a maneira como um produto é fabricado e distribuído. Essa digitalização ocorre por meio da implementação de sistemas e tecnologias avançadas, como robôs e sensores de <span className="text-primaria">Internet das Coisas (IoT)</span>, que operam interligados e permitem a produção, organização e distribuição de produtos de modo cada vez mais eficiente.
                    </p>

                    <p className="intro-fade texto">
                        Nesse cenário de hiperconectividade, as <strong className="text-texto font-semibold">IAs (Inteligências Artificiais)</strong> assumem um papel de protagonismo. Elas são formadas por algoritmos complexos que simulam o raciocínio humano para resolver tarefas e otimizar gargalos. Muitas dessas inteligências funcionam com base no aprendizado de máquina, também conhecido como <span className="text-primaria">Machine Learning</span>, que permite ao sistema analisar grandes volumes de dados (<span className="text-primaria">Big Data</span>) e aprender de forma contínua, sem a necessidade de ter sido programado manualmente para cada cenário. Com base nesse aprendizado, a máquina analisa as informações recebidas de diversas fontes e as utiliza para tomar decisões precisas, tornando a sua operação não apenas mais autônoma, mas também altamente preditiva.
                    </p>
                </div>

                {/* Grid de Pilares Tecnológicos */}
                <div className="intro-fade grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    <div className="bg-superficie/60 border border-borda rounded-2xl p-6 flex flex-col gap-3 hover:border-primaria/50 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primaria/10 border border-primaria/20 flex items-center justify-center text-primaria font-mono font-bold">
                            01
                        </div>
                        <h3 className="font-titulo text-texto text-lg font-semibold">Sensores IoT</h3>
                        <p className="text-texto-suave text-sm leading-relaxed">
                            Interconexão de sensores em tempo real para monitoramento contínuo e coleta de dados industriais.
                        </p>
                    </div>

                    <div className="bg-superficie/60 border border-borda rounded-2xl p-6 flex flex-col gap-3 hover:border-primaria/50 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primaria/10 border border-primaria/20 flex items-center justify-center text-primaria font-mono font-bold">
                            02
                        </div>
                        <h3 className="font-titulo text-texto text-lg font-semibold">Machine Learning</h3>
                        <p className="text-texto-suave text-sm leading-relaxed">
                            Algoritmos que analisam Big Data e refinam a precisão operacional autonomamente.
                        </p>
                    </div>

                    <div className="bg-superficie/60 border border-borda rounded-2xl p-6 flex flex-col gap-3 hover:border-primaria/50 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primaria/10 border border-primaria/20 flex items-center justify-center text-primaria font-mono font-bold">
                            03
                        </div>
                        <h3 className="font-titulo text-texto text-lg font-semibold">Ação Preditiva</h3>
                        <p className="text-texto-suave text-sm leading-relaxed">
                            Antecipação de gargalos, manutenção preventiva e tomadas de decisão ágeis e sem atritos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;

