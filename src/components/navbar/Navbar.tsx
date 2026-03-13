import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        {/* Avatar + Nome */}
        <div className="flex items-center gap-2">
          <img
            src="/images/meu avatar.png"
            alt="Meu avatar"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <h1 className="text-lg sm:text-xl font-bold text-white">
            Alesson Carlos
          </h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-300 text-sm sm:text-base">
          <a href="#about" className="hover:text-sky-400 transition">Sobre</a>
          <a href="#skills" className="hover:text-sky-400 transition">Habilidades</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projetos</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contato</a>
        </nav>

        {/* GIF Kratos Desktop */}
        <div className="hidden lg:flex justify-end">
          <img
            src="/images/gifkratos.gif"
            alt="Kratos GIF"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
        </div>

        {/* Botão hamburger Mobile */}
        <button
          className="lg:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Menu lateral mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-xl transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 gap-6 mt-20">
          <a href="#about" className="text-white text-lg hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#skills" className="text-white text-lg hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Habilidades</a>
          <a href="#projects" className="text-white text-lg hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Projetos</a>
          <a href="#contact" className="text-white text-lg hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Contato</a>

          {/* GIF Kratos Mobile dentro do menu */}
          <div className="mt-10 flex justify-center">
            <img
              src="/images/gifkratos.gif"
              alt="Kratos GIF"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Overlay quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;