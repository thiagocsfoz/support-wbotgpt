import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section with search */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-center">
            Suporte WhatsBotGPT
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
            Encontre respostas para suas dúvidas e aprenda a tirar o máximo proveito do WhatsBotGPT
          </p>
          <div className="mt-10 w-full max-w-3xl">
            <SearchBar placeholder="Como podemos ajudar você?" />
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Documentação</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Navegue por Categoria
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore nossos guias e exemplos para aprender tudo o que você precisa saber sobre o WhatsBotGPT.
            </p>
          </div>

          <div className="mt-10">
            <CategoryNav />
          </div>
        </div>
      </div>

      {/* Popular articles section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Artigos Populares</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Recursos Mais Visualizados
            </p>
          </div>
          <div className="mt-10">
            <ul className="space-y-4">
              <li className="bg-white shadow overflow-hidden rounded-md">
                <Link href="/primeiros-passos/criando-conta" className="block hover:bg-gray-50 p-4">
                  <p className="text-lg font-medium text-blue-600">Criando sua Conta e Realizando o Primeiro Login</p>
                  <p className="mt-1 text-gray-600">Aprenda como se cadastrar e configurar sua conta WhatsBotGPT</p>
                </Link>
              </li>
              <li className="bg-white shadow overflow-hidden rounded-md">
                <Link href="/assistentes/criando-assistente" className="block hover:bg-gray-50 p-4">
                  <p className="text-lg font-medium text-blue-600">Criando seu Primeiro Assistente</p>
                  <p className="mt-1 text-gray-600">Configure seu bot com personalidade e instruções personalizadas</p>
                </Link>
              </li>
              <li className="bg-white shadow overflow-hidden rounded-md">
                <Link href="/leads-contatos/gerenciando-leads" className="block hover:bg-gray-50 p-4">
                  <p className="text-lg font-medium text-blue-600">Gerenciando seus Leads</p>
                  <p className="mt-1 text-gray-600">Aprenda a visualizar e gerenciar os contatos gerados pelo seu bot</p>
                </Link>
              </li>
              <li className="bg-white shadow overflow-hidden rounded-md">
                <Link href="/solucao-problemas/bot-nao-responde" className="block hover:bg-gray-50 p-4">
                  <p className="text-lg font-medium text-blue-600">Meu bot não está respondendo</p>
                  <p className="mt-1 text-gray-600">Solucione problemas de resposta do seu assistente</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact support section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Não encontrou o que procurava?</span>
            <span className="block text-blue-200">Nossa equipe de suporte está aqui para ajudar.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:support@whatsbotgpt.store"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
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
