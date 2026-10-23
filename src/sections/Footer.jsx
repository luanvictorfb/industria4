function Footer() {
    return (
        <footer className="w-full border-t border-borda/60 bg-superficie/40 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="flex flex-col gap-1">
                    <span className="font-titulo text-texto font-bold text-base tracking-wide">
                        INDÚSTRIA <span className="text-primaria">4.0</span>
                    </span>
                    <p className="text-texto-suave text-xs font-corpo">
                        Estudo sobre Inteligência Artificial, Automação & Supply Chain.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-texto-suave font-mono">
                    <a href="#inicio" className="hover:text-primaria transition-colors">Início</a>
                    <a href="#introducao" className="hover:text-primaria transition-colors">Introdução</a>
                    <a href="#logistica" className="hover:text-primaria transition-colors">Logística</a>
                    <a href="#cases" className="hover:text-primaria transition-colors">Cases</a>
                    <a href="#china" className="hover:text-primaria transition-colors">China</a>
                    <a href="#conclusao" className="hover:text-primaria transition-colors">Conclusão</a>
                </div>

                <div className="text-xs text-texto-suave/70 font-mono">
                    © {new Date().getFullYear()} • Feito com React & GSAP
                </div>
            </div>
        </footer>
    );
}

export default Footer;
