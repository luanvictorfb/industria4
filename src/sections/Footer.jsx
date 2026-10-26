function Footer() {
    return (
        <footer className="w-full bg-fundo py-16 px-4 sm:px-8 lg:px-12 font-mono text-xs">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-borda/60 pb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border border-primaria flex items-center justify-center bg-primaria/10">
                            <span className="text-primaria font-bold text-[10px]">4.0</span>
                        </div>
                        <span className="font-titulo text-texto font-bold text-sm tracking-widest uppercase">
                            INDÚSTRIA <span className="text-primaria">4.0</span>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-texto-suave/70 text-[11px]">
                    <div>
                        PESQUISA ACADÊMICA FEITA PELA TURMA DE SISTEMAS DE COMPUTAÇÃO E DE INFORMAÇÃO 2026/2 ANHANGUERA
                        -INTELIGÊNCIA ARTIFICIAL & SUPPLY CHAIN 4.0
                    </div>
                    <div>
                        Agnaldo Gabriel Drumond Vilela - Alexandre Henrique Diniz Pereira
                        <br />Breno Ribeiro Alves - Isaias Felipe Moreira Da Silva
                        <br />Jhonatan Jeferson Fernandes de Oliveira - João Victor Matos De Oliveira
                        <br />Luan Victor de Faria Brito - Michael Nicholas Do Nascimento
                        <br />Nathan Augusto Santos Oliveira
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
