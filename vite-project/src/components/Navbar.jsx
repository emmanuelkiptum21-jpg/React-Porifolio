
import { useState } from "react";

const navItems = [
    { name: "Home", link: "#home" },

    { name: "Projects", link: "#projects" },

];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between rounded-full bg-indigo-950 px-6 py-4 text-white shadow-lg">

            {/* Logo */}
            <a href="#home" className="text-2xl font-bold">
                <span className="text-purple-400">&lt;/&gt;</span>
                {" "}MyPortfolio
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        className="rounded-full px-4 py-2 text-sm transition hover:bg-purple-600"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Get started button */}
            <a
                href="#projects"
                className="hidden rounded-full bg-purple-600 px-5 py-2 font-semibold transition hover:bg-purple-500 md:block"
            >
                Explore Projects →
            </a>

            {/* Mobile menu button */}
            <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 md:hidden"
            >
                <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            {/* Mobile navigation */}
            {menuOpen && (
                <div className="absolute left-0 top-full z-50 mt-3 flex w-full flex-col gap-2 rounded-xl bg-indigo-950 p-5 shadow-lg md:hidden">

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 transition hover:bg-purple-600"
                        >
                            {item.name}
                        </a>
                    ))}

                </div>
            )}

        </nav>
    );
};

export default Navbar;
