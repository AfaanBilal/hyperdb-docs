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
        <div className="w-full max-w-5xl">
            <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">Clients</h3>
            <div className="mb-8 border rounded-lg shadow-sm border-gray-700">
                {clients.map(c =>
                    <div className="flex flex-col justify-center p-6 border-b rounded-t-lg bg-gray-800 border-gray-700">
                        <div className="mb-4 text-gray-400 flex justify-around">
                            <div className="flex flex-col justify-around items-start w-1/2">
                                <h3 className="text-2xl pl-1 font-semibold text-emerald-200">{c.name}</h3>
                                <code className="mt-2 text-sm font-light bg-black py-2 px-4 inline-block rounded-md">{c.install}</code>
                            </div>

                            <div className="text-left border-l-2 border-gray-600 pl-8 py-2 w-1/2">
                                <div className="mb-2 text-gray-300 text-lg">{c.lang}</div>
                                <div className="mb-2 text-xs">Source: <a className="text-cyan-600" href={c.source} target="_blank" rel="noopener">{c.source}</a></div>
                                <div className="mb-2 text-xs">Package: <a className="text-cyan-600" href={c.package} target="_blank" rel="noopener">{c.package}</a></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Clients;
