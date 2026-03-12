import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Texto / Direitos */}
        <div className="text-gray-300 text-center md:text-left">
          <p>© {new Date().getFullYear()} Alesson Carlos. Todos os direitos reservados.</p>
        </div>

        {/* Links sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/AlessonCarlos"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/AlessonCarlos"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:seuemail@exemplo.com"
            className="text-gray-300 hover:text-red-400 transition"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}