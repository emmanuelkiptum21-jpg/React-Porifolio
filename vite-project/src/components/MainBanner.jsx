
function MainBanner() {
    return (
        <section
            id="home"
            className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-800 px-6 py-16 text-white sm:px-12 lg:py-24"
        >

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

                {/* Left content */}
                <div>

                    <span className="rounded-full border border-purple-300/30 bg-purple-400/20 px-4 py-2 text-xs font-medium tracking-wider text-purple-200">
                        WELCOME TO MY PORTFOLIO
                    </span>

                    <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Turning Ideas Into
                        <span className="block text-purple-300">
                            Digital Experiences.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-indigo-100 sm:text-base">
                        Explore my creative journey through web development,
                        design and innovative digital projects.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="#projects"
                            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-purple-100"
                        >
                            Explore Projects →
                        </a>

                    </div>

                </div>

                {/* Right side project previews */}


            </div>

        </section>
    );
}

export default MainBanner;
