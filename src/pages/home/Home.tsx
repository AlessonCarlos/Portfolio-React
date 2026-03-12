

function Home() {
   return (
    <main className="bg-slate-900 text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto flex items-center justify-between px-6 py-20">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-2">
            Alesson Carlos
          </h1>

          <h2 className="text-3xl text-sky-400 mb-6">
            Desenvolvedor FullStack
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Meu sonho é usar a tecnologia para desenvolver novas soluções e
            experiências que proporcionem impactos positivos na vida das
            pessoas.
          </p>

          <div className="flex gap-4">

            <a
              href="https://github.com/AlessonCarlos"
              className="bg-sky-500 px-6 py-2 rounded-md font-semibold hover:bg-sky-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alessoncarlos/"
              className="bg-sky-500 px-6 py-2 rounded-md font-semibold hover:bg-sky-600 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="w-100">
          <img
            src="/assets/img/avatar-sem-fundo.png"
            alt="dev"
            className="animate-float"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex gap-12 items-center">

        <img
          src="/assets/img/about-image.png"
          alt="perfil"
          className="w-60 h-60 rounded-full object-cover"
        />

        <div className="bg-slate-800 p-8 rounded-xl">

          <h2 className="text-2xl text-sky-400 mb-4">
            Sobre mim
          </h2>

          <p className="text-gray-300">
            Sou Desenvolvedor Full Stack JavaScript em formação pelo bootcamp
            da Generation Brasil. Tenho experiência com React, Node, NestJS e
            bancos SQL, focado em construir aplicações modernas e escaláveis.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home