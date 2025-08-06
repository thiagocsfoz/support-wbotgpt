import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
// For now, we'll use a static mapping
const categoryData = {
  'getting-started': {
    title: 'Primeiros Passos',
    description: 'Aprenda como configurar e começar a usar o WhatsBotGPT',
    articles: [
      {
        slug: 'creating-account',
        title: 'Criando sua conta',
        description: 'Aprenda como se cadastrar e configurar sua conta WhatsBotGPT'
      },
      {
        slug: 'configuring-first-bot',
        title: 'Configurando seu primeiro bot',
        description: 'Guia passo a passo para criar e configurar seu primeiro bot'
      },
      {
        slug: 'connecting-whatsapp',
        title: 'Conectando seu WhatsApp',
        description: 'Como conectar sua conta WhatsApp ao WhatsBotGPT'
      }
    ]
  },
  'core-features': {
    title: 'Recursos Principais',
    description: 'Descubra as principais capacidades da plataforma',
    articles: [
      {
        slug: 'automating-responses',
        title: 'Automatizando Respostas',
        description: 'Configure respostas automáticas para perguntas comuns dos clientes'
      },
      {
        slug: 'conversation-flows',
        title: 'Criando Fluxos de Conversa',
        description: 'Projete fluxos de conversa complexos para seu bot'
      },
      {
        slug: 'gpt-integration',
        title: 'Integração com GPT',
        description: 'Aproveite o GPT para criar respostas inteligentes'
      },
      {
        slug: 'contact-management',
        title: 'Gerenciamento de Contatos',
        description: 'Organize e gerencie seus contatos de forma eficaz'
      }
    ]
  },
  'integrations': {
    title: 'Integrações',
    description: 'Conecte o WhatsBotGPT com outros serviços',
    articles: [
      {
        slug: 'crm-integration',
        title: 'Integração com CRM',
        description: 'Conecte-se com Pipedrive, Hubspot e outras plataformas de CRM'
      },
      {
        slug: 'google-sheets',
        title: 'Integração com Google Sheets',
        description: 'Sincronize dados com o Google Sheets'
      },
      {
        slug: 'webhooks-api',
        title: 'Webhooks e API',
        description: 'Opções avançadas de integração usando webhooks e nossa API'
      }
    ]
  },
  'billing-account': {
    title: 'Faturamento & Conta',
    description: 'Gerencie sua assinatura e configurações de conta',
    articles: [
      {
        slug: 'plans-info',
        title: 'Informações de Planos',
        description: 'Detalhes sobre nossos planos de preços e recursos'
      },
      {
        slug: 'changing-plans',
        title: 'Alterando Planos',
        description: 'Como fazer upgrade ou downgrade da sua assinatura'
      },
      {
        slug: 'invoice-management',
        title: 'Gerenciamento de Faturas',
        description: 'Acesse e gerencie suas faturas'
      }
    ]
  },
  'troubleshooting': {
    title: 'Solução de Problemas',
    description: 'Resolva problemas e questões comuns',
    articles: [
      {
        slug: 'bot-not-responding',
        title: 'Meu bot não está respondendo',
        description: 'Solucione problemas de resposta do bot'
      },
      {
        slug: 'whatsapp-connection',
        title: 'Problemas de Conexão com WhatsApp',
        description: 'Resolva problemas de conectividade com o WhatsApp'
      },
      {
        slug: 'common-errors',
        title: 'Erros Comuns',
        description: 'Soluções para erros frequentemente encontrados'
      }
    ]
  },
  'faqs': {
    title: 'Perguntas Frequentes',
    description: 'Respostas para perguntas frequentes',
    articles: [
      {
        slug: 'account-limits',
        title: 'Limites de Conta',
        description: 'Informações sobre limites de mensagens e restrições'
      },
      {
        slug: 'data-privacy',
        title: 'Privacidade de Dados',
        description: 'Como lidamos e protegemos seus dados'
      },
      {
        slug: 'supported-platforms',
        title: 'Plataformas Suportadas',
        description: 'Quais plataformas e dispositivos são suportados'
      }
    ]
  }
};

export function generateMetadata({ params }) {
  const category = params.category;

  if (!categoryData[category]) {
    return {
      title: 'Categoria Não Encontrada'
    };
  }

  return {
    title: `${categoryData[category].title} - WhatsBotGPT Support`,
    description: categoryData[category].description
  };
}

export default function CategoryPage({ params }) {
  const category = params.category;

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
              <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
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
                  <span>Read article</span>
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
