import { useState } from "react";
import { SiReact, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Project {
    id: number;
    name: string;
    description: string;
    liveUrl: string;
    url: string;
    techs: string[]; // lista de tecnologias
}

const techIcons: Record<string, JSX.Element> = {
    React: <SiReact className="text-blue-400 w-6 h-6" />,
    Node: <SiNodedotjs className="text-green-400 w-6 h-6" />,
    Tailwind: <SiTailwindcss className="text-sky-400 w-6 h-6" />,
    TypeScript: <SiTypescript className="text-blue-600 w-6 h-6" />,
};

function Projects() {
    const [projects] = useState<Project[]>([
        {
            id: 1,
            name: "ConectaCRM",
            description: "Sistema de gestão de leads para freelancers.",
            liveUrl: "https://front-crm-kappa.vercel.app/",
            url: "https://github.com/grupo-1234/front-CRM",
            techs: ["React", "Node", "Tailwind", "TypeScript"],
        },
        {
            id: 2,
            name: "Front RH",
            description: "Interface front-end de gestão de recursos humanos.",
            liveUrl: "https://front-rh-six.vercel.app/",
            url: "https://github.com/grupo-1234/front-rh",
            techs: ["React", "Tailwind"],
        },
        {
            id: 3,
            name: "Blog Pessoal",
            description: "Front de um Blog Pessoal feito com reac e tailwind ",
            liveUrl: "https://front-blogpessoal-orpin.vercel.app/",
            url: "https://github.com/AlessonCarlos/front-blogpessoal",
            techs: ["React","TypeScript","Tailwind","Node"],
        },
    ]);

    return (
        <section className="bg-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10">Projetos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold text-sky-400 mb-2">{project.name}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Tecnologias */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techs.map((tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-1 bg-slate-700 px-2 py-1 rounded-full text-sm text-white"
                                    >
                                        {techIcons[tech] || null}
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Botões */}
                            <div className="flex gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold transition"
                                    >
                                        Ver o site
                                    </a>
                                )}
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md font-semibold transition"
                                    >
                                        Ver no GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;