'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';

// This would typically come from an API or search service
// For now, we'll use a static list of searchable content
const searchableContent = [
  {
    title: 'Criando sua Conta e Realizando o Primeiro Login',
    description: 'Aprenda como se cadastrar e configurar sua conta WhatsBotGPT',
    category: 'primeiros-passos',
    slug: 'criando-conta',
    content: 'Criando sua Conta e Realizando o Primeiro Login Bem-vindo ao WhatsBotGPT! Este guia irá orientá-lo no processo de criação e configuração da sua conta.'
  },
  {
    title: 'Conectando seu WhatsApp',
    description: 'Como conectar sua conta WhatsApp ao WhatsBotGPT',
    category: 'primeiros-passos',
    slug: 'conectando-whatsapp',
    content: 'Conectando seu WhatsApp ao WhatsBotGPT Este guia irá orientá-lo no processo de conexão da sua conta WhatsApp ao seu bot WhatsBotGPT.'
  },
  {
    title: 'Configurações Iniciais',
    description: 'Configure as opções básicas para começar a usar o WhatsBotGPT',
    category: 'primeiros-passos',
    slug: 'configuracoes-iniciais',
    content: 'Configurações Iniciais Aprenda como configurar as opções básicas do WhatsBotGPT para começar a usar a plataforma de forma eficiente.'
  },
  {
    title: 'Criando seu Primeiro Assistente',
    description: 'Configure seu bot com personalidade e instruções personalizadas',
    category: 'assistentes',
    slug: 'criando-assistente',
    content: 'Criando seu Primeiro Assistente Este guia irá ajudá-lo a criar e configurar seu primeiro assistente virtual no WhatsBotGPT.'
  },
  {
    title: 'Personalizando Instruções e Personalidade',
    description: 'Aprenda a definir como seu assistente deve se comportar e responder',
    category: 'assistentes',
    slug: 'personalizando-instrucoes',
    content: 'Personalizando Instruções e Personalidade Aprenda a definir como seu assistente deve se comportar e responder para criar uma experiência única para seus clientes.'
  },
  {
    title: 'Gerenciando seus Leads',
    description: 'Aprenda a visualizar e gerenciar os contatos gerados pelo seu bot',
    category: 'leads-contatos',
    slug: 'gerenciando-leads',
    content: 'Gerenciando seus Leads Este guia mostra como visualizar, organizar e gerenciar os leads gerados pelo seu assistente virtual.'
  },
  {
    title: 'Agenda e Agendamentos',
    description: 'Como configurar e gerenciar agendamentos através do seu assistente',
    category: 'recursos-funcionalidades',
    slug: 'agenda-agendamentos',
    content: 'Agenda e Agendamentos Este guia explica como configurar e utilizar o sistema de agendamentos do WhatsBotGPT para que seu assistente possa marcar compromissos automaticamente.'
  },
  {
    title: 'Gerenciando seu Plano',
    description: 'Como fazer upgrade, downgrade ou cancelar sua assinatura',
    category: 'conta-faturamento',
    slug: 'gerenciando-plano',
    content: 'Gerenciando seu Plano Este guia explica como gerenciar sua assinatura do WhatsBotGPT, incluindo como fazer upgrade, downgrade ou cancelar seu plano.'
  },
  {
    title: 'Meu bot não está respondendo',
    description: 'Solucione problemas de resposta do seu assistente',
    category: 'solucao-problemas',
    slug: 'bot-nao-responde',
    content: 'Meu bot não está respondendo Solucione problemas comuns que podem impedir seu assistente de responder às mensagens.'
  }
];

// Simple search function that checks if the query appears in the title, description, or content
const searchContent = (query) => {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase();

  return searchableContent.filter(item => {
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.content.toLowerCase().includes(normalizedQuery)
    );
  });
};

// Function to get the category title
const getCategoryTitle = (category) => {
  const categoryTitles = {
    'primeiros-passos': 'Primeiros Passos',
    'assistentes': 'Assistentes',
    'leads-contatos': 'Leads e Contatos',
    'recursos-funcionalidades': 'Recursos e Funcionalidades',
    'conta-faturamento': 'Conta e Faturamento',
    'solucao-problemas': 'Solução de Problemas'
  };

  return categoryTitles[category] || category;
};

// SearchContent component that uses useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    // Simulate a search delay
    setIsSearching(true);

    const timer = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resultados da Busca para &quot;{query}&quot;
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            {isSearching 
              ? 'Buscando...' 
              : results.length > 0 
                ? `Encontrado${results.length === 1 ? '' : 's'} ${results.length} resultado${results.length === 1 ? '' : 's'}`
                : 'Nenhum resultado encontrado'}
          </p>
        </div>

        {isSearching ? (
          <div className="flex justify-center">
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          </div>
        ) : results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="bg-white shadow overflow-hidden rounded-md">
                <Link 
                  href={`/${result.category}/${result.slug}`}
                  className="block hover:bg-gray-50 p-4"
                >
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                    <span>{getCategoryTitle(result.category)}</span>
                  </div>
                  <p className="text-lg font-medium text-blue-600">{result.title}</p>
                  <p className="mt-1 text-gray-600">{result.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-6">
              Não encontramos nenhum resultado para &quot;{query}&quot;. Tente usar palavras-chave diferentes ou verifique a ortografia.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Voltar para o Início
            </Link>
          </div>
        )}

        {/* Contact support section */}
        {!isSearching && results.length === 0 && (
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900">Ainda precisa de ajuda?</h2>
            <p className="mt-2 text-gray-600">
              Se você não encontrar o que está procurando, nossa equipe de suporte está aqui para ajudar.
            </p>
            <div className="mt-4">
              <a
                href="mailto:contato@whatsbotgpt.store"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Contatar Suporte
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function SearchLoading() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Carregando resultados...
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        </div>
      </div>
    </div>
  );
}

// Main SearchPage component that wraps SearchContent with Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
}
