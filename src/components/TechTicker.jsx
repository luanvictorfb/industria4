function TechTicker() {
    const items = [
        "INDÚSTRIA 4.0",
        "SUPPLY CHAIN 4.0",
        "PREDICTIVE MACHINE LEARNING",
        "AUTONOMOUS ROBOTICS",
        "IOT SENSOR NODES",
        "VERTICAL WAREHOUSING",
        "LAST-MILE DRONES",
        "DIGITAL TWINS",
    ];

    return (
        <div className="w-full overflow-hidden border-y border-borda/60 bg-superficie/40 py-3.5 select-none relative">
            <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
                {[...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center mx-5 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-texto-suave/80">
                        <span className="text-primaria mr-4">✦</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechTicker;

