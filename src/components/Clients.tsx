/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

type Client = {
    lang: string;
    name: string;
    source: string;
    install: string;
    package: string;
};

const clients: Array<Client> = [
    {
        lang: "Javascript",
        name: "hyperdb-js",
        source: "https://github.com/AfaanBilal/hyperdb-js",
        install: "npm i hyperdb-js",
        package: "https://www.npmjs.com/package/hyperdb-js",
    },
    {
        lang: "Rust",
        name: "hyperdb-rs",
        source: "https://github.com/AfaanBilal/hyperdb-rs",
        install: "cargo add hyperdb-rs",
        package: "https://crates.io/crates/hyperdb-rs",
    },
    {
        lang: "PHP",
        name: "hyperdb-php",
        source: "https://github.com/AfaanBilal/hyperdb-php",
        install: "composer require afaanbilal/hyperdb-php",
        package: "https://packagist.org/packages/afaanbilal/hyperdb-php",
    },
    {
        lang: "Python",
        name: "hyperdb-py",
        source: "https://github.com/AfaanBilal/hyperdb-py",
        install: "pip install hyperdb-py",
        package: "https://pypi.org/project/hyperdb-py",
    },
    {
        lang: "Go",
        name: "hyperdb-go",
        source: "https://github.com/AfaanBilal/hyperdb-go",
        install: "go get -u github.com/AfaanBilal/hyperdb-go",
        package: "https://pkg.go.dev/github.com/AfaanBilal/hyperdb-go",
    },
];

const Clients: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-8">Clients</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clients.map(c =>
                    <div key={c.name} className="group relative flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-teal-500/30 hover:bg-slate-900 hover:shadow-2xl hover:shadow-teal-500/5">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{c.name}</h3>
                                <span className="text-sm font-medium text-slate-500">{c.lang}</span>
                            </div>
                            <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-teal-500/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                            </div>
                        </div>

                        <div className="mb-6">
                            <code className="block bg-black/50 rounded px-3 py-2 text-xs font-mono text-slate-300 border border-slate-800/50">
                                {c.install}
                            </code>
                        </div>

                        <div className="mt-auto flex gap-4 text-xs font-medium">
                            <a href={c.source} target="_blank" rel="noopener" className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 4.41 1 5 4.41s1.5 4 5 4c.3 2.12-.22 4.22-1 6-.66.86-1.5 1.76-2 2 .5.7 .5 1.5 0 2v2" /></svg>
                                Source
                            </a>
                            <a href={c.package} target="_blank" rel="noopener" className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /><line x1="3.27" y1="6.96" x2="3.27" y2="16.96" /><line x1="20.73" y1="6.96" x2="20.73" y2="16.96" /></svg>
                                Package
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Clients;
