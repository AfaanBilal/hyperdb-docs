
import React from 'react';

type View = "hyperdb" | "http" | "clients";

interface NavbarProps {
    currentView: View;
    setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
    return (
        <nav className="sticky top-4 z-50 mx-auto w-full max-w-2xl rounded-full border border-white/10 bg-slate-900/60 p-2 backdrop-blur-md shadow-2xl ring-1 ring-white/5">
            <div className="flex justify-center gap-1 sm:gap-4">
                <button
                    onClick={() => setView("hyperdb")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${currentView === "hyperdb"
                            ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    HyperDB
                </button>
                <button
                    onClick={() => setView("http")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${currentView === "http"
                            ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    HTTP API
                </button>
                <button
                    onClick={() => setView("clients")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${currentView === "clients"
                            ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    Clients
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
