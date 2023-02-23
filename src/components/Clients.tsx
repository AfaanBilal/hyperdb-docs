/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

const Clients: React.FC = () => {
    return (
        <div>
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
    );
};

export default Clients;
