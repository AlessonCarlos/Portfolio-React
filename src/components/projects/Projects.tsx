import React, { useState } from "react";
import { SiReact, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Project {
    id: number;
    name: string;
    description: string;
    liveUrl: string;
    url: string;
    techs: string[];
}

const techIcons: Record<string, React.ReactElement> = {
    React: React.createElement(SiReact, { className: "text-blue-400 w-6 h-6" }),
    Node: React.createElement(SiNodedotjs, { className: "text-green-400 w-6 h-6" }),
    Tailwind: React.createElement(SiTailwindcss, { className: "text-sky-400 w-6 h-6" }),
    TypeScript: React.createElement(SiTypescript, { className: "text-blue-600 w-6 h-6" }),
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
            description: "Front de um Blog Pessoal feito com React e Tailwind",
            liveUrl: "https://front-blogpessoal-orpin.vercel.app/",
            url: "https://github.com/AlessonCarlos/front-blogpessoal",
            techs: ["React", "TypeScript", "Tailwind", "Node"],
        },
    ]);

    return React.createElement(
        "section", 
        { id: "projects", className: "bg-slate-900 py-20" },
        React.createElement(
            "div",
            { className: "max-w-6xl mx-auto px-6" },
            React.createElement(
                "h2",
                { className: "text-3xl font-bold text-white mb-10" },
                "Projetos"
            ),
            React.createElement(
                "div",
                { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
                projects.map(project =>
                    React.createElement(
                        "div",
                        {
                            key: project.id,
                            className:
                                "bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300",
                        },
                        React.createElement(
                            "h3",
                            { className: "text-xl font-bold text-sky-400 mb-2" },
                            project.name
                        ),
                        React.createElement(
                            "p",
                            { className: "text-gray-300 mb-4" },
                            project.description
                        ),
                        React.createElement(
                            "div",
                            { className: "flex flex-wrap gap-2 mb-4" },
                            project.techs.map(tech =>
                                React.createElement(
                                    "div",
                                    {
                                        key: tech,
                                        className:
                                            "flex items-center gap-1 bg-slate-700 px-2 py-1 rounded-full text-sm text-white",
                                    },
                                    techIcons[tech] || null,
                                    React.createElement("span", null, tech)
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "flex gap-4" },
                            project.liveUrl &&
                                React.createElement(
                                    "a",
                                    {
                                        href: project.liveUrl,
                                        target: "_blank",
                                        className:
                                            "bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold transition",
                                    },
                                    "Ver o site"
                                ),
                            project.url &&
                                React.createElement(
                                    "a",
                                    {
                                        href: project.url,
                                        target: "_blank",
                                        className:
                                            "bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md font-semibold transition",
                                    },
                                    "Ver no GitHub"
                                )
                        )
                    )
                )
            )
        )
    );
}
export default Projects