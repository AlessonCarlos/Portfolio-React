function Home() {
  return (
    <main className="bg-slate-900 text-white min-h-screen">

      
      <section  className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 py-16 sm:py-20 gap-10">

        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            Alesson Carlos
          </h1>

          <h2 className="text-2xl sm:text-3xl text-sky-400 mb-6">
            Desenvolvedor FullStack
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Meu sonho é usar a tecnologia para desenvolver novas soluções e
            experiências que proporcionem impactos positivos na vida das
            pessoas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/AlessonCarlos"
              className="bg-sky-500 px-6 py-2 rounded-md font-semibold hover:bg-sky-600 transition w-full sm:w-auto text-center"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alessoncarlos/"
              className="bg-sky-500 px-6 py-2 rounded-md font-semibold hover:bg-sky-600 transition w-full sm:w-auto text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/avatar-sem-fundo.png"
            alt="dev"
            className="animate-float w-48 sm:w-60 lg:w-80"
          />
        </div>

      </section>

      
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        <img
          src="/images/about-image.png"
          alt="perfil"
          className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover mx-auto lg:mx-0"
        />

        <div className="bg-slate-800 p-6 sm:p-8 rounded-xl text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl text-sky-400 mb-4">
            Sobre mim
          </h2>

          <p className="text-gray-300 text-sm sm:text-base">
            Sou Desenvolvedor Full Stack JavaScript em formação pelo bootcamp
            da Generation Brasil. Tenho experiência com React, Node, NestJS e
            bancos SQL, focado em construir aplicações modernas e escaláveis.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;