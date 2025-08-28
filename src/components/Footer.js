import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-light)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Top grid: brand, navigation, contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand / about */}
          <div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="h-10 w-10 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center font-bold">W</div>
              <div className="ml-3">
                <p className="text-lg font-extrabold text-[var(--gray-dark)] font-heading">WhatsBotGPT</p>
                <p className="text-sm text-[var(--gray-medium)]">Base de conhecimento e suporte oficial.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--gray-medium)] text-center md:text-left">
              Encontre guias, tutoriais e soluções para tirar o máximo da plataforma.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-dark)] tracking-wider uppercase text-center md:text-left">Navegação</h3>
            <ul className="mt-4 space-y-3 text-center md:text-left">
              <li>
                <Link href="/" className="text-[var(--gray-dark)] hover:text-[var(--primary)]">Início</Link>
              </li>
              <li>
                <Link href="/primeiros-passos" className="text-[var(--gray-dark)] hover:text-[var(--primary)]">Primeiros Passos</Link>
              </li>
              <li>
                <Link href="/assistentes" className="text-[var(--gray-dark)] hover:text-[var(--primary)]">Assistentes</Link>
              </li>
              <li>
                <a href="https://whatsbotgpt.store" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] hover:text-[var(--primary)]">Site Principal</a>
              </li>
              <li>
                <a href="mailto:contato@whatsbotgpt.store" className="text-[var(--gray-dark)] hover:text-[var(--primary)]">Contatar Suporte</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-dark)] tracking-wider uppercase text-center md:text-left">Contato</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:contato@whatsbotgpt.store" className="flex items-center justify-center md:justify-start text-[var(--gray-dark)] hover:text-[var(--primary)]">
                <svg aria-hidden="true" className="h-5 w-5 mr-2 text-[var(--primary)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 5 8-5H4zm16 12V8l-8 5-8-5v10h16z"/>
                </svg>
                contato@whatsbotgpt.store
              </a>
              <div className="flex items-center justify-center md:justify-start text-[var(--gray-dark)]">
                <svg aria-hidden="true" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 15.5c-1.25 0-2.46-.2-3.58-.58a1.5 1.5 0 00-1.53.36l-2.26 2.26a16 16 0 01-7.02-7.02l2.26-2.26a1.5 1.5 0 00.37-1.54A11.9 11.9 0 018.5 4c0-.55-.45-1-1-1H5a1 1 0 00-1 1C4 13.39 10.61 20 19 20a1 1 0 001-1v-2.5c0-.55-.45-1-1-1z"/>
                </svg>
                <a href="https://wa.me/5511971239515" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">+55 11 97123-9515</a>
              </div>
              <a
                href="https://wa.me/5511971239515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 shadow"
              >
                <svg aria-hidden="true" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.5 0 .24 5.26.24 11.76c0 2.07.54 4.02 1.49 5.73L0 24l6.69-1.75a11.7 11.7 0 005.37 1.37h.01c6.56 0 11.82-5.26 11.82-11.76 0-3.15-1.26-6.1-3.37-8.38zM12.07 21.2h-.01c-1.72 0-3.4-.46-4.87-1.33l-.35-.21-3.97 1.04 1.06-3.87-.23-.4a9.72 9.72 0 01-1.49-5.12c0-5.38 4.4-9.76 9.8-9.76 2.62 0 5.08 1.02 6.93 2.85a9.66 9.66 0 012.87 6.9c0 5.39-4.4 9.76-9.74 9.76zm5.37-7.27c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.14-.18.19-.35.22-.64.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.18.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.36-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.35 5.08 4.7.71.31 1.26.49 1.69.62.71.23 1.36.2 1.88.12.57-.08 1.72-.7 1.97-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.2-.55-.35z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[var(--gray-medium)] text-center md:text-left">&copy; {new Date().getFullYear()} WhatsBotGPT. Todos os direitos reservados.</p>
          <div className="mt-3 md:mt-0 flex items-center space-x-6">
            <a href="mailto:contato@whatsbotgpt.store" className="text-sm text-[var(--gray-dark)] hover:text-[var(--primary)]">Suporte</a>
            <a href="https://wa.me/5511971239515" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--gray-dark)] hover:text-[var(--primary)]">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
