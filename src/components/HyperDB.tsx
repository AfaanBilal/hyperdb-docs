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
        <div className="max-w-4xl">
            <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-4 border-green-100">Environment variables</h3>
            <div className="overflow-x-auto w-full mb-8">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">Name</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">Default value</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600 bg-slate-800">
                        {envVars.map(v =>
                            <tr>
                                <td className="px-6 py-4 font-mono">{v.name}</td>
                                <td className="px-6 py-4 font-mono">{v.default}</td>
                                <td className="px-6 py-4">{v.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">CLI</h3>
            <code className="bg-black py-2 px-4 my-8 rounded">docker run --rm -it afaanbilal/hyperdb-cli -a http://host.docker.internal:8765</code>
        </div>
    );
};

export default HyperDB;
