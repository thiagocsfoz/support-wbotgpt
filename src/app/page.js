import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section with search */}
      <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-center font-heading">
            Suporte WhatsBotGPT
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-white sm:text-lg md:mt-6 md:text-xl md:max-w-3xl text-center">
            Encontre respostas para suas dúvidas e aprenda a tirar o máximo proveito do WhatsBotGPT
          </p>
          <div className="mt-12 w-full max-w-3xl">
            <SearchBar placeholder="Como podemos ajudar você?" />
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[var(--primary)] font-semibold tracking-wide uppercase font-heading">Documentação</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-[var(--gray-dark)] sm:text-4xl font-heading">
              Navegue por Categoria
            </p>
            <p className="mt-4 max-w-2xl text-xl text-[var(--gray-medium)] lg:mx-auto">
              Explore nossos guias e exemplos para aprender tudo o que você precisa saber sobre o WhatsBotGPT.
            </p>
          </div>

          <div className="mt-12">
            <CategoryNav />
          </div>
        </div>
      </div>

      {/* Popular articles section */}
      <div className="py-16 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[var(--primary)] font-semibold tracking-wide uppercase font-heading">Artigos Populares</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-[var(--gray-dark)] sm:text-4xl font-heading">
              Recursos Mais Visualizados
            </p>
          </div>
          <div className="mt-12">
            <ul className="space-y-6 max-w-4xl mx-auto">
              <li className="bg-white shadow-md overflow-hidden rounded-lg transition-all duration-200 hover:shadow-lg">
                <Link href="/primeiros-passos/criando-conta" className="block hover:bg-[var(--gray-light)] p-6">
                  <p className="text-lg font-semibold text-[var(--primary)] font-heading">Criando sua Conta e Realizando o Primeiro Login</p>
                  <p className="mt-2 text-[var(--gray-medium)]">Aprenda como se cadastrar e configurar sua conta WhatsBotGPT</p>
                </Link>
              </li>
              <li className="bg-white shadow-md overflow-hidden rounded-lg transition-all duration-200 hover:shadow-lg">
                <Link href="/assistentes/criando-assistente" className="block hover:bg-[var(--gray-light)] p-6">
                  <p className="text-lg font-semibold text-[var(--primary)] font-heading">Criando seu Primeiro Assistente</p>
                  <p className="mt-2 text-[var(--gray-medium)]">Configure seu bot com personalidade e instruções personalizadas</p>
                </Link>
              </li>
              <li className="bg-white shadow-md overflow-hidden rounded-lg transition-all duration-200 hover:shadow-lg">
                <Link href="/leads-contatos/gerenciando-leads" className="block hover:bg-[var(--gray-light)] p-6">
                  <p className="text-lg font-semibold text-[var(--primary)] font-heading">Gerenciando seus Leads</p>
                  <p className="mt-2 text-[var(--gray-medium)]">Aprenda a visualizar e gerenciar os contatos gerados pelo seu bot</p>
                </Link>
              </li>
              <li className="bg-white shadow-md overflow-hidden rounded-lg transition-all duration-200 hover:shadow-lg">
                <Link href="/solucao-problemas/bot-nao-responde" className="block hover:bg-[var(--gray-light)] p-6">
                  <p className="text-lg font-semibold text-[var(--primary)] font-heading">Meu bot não está respondendo</p>
                  <p className="mt-2 text-[var(--gray-medium)]">Solucione problemas de resposta do seu assistente</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact support section */}
      <div className="bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            <span className="block">Não encontrou o que procurava?</span>
            <span className="block text-white opacity-90 mt-2">Nossa equipe de suporte está aqui para ajudar.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:support@whatsbotgpt.store"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-[var(--primary)] bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Contatar Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
