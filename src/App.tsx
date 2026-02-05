/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

import React, { useState } from "react";
import Clients from "./components/Clients";
import HttpApi from "./components/HttpApi";
import HyperDB from "./components/HyperDB";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

type View = "hyperdb" | "http" | "clients";

const App: React.FC = () => {
    const [view, setView] = useState<View>("hyperdb");

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-teal-500/30 selection:text-teal-200">
            {/* Background elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center">
                    <Hero />
                    <Navbar currentView={view} setView={setView} />

                    <main className="w-full max-w-5xl mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {view === "hyperdb" && <HyperDB />}
                        {view === "http" && <HttpApi />}
                        {view === "clients" && <Clients />}
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
