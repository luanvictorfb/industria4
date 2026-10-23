import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Início", href: "#inicio" },
        { label: "Introdução", href: "#introducao" },
        { label: "Logística 4.0", href: "#logistica" },
        { label: "Cases", href: "#cases" },
        { label: "China", href: "#china" },
        { label: "Conclusão", href: "#conclusao" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 pointer-events-none">
            <nav className="pointer-events-auto w-full max-w-7xl bg-superficie/85 backdrop-blur-md border border-borda rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
                {/* Logo / Identidade */}
                <a
                    href="#inicio"
                    className="flex items-center gap-2 group cursor-pointer focus:outline-none"
                    aria-label="Ir para o início"
                >
                    <div className="w-8 h-8 rounded-lg bg-primaria/10 border border-primaria/30 flex items-center justify-center group-hover:border-primaria transition-colors">
                        <span className="font-titulo text-primaria font-black text-sm">4.0</span>
                    </div>
                    <span className="font-titulo text-texto font-bold text-sm sm:text-base tracking-wide group-hover:text-primaria transition-colors">
                        INDÚSTRIA <span className="text-primaria">4.0</span>
                    </span>
                </a>

                {/* Links Desktop */}
                <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-texto-suave hover:text-primaria transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primaria hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Status Badge */}
                <div className="hidden md:flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primaria/10 text-primaria border border-primaria/25">
                        <span className="w-2 h-2 rounded-full bg-primaria animate-pulse" />
                        SUPPLY CHAIN 4.0
                    </span>
                </div>

                {/* Botão Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-xl text-texto-suave hover:text-texto hover:bg-borda/40 transition-colors focus:outline-none"
                    aria-label="Abrir menu de navegação"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Menu Dropdown Mobile */}
            {isMenuOpen && (
                <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-superficie/95 backdrop-blur-xl border border-borda rounded-2xl p-5 shadow-2xl flex flex-col gap-3 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-texto-suave hover:text-primaria py-2 px-3 rounded-lg hover:bg-borda/30 transition-all font-medium text-base"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-3 border-t border-borda flex items-center justify-between text-xs text-texto-suave font-mono">
                        <span>STATUS: ATIVO</span>
                        <span className="text-primaria">INDÚSTRIA 4.0</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
