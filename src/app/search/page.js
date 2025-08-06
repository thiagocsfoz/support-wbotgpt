'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// This would typically come from an API or search service
// For now, we'll use a static list of searchable content
const searchableContent = [
  {
    title: 'Criando sua conta',
    description: 'Aprenda como se cadastrar e configurar sua conta WhatsBotGPT',
    category: 'getting-started',
    slug: 'creating-account',
    content: 'Criando sua conta WhatsBotGPT Bem-vindo ao WhatsBotGPT! Este guia irá orientá-lo no processo de criação e configuração da sua conta.'
  },
  {
    title: 'Configurando seu primeiro bot',
    description: 'Guia passo a passo para criar e configurar seu primeiro bot',
    category: 'getting-started',
    slug: 'configuring-first-bot',
    content: 'Configurando seu primeiro bot Este guia irá ajudá-lo a criar e configurar seu primeiro WhatsBot usando nossa plataforma.'
  },
  {
    title: 'Conectando seu WhatsApp',
    description: 'Como conectar sua conta WhatsApp ao WhatsBotGPT',
    category: 'getting-started',
    slug: 'connecting-whatsapp',
    content: 'Conectando seu WhatsApp ao WhatsBotGPT Este guia irá orientá-lo no processo de conexão da sua conta WhatsApp ao seu bot WhatsBotGPT.'
  },
  {
    title: 'Automatizando Respostas',
    description: 'Configure respostas automáticas para perguntas comuns dos clientes',
    category: 'core-features',
    slug: 'automating-responses',
    content: 'Automatizando Respostas Aprenda como configurar respostas automáticas para lidar com perguntas comuns dos clientes de forma eficiente.'
  },
  {
    title: 'Criando Fluxos de Conversa',
    description: 'Projete fluxos de conversa complexos para seu bot',
    category: 'core-features',
    slug: 'conversation-flows',
    content: 'Criando Fluxos de Conversa Projete fluxos de conversa interativos e dinâmicos para guiar seus clientes através de interações complexas.'
  },
  {
    title: 'Integração com GPT',
    description: 'Aproveite o GPT para criar respostas inteligentes',
    category: 'core-features',
    slug: 'gpt-integration',
    content: 'Integração com GPT Aprenda como usar o GPT para gerar respostas inteligentes e contextuais para seus clientes.'
  },
  {
    title: 'Integração com CRM',
    description: 'Conecte-se com Pipedrive, Hubspot e outras plataformas de CRM',
    category: 'integrations',
    slug: 'crm-integration',
    content: 'Integração com CRM Conecte o WhatsBotGPT com plataformas populares de CRM para otimizar o gerenciamento de clientes.'
  },
  {
    title: 'Meu bot não está respondendo',
    description: 'Solucione problemas de resposta do bot',
    category: 'troubleshooting',
    slug: 'bot-not-responding',
    content: 'Meu bot não está respondendo Solucione problemas comuns que podem impedir seu bot de responder às mensagens.'
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
    'getting-started': 'Primeiros Passos',
    'core-features': 'Recursos Principais',
    'integrations': 'Integrações',
    'billing-account': 'Faturamento & Conta',
    'troubleshooting': 'Solução de Problemas',
    'faqs': 'Perguntas Frequentes'
  };

  return categoryTitles[category] || category;
};

export default function SearchPage() {
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
            Resultados da Busca para "{query}"
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
              Não encontramos nenhum resultado para "{query}". Tente usar palavras-chave diferentes ou verifique a ortografia.
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
                href="mailto:support@whatsbotgpt.store"
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
