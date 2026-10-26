import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Introduction() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            gsap.from(".intro-block", {
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
            id="introducao"
            ref={sectionRef}
            className="w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-borda/60 relative"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Linha de Identificação de Seção */}
                <div className="intro-block flex items-center justify-between border-b border-borda/60 pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-texto-suave">
                    <span className="text-primaria"> 01 - VISÃO GERAL </span>
                </div>

                {/* Grid Editorial Assimétrico */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Coluna Esquerda: Título e Índice de Parâmetros */}
                    <div className="intro-block lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="font-titulo text-texto text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1]">
                                A Quarta Revolução Industrial
                            </h2>
                        </div>

                        {/* Parâmetros do Sistema (Substitui cards genéricos por especificações de blueprint) */}
                        <div className="border-t border-borda/60 divide-y divide-borda/40 font-mono text-xs">
                            <div className="py-3 flex items-center justify-between">
                                <span className="text-texto-suave">SISTEMAS CIBERFÍSICOS</span>
                                <span className="text-texto">SENSORES & IOT</span>
                            </div>
                            <div className="py-3 flex items-center justify-between">
                                <span className="text-texto-suave">ALGORITMOS DE CONTROLE</span>
                                <span className="text-texto">MACHINE LEARNING</span>
                            </div>
                            <div className="py-3 flex items-center justify-between">
                                <span className="text-texto-suave">CAPACIDADE DECISÓRIA</span>
                                <span className="text-primaria">TEMPO REAL</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita: Conteúdo Textual em Tipografia Editorial */}
                    <div className="intro-block lg:col-span-7 flex flex-col gap-8">
                        {/* Parágrafo de Abertura / Lead */}
                        <p className="font-corpo text-lg sm:text-2xl text-texto font-light leading-relaxed">
                            A <strong className="font-semibold text-primaria">Indústria 4.0</strong> trata-se da quarta revolução industrial, sendo caracterizada pela profunda digitalização das atividades fabris e de toda a cadeia de suprimentos. A partir dessa digitalização no setor industrial, adquiriu-se a capacidade de tomada de decisão em tempo real, além de uma maior produtividade e de um monitoramento contínuo da produção, transformando radicalmente a maneira como um produto é fabricado e distribuído.
                        </p>

                        {/* Detalhe técnico de citação */}
                        <div className="border-l-2 border-primaria pl-6 py-2">
                            <p className="font-corpo text-base sm:text-lg text-texto-suave leading-relaxed">
                                Essa digitalização ocorre por meio da implementação de sistemas e tecnologias avançadas, como robôs e sensores de <span className="text-texto font-medium">Internet das Coisas (IoT)</span>, que operam interligados e permitem a produção, organização e distribuição de produtos de modo cada vez mais eficiente.
                            </p>
                        </div>

                        {/* Segundo Parágrafo: IAs e Machine Learning */}
                        <p className="font-corpo text-base sm:text-lg text-texto-suave leading-relaxed">
                            Nesse cenário de hiperconectividade, as <strong className="text-texto font-semibold">IAs (Inteligências Artificiais)</strong> assumem um papel de protagonismo. Elas são formadas por algoritmos complexos que simulam o raciocínio humano para resolver tarefas e otimizar gargalos. Muitas dessas inteligências funcionam com base no aprendizado de máquina, também conhecido como <span className="text-texto font-medium">Machine Learning</span>, que permite ao sistema analisar grandes volumes de dados (<span className="text-texto font-medium">Big Data</span>) e aprender de forma contínua, sem a necessidade de ter sido programado manualmente para cada cenário. Com base nesse aprendizado, a máquina analisa as informações recebidas de diversas fontes e as utiliza para tomar decisões precisas, tornando a sua operação não apenas mais autônoma, mas também altamente preditiva.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
