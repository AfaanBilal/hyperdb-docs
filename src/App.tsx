/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

import React from "react";
import Clients from "./components/Clients";
import HttpApi from "./components/HttpApi";
import HyperDB from "./components/HyperDB";

enum View {
    HyperDB = "hyperdb",
    Http = "http",
    Clients = "clients",
}

const App: React.FC = () => {
    const [view, setView] = React.useState<View>(View.HyperDB);

    return (
        <div className="py-12 flex flex-col items-center pt-12 text-white">
            <h1 className="text-teal-400 text-5xl font-mono font-extrabold my-6">HyperDB</h1>
            <h3 className="text-teal-600 text-xl font-mono italic">An in-memory hyper-fast key-value store with an HTTP API written in Rust.</h3>
            <div className="text-teal-200 text-md uppercase font-mono mt-6"><a href="https://github.com/AfaanBilal/hyperdb" target="_blank" rel="noopener">Source code</a></div>

            <code className="bg-black py-2 px-4 my-8 rounded">docker run --rm -it -p 8765:8765 afaanbilal/hyperdb</code>

            <div className="border border-emerald-500 w-96 my-4" />

            <nav className="flex justify-center gap-4 my-4">
                <span onClick={() => setView(View.HyperDB)} className={`${view === View.HyperDB && "border-b"} pb-2 px-2 cursor-pointer`}>HyperDB</span>
                <span onClick={() => setView(View.Http)} className={`${view === View.Http && "border-b"} pb-2 px-2 cursor-pointer`}>HTTP API</span>
                <span onClick={() => setView(View.Clients)} className={`${view === View.Clients && "border-b"} pb-2 px-2 cursor-pointer`}>Clients</span>
            </nav>

            {view === View.HyperDB && <HyperDB />}
            {view === View.Http && <HttpApi />}
            {view === View.Clients && <Clients />}

            <div className="my-8 border-t border-slate-600 p-4">&copy; <a className="text-cyan-400" href="https://afaan.dev" target="_blank" rel="noopener">Afaan Bilal</a></div>
        </div>
    );
}

export default App;
