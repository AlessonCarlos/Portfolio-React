import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Schema de validação em português
const contatoSchema = z.object({
    nome: z.string()
        .min(3, "O nome precisa ter pelo menos 3 caracteres")
        .max(50, "O nome pode ter no máximo 50 caracteres"),
    
    email: z.string()
        .email("Digite um email válido")
        .min(1, "O email é obrigatório"),
    
    assunto: z.string()
        .min(5, "O assunto precisa ter pelo menos 5 caracteres")
        .max(100, "O assunto pode ter no máximo 100 caracteres"),
    
    mensagem: z.string()
        .min(1, "A mensagem não pode estar vazia")
        .max(500, "A mensagem pode ter no máximo 500 caracteres")
});

// Tipo inferido em português
type ContatoFormData = z.infer<typeof contatoSchema>;

function Contato() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContatoFormData>({  // Agora usa ContatoFormData
        resolver: zodResolver(contatoSchema),
        mode: "onBlur"
    });

    const onSubmit = async (data: ContatoFormData) => {  // Agora usa ContatoFormData
        try {
            const formData = new FormData();
            formData.append("nome", data.nome);
            formData.append("email", data.email);
            formData.append("assunto", data.assunto);
            formData.append("mensagem", data.mensagem);
            
            formData.append("_next", "https://portfolio-react-beryl-eight.vercel.app/sucesso");
            formData.append("_captcha", "false");
            formData.append("_template", "table");
            formData.append("_autoresponse", "Recebi sua mensagem! Em breve entro em contato.");

            const response = await fetch("https://formsubmit.co/6646b14593aaa66d4ebb0af7afb38b23", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                toast.success("Mensagem enviada com sucesso!");
                reset();
                navigate("/sucesso");
            } else {
                toast.error("Erro ao enviar mensagem. Tente novamente.");
            }
        } catch (error) {
            toast.error("Erro ao enviar mensagem. Tente novamente.");
            console.error(error);
        }
    };

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
                        <a href="https://www.linkedin.com/" target="_blank" className="hover:text-sky-400 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/" target="_blank" className="hover:text-sky-400 transition">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com/" target="_blank" className="hover:text-sky-400 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </article>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-slate-800 p-6 sm:p-8 rounded-xl flex flex-col gap-4"
                    noValidate
                >
                    {/* Nome */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">Nome</label>
                        <input
                            type="text"
                            placeholder="Digite o seu nome completo"
                            className={`bg-slate-700 text-white p-3 rounded-md outline-none w-full transition-all
                                ${errors.nome 
                                    ? 'border-2 border-red-500 focus:ring-2 focus:ring-red-500' 
                                    : 'focus:ring-2 focus:ring-sky-500'
                                }`}
                            {...register("nome")}
                        />
                        {errors.nome && (
                            <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite o seu e-mail"
                            className={`bg-slate-700 text-white p-3 rounded-md outline-none w-full transition-all
                                ${errors.email 
                                    ? 'border-2 border-red-500 focus:ring-2 focus:ring-red-500' 
                                    : 'focus:ring-2 focus:ring-sky-500'
                                }`}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Assunto */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">Assunto</label>
                        <input
                            type="text"
                            placeholder="Qual é o assunto da sua mensagem?"
                            className={`bg-slate-700 text-white p-3 rounded-md outline-none w-full transition-all
                                ${errors.assunto 
                                    ? 'border-2 border-red-500 focus:ring-2 focus:ring-red-500' 
                                    : 'focus:ring-2 focus:ring-sky-500'
                                }`}
                            {...register("assunto")}
                        />
                        {errors.assunto && (
                            <p className="text-red-400 text-sm mt-1">{errors.assunto.message}</p>
                        )}
                    </div>

                    {/* Mensagem */}
                    <div>
                        <label className="text-gray-300 text-sm block mb-1">Mensagem</label>
                        <textarea
                            rows={4}
                            placeholder="Digite sua mensagem aqui..."
                            className={`bg-slate-700 text-white p-3 rounded-md outline-none w-full transition-all resize-none
                                ${errors.mensagem 
                                    ? 'border-2 border-red-500 focus:ring-2 focus:ring-red-500' 
                                    : 'focus:ring-2 focus:ring-sky-500'
                                }`}
                            {...register("mensagem")}
                        />
                        {errors.mensagem && (
                            <p className="text-red-400 text-sm mt-1">{errors.mensagem.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                            bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-md transition mt-2
                            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contato;