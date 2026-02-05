/**
 * HyperDB Docs
 *
 * @link https://afaan.dev/hyperdb-docs
 * @author Afaan Bilal (https://afaan.dev)
 *
 */

type Route = {
    method: string;
    path: string;
    auth: boolean;
    description: string;
};

const apiRoutes: Array<Route> = [
    {
        method: "GET",
        path: "/",
        auth: false,
        description: "Version. Example: `[HyperDB v0.1.0 (https://afaan.dev)]`",
    },
    {
        method: "GET",
        path: "/ping",
        auth: false,
        description: "Ping (returns `PONG`).",
    },
    {
        method: "POST",
        path: "/auth",
        auth: false,
        description: "Returns the generated JWT on success, otherwise `INVALID_CREDENTIALS`.",
    },
    {
        method: "GET",
        path: "/has/[key]",
        auth: true,
        description: "Returns `YES` if `key` is present, otherwise `NO`.",
    },
    {
        method: "GET",
        path: "/data/[key]",
        auth: true,
        description: "Returns the value for the `key` if present, otherwise `` (empty string).",
    },
    {
        method: "POST",
        path: "/data/[key]",
        auth: true,
        description: "Sets the value for the `key` to the request body.",
    },
    {
        method: "DELETE",
        path: "/data/[key]",
        auth: true,
        description: "Deletes the `key` and any value associated with it. Returns `OK` on success.",
    },
    {
        method: "GET",
        path: "/data",
        auth: true,
        description: "Get all stored data. Returns the stored data as a JSON string.",
    },
    {
        method: "DELETE",
        path: "/data",
        auth: true,
        description: "Delete all stored data. Returns `OK` on success.",
    },
    {
        method: "GET",
        path: "/empty",
        auth: true,
        description: "Returns `YES` if the store is empty, otherwise `NO`.",
    },
    {
        method: "POST",
        path: "/save",
        auth: true,
        description: "Persist store to file. Returns `OK` on success.",
    },
    {
        method: "POST",
        path: "/reload",
        auth: true,
        description: "Reload store from file. Returns `OK` on success.",
    },
    {
        method: "DELETE",
        path: "/reset",
        auth: true,
        description: "Delete all stored data from memory and disk. Returns `OK` on success.",
    },
];

const HttpApi: React.FC = () => {
    const getMethodColor = (method: string) => {
        switch (method) {
            case "GET": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "POST": return "bg-green-500/10 text-green-400 border-green-500/20";
            case "DELETE": return "bg-red-500/10 text-red-400 border-red-500/20";
            default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
        }
    };

    return (
        <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-6">HTTP API</h3>

            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-900 text-slate-200 uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4">Path</th>
                                <th className="px-6 py-4 text-center">Auth</th>
                                <th className="px-6 py-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {apiRoutes.map((r, i) =>
                                <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-md text-xs font-bold border ${getMethodColor(r.method)}`}>
                                            {r.method}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-slate-300">{r.path}</td>
                                    <td className="px-6 py-4 text-center">
                                        {r.auth ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-500 border border-teal-500/20">
                                                Required
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/30 text-slate-500 border border-slate-700/50">
                                                Public
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 leading-relaxed">{r.description}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HttpApi;
