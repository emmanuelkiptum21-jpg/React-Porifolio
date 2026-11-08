
export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-col items-center justify-around bg-indigo-950 py-12 text-sm text-gray-800/70">

        {/* Navigation links */}
        <div className="flex items-center gap-8">

          <a
            href="#home"
            className="font-medium text-gray-500 transition-all hover:text-indigo-600"
          >
            Home
          </a>

          <a
            href="#projects"
            className="font-medium text-gray-500 transition-all hover:text-indigo-600"
          >
            Projects
          </a>

        </div>

        {/* GitHub icon */}
        <div className="mt-8 text-indigo-600">

          <a
            href="https://github.com/emmanuelkiptum21-jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub repository"
            className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-purple-700"
          >

            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.613-2.805 5.63-5.475 5.92.435.375.825 1.102.825 2.222v3.293c0 .32.195.694.8.576A12.003 12.003 0 0 0 12 0Z"/>
            </svg>

            <span className="font-medium">GitHub</span>

          </a>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>

      </footer>
    </>
  );
}
