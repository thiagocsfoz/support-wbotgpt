import Link from 'next/link';

const categories = [
  {
    id: 'getting-started',
    name: 'Primeiros Passos',
    description: 'Aprenda como configurar e começar a usar o WhatsBotGPT',
    icon: '🚀',
    href: '/getting-started'
  },
  {
    id: 'core-features',
    name: 'Recursos Principais',
    description: 'Descubra as principais capacidades da plataforma',
    icon: '⚙️',
    href: '/core-features'
  },
  {
    id: 'integrations',
    name: 'Integrações',
    description: 'Conecte o WhatsBotGPT com outros serviços',
    icon: '🔄',
    href: '/integrations'
  },
  {
    id: 'billing-account',
    name: 'Faturamento & Conta',
    description: 'Gerencie sua assinatura e configurações de conta',
    icon: '💳',
    href: '/billing-account'
  },
  {
    id: 'troubleshooting',
    name: 'Solução de Problemas',
    description: 'Resolva problemas e questões comuns',
    icon: '🔧',
    href: '/troubleshooting'
  },
  {
    id: 'faqs',
    name: 'Perguntas Frequentes',
    description: 'Respostas para perguntas frequentes',
    icon: '❓',
    href: '/faqs'
  }
];

export default function CategoryNav() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
        >
          <div className="flex-shrink-0 text-2xl">{category.icon}</div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{category.name}</p>
            <p className="text-sm text-gray-500 truncate">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
