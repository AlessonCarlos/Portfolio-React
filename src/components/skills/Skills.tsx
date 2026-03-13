import { SiTypescript, SiNodedotjs, SiMysql, SiAew, SiGit, SiGithub, SiLinux, SiReact, SiTailwindcss} from "react-icons/si";

const techs = [
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" /> },
  { name: "NestJS", icon: <SiNodedotjs className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" /> }, 
  { name: "MySQL", icon: <SiMysql className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" /> },
  { name: "AWS", icon: <SiAew className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600" /> },
  { name: "Git / GitHub", icon: <><SiGit className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /><SiGithub className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" /></> },
  { name: "Linux / Terminal", icon: <SiLinux className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> },
];

export default function Skills() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center sm:text-left">Habilidades</h2>

        {/* Tecnologias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex gap-2 mb-2">{tech.icon}</div>
              <span className="text-white font-semibold text-center text-sm sm:text-base">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}