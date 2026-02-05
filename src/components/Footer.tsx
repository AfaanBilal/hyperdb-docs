
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 w-full border-t border-white/5 bg-slate-950/50 py-8 backdrop-blur text-center text-sm text-slate-500">
            <p>
                &copy; {new Date().getFullYear()} <a href="https://afaan.dev" target="_blank" rel="noopener" className="text-teal-400 hover:text-teal-300 transition-colors">Afaan Bilal</a>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
