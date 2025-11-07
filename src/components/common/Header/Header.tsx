import githubIcon from '@/assets/github-mark.svg';

export function Header() {
  return (
    <div className="container mx-auto pt-4 flex items-center justify-between">
      <h1 className="font-semibold text-2xl gradient-text text-gray-400 ">
        swapi-react
      </h1>
      <a
        href="https://github.com/caffellatte/swapi-react"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-14 h-14 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
        aria-label="GitHub Profile"
      >
        <img src={githubIcon} alt="GitHub" className="w-9 h-9 text-gray-900" />
      </a>
    </div>
  );
}
