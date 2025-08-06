import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
              Início
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/primeiros-passos" className="text-base text-gray-500 hover:text-gray-900">
              Primeiros Passos
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/assistentes" className="text-base text-gray-500 hover:text-gray-900">
              Assistentes
            </Link>
          </div>
          <div className="px-5 py-2">
            <a href="https://whatsbotgpt.store" className="text-base text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              Site Principal
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="mailto:support@whatsbotgpt.store" className="text-base text-gray-500 hover:text-gray-900">
              Contatar Suporte
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Social media links could go here */}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} WhatsBotGPT. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
