function Navbar() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Avatar + Nome */}
        <div className="flex items-center gap-2">
          <img
            src="/images/meu avatar.png"
            alt="Meu avatar"
            className="w-17 h-12 rounded-full object-cover"
          />

          <h1 className="text-xl font-bold text-white">
            Alesson Carlos
          </h1>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8 text-gray-300">
          <a href="#about" className="hover:text-sky-400 transition">Sobre</a>
          <a href="#skills" className="hover:text-sky-400 transition">Habilidades</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projetos</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contato</a>
        </nav>

        {/* Botão */}
        <img
            src="/images/gifkratos.gif"
            alt="Meu avatar"
            className="w-12 h-12 rounded-full object-cover"
          />

      </div>
    </header>
  );
}

export default Navbar;