/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

const HyperDB: React.FC = () => {
    return (
        <div>
            <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">CLI</h3>
            <code className="bg-black py-2 px-4 my-8 rounded">docker run --rm -it afaanbilal/hyperdb-cli -a http://host.docker.internal:8765</code>
        </div>
    );
};

export default HyperDB;
