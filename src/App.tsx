import React from "react";
import "./App.css";

enum View {
    HyperDB = "hyperdb",
    Http = "http",
    Clients = "clients",
}

const App: React.FC = () => {
    const [view, setView] = React.useState<View>(View.HyperDB);

    return (
        <div className="h-full flex flex-col items-center pt-12 text-white bg-gradient-to-t from-slate-800 to-slate-900">
            <h1 className="text-teal-400 text-5xl font-mono font-extrabold my-6">HyperDB</h1>
            <h3 className="text-teal-600 text-xl font-mono italic">An in-memory hyper-fast key-value store with an HTTP API written in Rust.</h3>

            <code className="bg-black py-2 px-4 my-8 rounded">docker run --rm -it -p 8765:8765 afaanbilal/hyperdb</code>

            <div className="border border-emerald-500 w-96 my-4" />

            <nav className="flex justify-center gap-4 my-4">
                <span onClick={() => setView(View.HyperDB)} className={`${view === View.HyperDB && "border-b"} pb-2 cursor-pointer`}>HyperDB</span>
                <span onClick={() => setView(View.Http)} className={`${view === View.Http && "border-b"} pb-2 cursor-pointer`}>HTTP API</span>
                <span onClick={() => setView(View.Clients)} className={`${view === View.Clients && "border-b"} pb-2 cursor-pointer`}>Clients</span>
            </nav>

            {
                view === View.HyperDB && <div>
                    <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">CLI</h3>
                    <code className="bg-black py-2 px-4 my-8 rounded">docker run --rm -it afaanbilal/hyperdb-cli -a http://host.docker.internal:8765</code>
                </div>
            }

            {
                view === View.Http && <div>
                    <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">HTTP API</h3>
                </div>
            }

            {
                view === View.Clients && <div>
                    <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">Clients</h3>
                    <div className="flex flex-wrap gap-4 max-w-5xl justify-center border border-green-300 rounded p-4">
                        <div className="p-4 rounded text-center">
                            <h4 className="text-2xl mb-4">JavaScript</h4>
                            <code className="bg-black py-2 px-4 my-8 rounded text-sm">npm i hyperdb-js</code>
                        </div>
                        <div className="p-4 rounded text-center">
                            <h4 className="text-2xl mb-4">Rust</h4>
                            <code className="bg-black py-2 px-4 my-8 rounded text-sm">cargo add hyperdb-rs</code>
                        </div>
                        <div className="p-4 rounded text-center">
                            <h4 className="text-2xl mb-4">Python</h4>
                            <code className="bg-black py-2 px-4 my-8 rounded text-sm">pip install hyperdb-py</code>
                        </div>
                        <div className="p-4 rounded text-center">
                            <h4 className="text-2xl mb-4">PHP</h4>
                            <code className="bg-black py-2 px-4 my-8 rounded text-sm">composer require afaanbilal/hyperdb-php</code>
                        </div>
                        <div className="p-4 rounded text-center">
                            <h4 className="text-2xl mb-4">Go</h4>
                            <code className="bg-black py-2 px-4 my-8 rounded text-sm">go get -u github.com/AfaanBilal/hyperdb-go</code>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default App;
