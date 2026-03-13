import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { toast } from "react-hot-toast";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    const form = e.currentTarget;

    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const assunto = (form.elements.namedItem("assunto") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLInputElement).value;

    if (nome.length < 3) {
        e.preventDefault();
        toast.error("O Nome precisa ter pelo menos 3 caracteres");
        return;
    }

    if (!email.includes("@")) {
        e.preventDefault();
        toast.error("Digite um email válido");
        return;
    }

    if (assunto.length < 5) {
        e.preventDefault();
        toast.error("O assunto precisa ter pelo menos 5 caracteres");
        return;
    }

    if (mensagem.length === 0) {
        e.preventDefault();
        toast.error("Mensagem não pode estar vazia");
        return;
    }

    toast.success("Mensagem enviada com sucesso!");
}

function Contato() {
    return (
        <section id="contact" className="bg-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Informações */}
                <article className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Entre em Contato
                    </h2>

                    <p className="text-gray-300 mb-8">
                        Sinta-se à vontade para entrar em contato comigo!
                    </p>

                    <div className="flex justify-center lg:justify-start gap-6 text-3xl text-gray-300">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="hover:text-sky-400 transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="hover:text-sky-400 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            className="hover:text-sky-400 transition"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </article>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/6646b14593aaa66d4ebb0af7afb38b23"
                    method="POST"
                    className="bg-slate-800 p-6 sm:p-8 rounded-xl flex flex-col gap-4"
                >
                    <input
                        type="hidden"
                        name="_next"
                        value="https://portfolio-react-beryl-eight.vercel.app/sucesso"
                    />

                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_template" value="table" />

                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Recebi sua mensagem! Em breve entro em contato."
                    />

                    {/* Nome */}
                    <label className="text-gray-300 text-sm">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        placeholder="Digite o seu nome completo"
                        className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    {/* Email */}
                    <label className="text-gray-300 text-sm">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Digite o seu e-mail"
                        className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    {/* Assunto */}
                    <label className="text-gray-300 text-sm">Assunto</label>
                    <input
                        name="assunto"
                        type="text"
                        placeholder="Qual é o assunto da sua mensagem?"
                        className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    {/* Mensagem */}
                    <label className="text-gray-300 text-sm">Mensagem</label>
                    <textarea
                        name="mensagem"
                        rows={4}
                        placeholder="Digite sua mensagem aqui..."
                        className="bg-slate-700 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    <button
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-md transition mt-2"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contato;