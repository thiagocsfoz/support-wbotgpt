import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-md w-full space-y-8 text-center px-4">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Página Não Encontrada</h2>
          <p className="mt-2 text-sm text-gray-600">
            Não conseguimos encontrar a página que você está procurando.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Voltar para o Início
          </Link>
          <Link
            href="/search"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Buscar Conteúdo
          </Link>
          <a
            href="mailto:contato@whatsbotgpt.store"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contatar Suporte
          </a>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Se você acredita que isso é um erro, por favor, entre em contato com nossa equipe de suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
