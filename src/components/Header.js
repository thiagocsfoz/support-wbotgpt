import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.webp"
                  alt="WhatsBotGPT Logo"
                  width={240}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/primeiros-passos" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Primeiros Passos
            </Link>
            <Link href="/assistentes" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Assistentes
            </Link>
            <Link href="/leads-contatos" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Leads e Contatos
            </Link>
            <Link href="/recursos-funcionalidades" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Recursos e Funcionalidades
            </Link>
            <Link href="/conta-faturamento" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Conta e Faturamento
            </Link>
            <Link href="/solucao-problemas" className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium" style={{ color: 'var(--primary)' }}>
              Solução de Problemas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
