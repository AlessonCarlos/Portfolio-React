
import { Link } from "react-router-dom";
function Sucesso() {
    return (
        <section className="bg-slate-900 min-h-screen flex items-center justify-center px-4">
            <div className="bg-slate-800 p-10 rounded-xl text-center max-w-md w-full">

                <div className="text-5xl mb-4">✅</div>

                <h1 className="text-3xl font-bold text-white mb-3">
                    Mensagem enviada!
                </h1>

                <p className="text-gray-300 mb-6">
                    Obrigado por entrar em contato. Em breve responderei sua mensagem.
                </p>

                <Link
                    to="/"
                    className="bg-sky-500 px-6 py-3 rounded-md text-white"
                >
                    Voltar para o início
                </Link>

            </div>
        </section>
    );
}

export default Sucesso;