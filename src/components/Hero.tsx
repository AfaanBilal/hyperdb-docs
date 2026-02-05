
import React from "react";

const Hero: React.FC = () => {
    const copyCommand = () => {
        navigator.clipboard.writeText("docker run --rm -it -p 8765:8765 afaanbilal/hyperdb");
        // Could add toast here
    };

    return (
        <div className="flex flex-col items-center justify-center pt-24 pb-16 text-center px-4">
            <h1 className="mb-6 text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
                Hyper<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">DB</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                An in-memory <span className="text-teal-200 font-normal">hyper-fast</span> key-value store with an HTTP API written in Rust.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <div onClick={copyCommand} className="group relative flex cursor-pointer items-center gap-3 rounded-lg bg-slate-900 border border-slate-700 px-6 py-3 font-mono text-sm text-slate-300 transition-all hover:border-teal-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <span className="text-teal-500">$</span>
                    <span>docker run --rm -it -p 8765:8765 afaanbilal/hyperdb</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
                <a href="https://github.com/AfaanBilal/hyperdb" target="_blank" rel="noopener" className="flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:text-teal-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 4.41 1 5 4.41s1.5 4 5 4c.3 2.12-.22 4.22-1 6-.66.86-1.5 1.76-2 2 .5.7 .5 1.5 0 2v2" /></svg>
                    Source Code
                </a>
            </div>

            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0"></div>
        </div>
    );
};

export default Hero;
