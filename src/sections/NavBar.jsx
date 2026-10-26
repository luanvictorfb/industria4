import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { num: "01", label: "Visão Geral", href: "#introducao" },
        { num: "02", label: "Supply Chain", href: "#logistica" },
        { num: "03", label: "Dossiês", href: "#cases" },
        { num: "04", label: "China 4.0", href: "#china" },
        { num: "05", label: "Síntese", href: "#conclusao" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none">
            <nav className="pointer-events-auto w-full max-w-7xl bg-fundo/90 backdrop-blur-xl border border-borda/80 px-5 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300">
                {/* Logo Editorial / Brutalista */}
                <a
                    href="#inicio"
                    className="flex items-center gap-3 group cursor-pointer focus:outline-none"
                    aria-label="Ir para o início"
                >
                    <div className="w-7 h-7 border border-primaria flex items-center justify-center bg-primaria/10 group-hover:bg-primaria group-hover:text-fundo transition-colors">
                        <span className="font-mono text-primaria group-hover:text-fundo font-bold text-xs">4.0</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-titulo text-texto font-bold text-xs sm:text-sm tracking-wider uppercase">
                            INDÚSTRIA <span className="text-primaria">4.0</span>
                        </span>
                    </div>
                </a>

                {/* Links Desktop - Estilo Editorial Awwwards com número de índice */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group flex items-center gap-1.5 py-1 focus:outline-none"
                        >
                            <span className="font-mono text-[10px] text-texto-suave/60 group-hover:text-primaria transition-colors">
                                {link.num}
                            </span>
                            <span className="font-corpo text-xs text-texto-suave group-hover:text-texto uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primaria group-hover:after:w-full after:transition-all after:duration-300">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

               

                {/* Botão Mobile Técnico */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-texto-suave hover:text-texto border border-borda hover:border-primaria transition-colors focus:outline-none"
                    aria-label="Abrir menu"
                >
                    <span className="font-mono text-xs uppercase tracking-wider">
                        {isMenuOpen ? "[ FECHAR ]" : "[ MENU ]"}
                    </span>
                </button>
            </nav>

            {/* Menu Dropdown Mobile com Grade Técnica */}
            {isMenuOpen && (
                <div className="pointer-events-auto absolute top-20 left-3 right-3 sm:left-5 sm:right-5 bg-fundo/98 backdrop-blur-2xl border border-borda p-6 flex flex-col gap-4 lg:hidden animate-in fade-in duration-200">
                    <div className="editorial-label pb-2 border-b border-borda flex justify-between">
                        <span>ÍNDICE DE CONTEÚDO</span>
                        <span>REV. 2026</span>
                    </div>
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-baseline justify-between py-2 border-b border-borda/40 text-texto-suave hover:text-texto hover:border-primaria transition-colors"
                        >
                            <span className="font-titulo text-sm uppercase tracking-wider">{link.label}</span>
                            <span className="font-mono text-xs text-primaria">{link.num} →</span>
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default NavBar;
