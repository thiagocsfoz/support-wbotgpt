import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-light)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-[var(--primary)] hover:text-[var(--primary-hover)]">
              Início
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/primeiros-passos" className="text-base text-[var(--primary)] hover:text-[var(--primary-hover)]">
              Primeiros Passos
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/assistentes" className="text-base text-[var(--primary)] hover:text-[var(--primary-hover)]">
              Assistentes
            </Link>
          </div>
          <div className="px-5 py-2">
            <a href="https://whatsbotgpt.store" className="text-base text-[var(--primary)] hover:text-[var(--primary-hover)]" target="_blank" rel="noopener noreferrer">
              Site Principal
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="mailto:contato@whatsbotgpt.store" className="text-base text-[var(--primary)] hover:text-[var(--primary-hover)]">
              Contatar Suporte
            </a>
          </div>
        </nav>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-dark)] tracking-wider uppercase">Contato</h3>
            <p className="mt-2 text-base text-[var(--gray-medium)]">
              E-mail: <a href="mailto:contato@whatsbotgpt.store" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">contato@whatsbotgpt.store</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-dark)] tracking-wider uppercase">WhatsApp</h3>
            <p className="mt-2 text-base text-[var(--gray-medium)]">
              <a href="https://wa.me/5511971239515" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">+55 11 97123-9515</a>
            </p>
            <div className="mt-3">
              <a
                href="https://wa.me/5511971239515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-base text-[var(--gray-medium)]">
          &copy; {new Date().getFullYear()} WhatsBotGPT. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
