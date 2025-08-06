import Link from 'next/link';

const categories = [
  {
    id: 'primeiros-passos',
    name: 'Primeiros Passos',
    description: 'Aprenda a configurar sua conta e conectar seu WhatsApp',
    icon: '🚀',
    href: '/primeiros-passos'
  },
  {
    id: 'assistentes',
    name: 'Assistentes',
    description: 'Crie e personalize as instruções, personalidade e serviços do seu bot',
    icon: '🤖',
    href: '/assistentes'
  },
  {
    id: 'leads-contatos',
    name: 'Leads e Contatos',
    description: 'Gerencie, importe e trate os leads gerados pelo seu assistente',
    icon: '👥',
    href: '/leads-contatos'
  },
  {
    id: 'recursos-funcionalidades',
    name: 'Recursos e Funcionalidades',
    description: 'Explore tudo sobre a Agenda, Campanhas e outras ferramentas',
    icon: '⚙️',
    href: '/recursos-funcionalidades'
  },
  {
    id: 'conta-faturamento',
    name: 'Conta e Faturamento',
    description: 'Gerencie seu plano, dados cadastrais e histórico de pagamentos',
    icon: '💳',
    href: '/conta-faturamento'
  },
  {
    id: 'solucao-problemas',
    name: 'Solução de Problemas',
    description: 'Encontre soluções rápidas para os problemas mais comuns',
    icon: '🔧',
    href: '/solucao-problemas'
  }
];

export default function CategoryNav() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-6 shadow-md flex items-center space-x-4 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--primary)]"
        >
          <div className="flex-shrink-0 text-3xl text-[var(--primary)]">{category.icon}</div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-base font-semibold text-[var(--gray-dark)] font-heading">{category.name}</p>
            <p className="mt-1 text-sm text-[var(--gray-medium)] truncate">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
