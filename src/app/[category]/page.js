import Link from 'next/link';
import { notFound } from 'next/navigation';
import TopArticlesWrapper from '@/components/TopArticlesWrapper';

// This would typically come from a database or CMS
// For now, we'll use a static mapping
const categoryData = {
  'primeiros-passos': {
    title: 'Primeiros Passos',
    description: 'Aprenda a configurar sua conta e conectar seu WhatsApp',
    articles: [
      {
        slug: 'criando-conta',
        title: 'Criando sua Conta e Realizando o Primeiro Login',
        description: 'Aprenda como se cadastrar e configurar sua conta WhatsBotGPT'
      },
      {
        slug: 'conectando-whatsapp',
        title: 'Conectando seu WhatsApp',
        description: 'Como conectar sua conta WhatsApp ao WhatsBotGPT'
      },
      {
        slug: 'configuracoes-iniciais',
        title: 'Configurações Iniciais',
        description: 'Configure as opções básicas para começar a usar o WhatsBotGPT'
      }
    ]
  },
  'assistentes': {
    title: 'Assistentes',
    description: 'Crie e personalize as instruções, personalidade e serviços do seu bot',
    articles: [
      {
        slug: 'criando-assistente',
        title: 'Criando seu Primeiro Assistente',
        description: 'Configure seu bot com personalidade e instruções personalizadas'
      },
      {
        slug: 'personalizando-instrucoes',
        title: 'Personalizando Instruções e Personalidade',
        description: 'Aprenda a definir como seu assistente deve se comportar e responder'
      },
      {
        slug: 'configurando-servicos',
        title: 'Configurando Serviços Automatizados',
        description: 'Configure seu assistente para realizar tarefas específicas automaticamente'
      }
    ]
  },
  'leads-contatos': {
    title: 'Leads e Contatos',
    description: 'Gerencie, importe e trate os leads gerados pelo seu assistente',
    articles: [
      {
        slug: 'gerenciando-leads',
        title: 'Gerenciando seus Leads',
        description: 'Aprenda a visualizar e gerenciar os contatos gerados pelo seu bot'
      },
      {
        slug: 'importando-contatos',
        title: 'Importando Contatos',
        description: 'Como importar contatos existentes para o WhatsBotGPT'
      },
      {
        slug: 'qualificacao-leads',
        title: 'Qualificação de Leads',
        description: 'Estratégias para qualificar leads através do seu assistente'
      }
    ]
  },
  'recursos-funcionalidades': {
    title: 'Recursos e Funcionalidades',
    description: 'Explore tudo sobre a Agenda, Campanhas e outras ferramentas',
    articles: [
      {
        slug: 'agenda-agendamentos',
        title: 'Agenda e Agendamentos',
        description: 'Como configurar e gerenciar agendamentos através do seu assistente'
      },
      {
        slug: 'campanhas-marketing',
        title: 'Campanhas de Marketing',
        description: 'Crie e gerencie campanhas de marketing automatizadas'
      },
      {
        slug: 'automacoes-avancadas',
        title: 'Automações Avançadas',
        description: 'Recursos avançados para automatizar processos complexos'
      }
    ]
  },
  'conta-faturamento': {
    title: 'Conta e Faturamento',
    description: 'Gerencie seu plano, dados cadastrais e histórico de pagamentos',
    articles: [
      {
        slug: 'gerenciando-plano',
        title: 'Gerenciando seu Plano',
        description: 'Como fazer upgrade, downgrade ou cancelar sua assinatura'
      },
      {
        slug: 'dados-cadastrais',
        title: 'Dados Cadastrais',
        description: 'Atualize suas informações pessoais e de faturamento'
      },
      {
        slug: 'historico-pagamentos',
        title: 'Histórico de Pagamentos',
        description: 'Acesse e gerencie suas faturas e histórico de pagamentos'
      }
    ]
  },
  'solucao-problemas': {
    title: 'Solução de Problemas',
    description: 'Encontre soluções rápidas para os problemas mais comuns',
    articles: [
      {
        slug: 'bot-nao-responde',
        title: 'Meu bot não está respondendo',
        description: 'Solucione problemas de resposta do seu assistente'
      },
      {
        slug: 'problemas-conexao-whatsapp',
        title: 'Problemas de Conexão com WhatsApp',
        description: 'Resolva problemas de conectividade com o WhatsApp'
      },
      {
        slug: 'erros-comuns',
        title: 'Erros Comuns e Soluções',
        description: 'Soluções para os erros mais frequentemente encontrados'
      }
    ]
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  if (!categoryData[category]) {
    return {
      title: 'Categoria Não Encontrada'
    };
  }

  return {
    title: `${categoryData[category].title} - Suporte WhatsBotGPT`,
    description: categoryData[category].description
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // Check if the category exists
  if (!categoryData[category]) {
    notFound();
  }

  const { title, description, articles } = categoryData[category];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">Início</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Category header */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-xl text-gray-500">{description}</p>
        </div>

        {/* Top articles in this category */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Artigos Mais Úteis nesta Categoria</h2>
              <TopArticlesWrapper category={category} limit={3} />
            </div>
          </div>
        </div>

        {/* Articles list */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/${category}/${article.slug}`}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-blue-600 group-hover:text-blue-800">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{article.description}</p>
                <div className="mt-4 flex items-center text-sm text-blue-500">
                  <span>Ler artigo</span>
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
