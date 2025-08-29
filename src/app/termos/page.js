import Link from 'next/link';

export const metadata = {
  title: 'Termos de Uso | Suporte WhatsBotGPT',
  description: 'Termos de Uso da plataforma WhatsBotGPT: informações sobre conta, planos, pagamentos, privacidade, uso permitido e suporte.'
};

export default function TermosPage() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">Início</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">Termos de Uso</span>
            </li>
          </ol>
        </nav>

        <article className="prose max-w-none">
          <h1>Termos de Uso</h1>
          <p>
            Bem-vindo(a) ao WhatsBotGPT. Ao utilizar nossos produtos e serviços, você concorda com os
            termos e condições descritos abaixo. Recomendamos a leitura atenta deste documento.
          </p>

          <h2>1. Conta e Cadastro</h2>
          <ul>
            <li>Você é responsável por manter a confidencialidade de suas credenciais.</li>
            <li>As informações fornecidas devem ser verdadeiras, completas e atualizadas.</li>
            <li>O uso da conta deve estar em conformidade com a legislação aplicável.</li>
          </ul>

          <h2>2. Planos, Cobranças e Pagamentos</h2>
          <ul>
            <li>Os valores, benefícios e limites de cada plano são informados no momento da contratação.</li>
            <li>As renovações são recorrentes, conforme periodicidade do plano escolhido.</li>
            <li>
              Reembolsos seguem nossa política vigente. Para detalhes, consulte nossa{' '}
              <a className="text-blue-600 hover:text-blue-800" href="https://www.whatsbotgpt.store/politica-de-reembolso" target="_blank" rel="noopener noreferrer">Política de Reembolso</a>.
            </li>
          </ul>

          <h2>3. Uso Permitido</h2>
          <ul>
            <li>É proibido utilizar a plataforma para spam, fraude, assédio ou atividades ilegais.</li>
            <li>Respeite os termos de uso e políticas dos canais integrados, como o WhatsApp.</li>
            <li>O uso excessivo ou em desacordo pode resultar em suspensão ou encerramento da conta.</li>
          </ul>

          <h2>4. Privacidade e Dados</h2>
          <ul>
            <li>Tratamos seus dados conforme nossa Política de Privacidade.</li>
            <li>Dados de contato e conversas podem ser processados para prover o serviço e melhorias.</li>
            <li>Você pode solicitar a exclusão de sua conta e dados conforme previsto em lei.</li>
          </ul>

          <h2>5. Suporte e Comunicações</h2>
          <ul>
            <li>Nosso suporte atende em dias úteis, das 9h às 18h (horário de Brasília).</li>
            <li>
              Canais oficiais de suporte: e-mail <a className="text-blue-600 hover:text-blue-800" href="mailto:contato@whatsbotgpt.store">contato@whatsbotgpt.store</a> e
              <a className="text-blue-600 hover:text-blue-800 ml-1" href="https://wa.me/5511971239515" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
            </li>
          </ul>

          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, marcas, logotipos e funcionalidades da plataforma pertencem ao WhatsBotGPT
            ou a seus licenciadores, e são protegidos por leis de propriedade intelectual.
          </p>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            Na extensão máxima permitida por lei, não nos responsabilizamos por perdas indiretas,
            incidentais ou consequentes decorrentes do uso dos serviços.
          </p>

          <h2>8. Alterações destes Termos</h2>
          <p>
            Podemos atualizar estes Termos de Uso periodicamente. A versão vigente estará sempre
            disponível nesta página. Mudanças materiais poderão ser comunicadas por e-mail ou no painel.
          </p>

          <h2>9. Contato</h2>
          <p>
            Dúvidas sobre estes Termos? Fale com a gente em
            {' '}
            <a className="text-blue-600 hover:text-blue-800" href="mailto:contato@whatsbotgpt.store">contato@whatsbotgpt.store</a>.
          </p>

          <p className="text-sm text-gray-500">Última atualização: 29/08/2025</p>
        </article>
      </div>
    </div>
  );
}
