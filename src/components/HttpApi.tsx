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
    return (
        <div className="">
            <h3 className="text-emerald-400 text-3xl border-b pb-4 mt-4 mb-10 border-green-100">HTTP API</h3>

            <div className='overflow-x-auto w-full'>
                <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">Method</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">Path</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Auth?</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600 bg-slate-800">
                        {apiRoutes.map(r =>
                            <tr>
                                <td className="px-6 py-4 font-mono">{r.method}</td>
                                <td className="px-6 py-4 font-mono">{r.path}</td>
                                <td className="px-6 py-4 text-center">{r.auth ? '✅' : '⬜'}</td>
                                <td className="px-6 py-4">{r.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HttpApi;
