import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="WhatsBotGPT Logo"
                  width={120}
                  height={30}
                  priority
                />
                <span className="ml-2 text-sm font-medium text-gray-600">Suporte</span>
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/primeiros-passos" className="text-gray-600 hover:text-gray-900">
              Primeiros Passos
            </Link>
            <Link href="/assistentes" className="text-gray-600 hover:text-gray-900">
              Assistentes
            </Link>
            <Link href="/leads-contatos" className="text-gray-600 hover:text-gray-900">
              Leads e Contatos
            </Link>
            <Link href="/recursos-funcionalidades" className="text-gray-600 hover:text-gray-900">
              Recursos e Funcionalidades
            </Link>
            <Link href="/conta-faturamento" className="text-gray-600 hover:text-gray-900">
              Conta e Faturamento
            </Link>
            <Link href="/solucao-problemas" className="text-gray-600 hover:text-gray-900">
              Solução de Problemas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
