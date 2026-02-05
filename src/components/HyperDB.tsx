/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

type EnvVar = {
    name: string;
    default: string;
    description: string;
};

const envVars: Array<EnvVar> = [
    {
        name: "HYPERDB_HOST",
        default: "0.0.0.0",
        description: "HyperDB HTTP Server Bind Host.",
    },
    {
        name: "HYPERDB_PORT",
        default: "8765",
        description: "HyperDB HTTP Server Port.",
    },
    {
        name: "HYPERDB_AUTH",
        default: "[blank]",
        description: "Set to `1` to enable JWT authentication.",
    },
    {
        name: "HYPERDB_SECRET",
        default: "[blank]",
        description: "Set the JWT signing secret. Must be set if authentication is enabled.",
    },
    {
        name: "HYPERDB_USERNAME",
        default: "[blank]",
        description: "Set the username. Must be set if authentication is enabled.",
    },
    {
        name: "HYPERDB_PASSWORD",
        default: "[blank]",
        description: "Set the password. Must be set if authentication is enabled.",
    },
];

const HyperDB: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-6">Environment Variables</h3>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm mb-12">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-900 text-slate-200 uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Default</th>
                                <th className="px-6 py-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {envVars.map(v =>
                                <tr key={v.name} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-teal-400 font-medium">{v.name}</td>
                                    <td className="px-6 py-4 font-mono text-slate-300">{v.default}</td>
                                    <td className="px-6 py-4 leading-relaxed">{v.description}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-6">CLI</h3>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <code className="relative block bg-slate-900 text-slate-300 py-4 px-6 rounded-lg font-mono text-sm shadow-xl border border-slate-800">
                    docker run --rm -it afaanbilal/hyperdb-cli -a http://host.docker.internal:8765
                </code>
            </div>
        </div>
    );
};

export default HyperDB;
