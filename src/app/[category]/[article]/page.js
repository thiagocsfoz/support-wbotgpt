import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
// For now, we'll use a static mapping
const articleData = {
  'primeiros-passos': {
    'criando-conta': {
      title: 'Criando sua Conta e Realizando o Primeiro Login',
      description: 'Aprenda como se cadastrar e configurar sua conta WhatsBotGPT',
      content: `
# Creating your WhatsBotGPT Account

Welcome to WhatsBotGPT! This guide will walk you through the process of creating and setting up your account.

## Prerequisites

Before you begin, make sure you have:
- A valid email address
- A WhatsApp Business account (recommended) or a regular WhatsApp account
- A payment method for subscription (credit card or PayPal)

## Step 1: Sign Up

1. Visit [whatsbotgpt.store](https://whatsbotgpt.store)
2. Click on the **Sign Up** button in the top right corner
3. Enter your email address and create a password
4. Click **Create Account**

## Step 2: Verify Your Email

1. Check your email inbox for a verification message from WhatsBotGPT
2. Click the verification link in the email
3. You'll be redirected to the login page

## Step 3: Complete Your Profile

1. Log in with your email and password
2. Fill out your profile information:
   - Full name
   - Company name (if applicable)
   - Phone number
3. Click **Save Profile**

## Step 4: Choose a Subscription Plan

1. Navigate to the **Plans** page
2. Review the available subscription options
3. Select the plan that best fits your needs
4. Enter your payment information
5. Click **Subscribe**

## Step 5: Access Your Dashboard

After completing the subscription process, you'll be redirected to your dashboard where you can start creating your first bot.

## Troubleshooting

If you encounter any issues during the sign-up process:
- Make sure your email address is entered correctly
- Check that your password meets the minimum requirements
- Clear your browser cache and try again
- Contact support at support@whatsbotgpt.store

Congratulations! You've successfully created your WhatsBotGPT account. The next step is to [conectar seu WhatsApp](/primeiros-passos/conectando-whatsapp).
      `
    },
    'conectando-whatsapp': {
      title: 'Conectando seu WhatsApp',
      description: 'Como conectar sua conta WhatsApp ao WhatsBotGPT',
      content: `
# Configuring Your First Bot

This guide will help you create and configure your first WhatsBot using our platform.

## Prerequisites

Before you begin, make sure you have:
- A WhatsBotGPT account
- Completed the account setup process

## Step 1: Create a New Bot

1. From your dashboard, click the **Create Bot** button
2. Enter a name for your bot (e.g., "Customer Support Bot")
3. Select a category for your bot (e.g., "Customer Service")
4. Click **Create**

## Step 2: Define Bot Personality

1. In the bot settings, navigate to the **Personality** tab
2. Configure the following settings:
   - Tone (Formal, Casual, Friendly)
   - Language (English, Spanish, Portuguese, etc.)
   - Response style (Concise, Detailed)
3. Click **Save Personality**

## Step 3: Set Up Initial Messages

1. Go to the **Messages** tab
2. Configure your welcome message that will be sent when a user first interacts with your bot
3. Set up a fallback message for when the bot doesn't understand a query
4. Click **Save Messages**

## Step 4: Create Automated Responses

1. Navigate to the **Automations** tab
2. Click **Add New Automation**
3. Define a trigger (e.g., specific keywords or phrases)
4. Create the response the bot should provide
5. Click **Save Automation**
6. Repeat for additional automations as needed

## Step 5: Test Your Bot

1. Go to the **Testing** tab
2. Use the chat simulator to test different user inputs
3. Verify that your bot responds correctly
4. Make adjustments as needed

## Step 6: Connect to WhatsApp

After testing and configuring your bot, you'll need to connect it to WhatsApp. See our guide on [Conectando seu WhatsApp](/primeiros-passos/conectando-whatsapp) for detailed instructions.

## Best Practices

- Start with a few simple automations and expand gradually
- Regularly review and update your bot's responses
- Use clear and concise language in your bot's messages
- Test your bot thoroughly before deploying it to customers

Congratulations! You've configured your first bot. The next step is to [conectar seu WhatsApp](/primeiros-passos/conectando-whatsapp).
      `
    },
    'configuracoes-iniciais': {
      title: 'Configurações Iniciais',
      description: 'Configure as opções básicas para começar a usar o WhatsBotGPT',
      content: `
# Connecting Your WhatsApp to WhatsBotGPT

This guide will walk you through the process of connecting your WhatsApp account to your WhatsBotGPT bot.

## Prerequisites

Before you begin, make sure you have:
- A WhatsBotGPT account
- A configured bot
- A WhatsApp Business account (recommended) or a regular WhatsApp account
- Your phone with WhatsApp installed and working

## Connection Methods

WhatsBotGPT offers two ways to connect your WhatsApp:

1. **WhatsApp Business API** (Recommended for businesses)
2. **WhatsApp Web** (Suitable for personal use or small businesses)

## Method 1: Connecting via WhatsApp Business API

### Step 1: Apply for WhatsApp Business API

1. From your WhatsBotGPT dashboard, go to **Connections** > **WhatsApp**
2. Select **WhatsApp Business API**
3. Click **Apply for API Access**
4. Fill out the application form with your business details
5. Submit the application

### Step 2: Verify Your Business

1. Wait for the verification email from Facebook/Meta
2. Follow the instructions to verify your business
3. This process typically takes 1-3 business days

### Step 3: Complete the Connection

1. Once approved, return to WhatsBotGPT dashboard
2. Go to **Connections** > **WhatsApp**
3. Click **Complete API Setup**
4. Follow the on-screen instructions to finalize the connection

## Method 2: Connecting via WhatsApp Web

### Step 1: Initiate Connection

1. From your WhatsBotGPT dashboard, go to **Connections** > **WhatsApp**
2. Select **WhatsApp Web**
3. Click **Connect WhatsApp**

### Step 2: Scan QR Code

1. A QR code will appear on your screen
2. Open WhatsApp on your phone
3. Tap the three dots (⋮) in the top right corner
4. Select **WhatsApp Web**
5. Scan the QR code displayed on your computer screen

### Step 3: Verify Connection

1. Wait for the confirmation message
2. Your WhatsApp is now connected to WhatsBotGPT
3. Keep your phone connected to the internet for the connection to remain active

## Important Notes

- For WhatsApp Web method, your phone must remain connected to the internet
- If using WhatsApp Business API, you'll need to maintain your subscription with both WhatsBotGPT and Meta
- You can disconnect your WhatsApp at any time through the **Connections** menu

## Troubleshooting

If you encounter issues connecting your WhatsApp:
- Ensure your phone has a stable internet connection
- Restart WhatsApp on your phone
- Clear browser cache and try again
- Make sure your WhatsApp is updated to the latest version

Congratulations! Your WhatsApp is now connected to WhatsBotGPT. You can start using your bot to automate conversations with your customers.
      `
    }
  },
  'assistentes': {
    'criando-assistente': {
      title: 'Criando seu Primeiro Assistente',
      description: 'Configure seu bot com personalidade e instruções personalizadas',
      content: `
# Criando seu Primeiro Assistente

Este guia irá ajudá-lo a criar e configurar seu primeiro assistente virtual no WhatsBotGPT.

## Pré-requisitos

Antes de começar, certifique-se de que você tem:
- Uma conta WhatsBotGPT ativa
- Concluído o processo de conexão do WhatsApp

## Passo 1: Acessar a Área de Assistentes

1. Faça login na sua conta WhatsBotGPT
2. No painel principal, clique em **Assistentes** no menu lateral
3. Clique no botão **Criar Novo Assistente**

## Passo 2: Informações Básicas

1. Dê um nome ao seu assistente (ex: "Assistente de Vendas")
2. Escolha um avatar ou faça upload de uma imagem personalizada
3. Selecione o idioma principal do assistente
4. Clique em **Próximo**

## Passo 3: Definir a Personalidade

1. Escolha o tom de comunicação:
   - Formal
   - Casual
   - Amigável
   - Profissional
2. Defina o nível de detalhamento das respostas
3. Configure o estilo de escrita
4. Clique em **Próximo**

## Passo 4: Instruções do Assistente

Esta é a parte mais importante da configuração. Aqui você define exatamente o que seu assistente deve fazer.

1. Na caixa de instruções, descreva:
   - Quem é o assistente (ex: "Você é um assistente de vendas da empresa XYZ")
   - O que ele deve fazer (ex: "Seu objetivo é qualificar leads e agendar demonstrações")
   - Como ele deve se comportar (ex: "Seja cordial mas direto, valorize o tempo do cliente")
   - Informações sobre produtos/serviços que ele deve conhecer
   - Limitações do que ele pode ou não pode fazer

2. Adicione exemplos de perguntas e respostas para treinar seu assistente
3. Clique em **Próximo**

## Passo 5: Configurar Serviços

1. Habilite os serviços que seu assistente irá oferecer:
   - Qualificação de Leads
   - Agendamento
   - FAQ Automático
   - Atendimento Inicial
2. Configure as opções específicas de cada serviço habilitado
3. Clique em **Finalizar**

## Testando seu Assistente

Após criar seu assistente, é importante testá-lo antes de disponibilizá-lo aos seus clientes:

1. Na página do assistente, clique na aba **Testar**
2. Use o simulador de chat para enviar mensagens de teste
3. Verifique se as respostas estão de acordo com o esperado
4. Faça ajustes nas configurações conforme necessário

## Dicas para um Assistente Eficaz

- Seja específico nas instruções
- Forneça exemplos claros de como o assistente deve responder
- Atualize regularmente as informações do assistente
- Analise as conversas para identificar pontos de melhoria

Parabéns! Seu assistente está pronto para começar a atender seus clientes. Para aprender mais sobre como personalizar as instruções e a personalidade do seu assistente, consulte nosso artigo sobre [Personalizando Instruções e Personalidade](/assistentes/personalizando-instrucoes).
      `
    }
  },
  'leads-contatos': {
    'gerenciando-leads': {
      title: 'Gerenciando seus Leads',
      description: 'Aprenda a visualizar e gerenciar os contatos gerados pelo seu bot',
      content: `
# Gerenciando seus Leads

Este guia mostra como visualizar, organizar e gerenciar os leads gerados pelo seu assistente virtual.

## Acessando a Área de Leads

1. Faça login na sua conta WhatsBotGPT
2. No painel principal, clique em **Leads e Contatos** no menu lateral
3. Você verá a lista de todos os contatos que interagiram com seu assistente

## Visualizando Informações dos Leads

Cada lead contém informações importantes coletadas durante as conversas:

1. Informações básicas:
   - Nome
   - Número de telefone
   - Data do primeiro contato
   - Status atual

2. Dados de qualificação:
   - Interesse demonstrado
   - Orçamento (se informado)
   - Urgência da necessidade
   - Estágio no funil de vendas

3. Histórico de interações:
   - Conversas completas com o assistente
   - Agendamentos realizados
   - Documentos compartilhados

## Organizando seus Leads

Para facilitar o gerenciamento, você pode:

1. Criar etiquetas personalizadas:
   - Clique em **Gerenciar Etiquetas**
   - Adicione etiquetas como "Cliente Potencial", "Aguardando Retorno", etc.
   - Atribua cores para identificação visual

2. Segmentar por status:
   - Novo
   - Em andamento
   - Qualificado
   - Convertido
   - Perdido

3. Criar listas personalizadas:
   - Agrupe leads com características semelhantes
   - Crie listas para campanhas específicas

## Exportando Dados

Para usar os dados em outras ferramentas:

1. Selecione os leads desejados
2. Clique em **Exportar**
3. Escolha o formato (CSV, Excel)
4. Selecione quais informações incluir na exportação

## Integrando com CRM

Se você utiliza um sistema de CRM:

1. Acesse **Configurações** > **Integrações**
2. Selecione seu sistema de CRM
3. Siga as instruções para conectar as plataformas
4. Configure a sincronização automática de leads

## Melhores Práticas

- Revise seus leads diariamente
- Atribua etiquetas consistentes
- Acompanhe o histórico de conversas para entender o contexto
- Configure alertas para leads de alta prioridade
- Limpe regularmente sua base de contatos

Para aprender como importar contatos existentes para o WhatsBotGPT, consulte nosso artigo sobre [Importando Contatos](/leads-contatos/importando-contatos).
      `
    }
  },
  'recursos-funcionalidades': {
    'agenda-agendamentos': {
      title: 'Agenda e Agendamentos',
      description: 'Como configurar e gerenciar agendamentos através do seu assistente',
      content: `
# Agenda e Agendamentos

Este guia explica como configurar e utilizar o sistema de agendamentos do WhatsBotGPT para que seu assistente possa marcar compromissos automaticamente.

## Configurando sua Agenda

Antes de permitir que seu assistente faça agendamentos, você precisa configurar sua disponibilidade:

1. No painel principal, acesse **Recursos** > **Agenda**
2. Clique em **Configurar Disponibilidade**
3. Defina seus horários disponíveis para cada dia da semana
4. Configure intervalos entre compromissos (recomendamos 15-30 minutos)
5. Defina feriados e dias especiais em que você não estará disponível
6. Salve suas configurações

## Criando Tipos de Compromissos

Você pode criar diferentes tipos de compromissos que seu assistente poderá agendar:

1. Clique em **Tipos de Compromissos**
2. Selecione **Adicionar Novo Tipo**
3. Configure:
   - Nome (ex: "Demonstração de Produto", "Consulta Inicial")
   - Duração padrão
   - Descrição que o assistente usará para explicar este tipo de compromisso
   - Informações necessárias para agendar (nome, email, telefone, etc.)
   - Local (presencial, online, telefone)
4. Salve o tipo de compromisso

## Integrando com Calendários Externos

Para sincronizar com Google Calendar, Outlook ou outros:

1. Acesse **Configurações da Agenda** > **Integrações**
2. Selecione o serviço de calendário que você utiliza
3. Siga as instruções para autorizar a conexão
4. Escolha quais calendários sincronizar
5. Configure as opções de sincronização bidirecional

## Como o Assistente Agenda Compromissos

Quando configurado, seu assistente poderá:

1. Oferecer agendamento quando identificar a necessidade
2. Mostrar horários disponíveis com base na sua agenda
3. Confirmar detalhes com o cliente
4. Reservar o horário e enviar confirmação
5. Enviar lembretes automáticos antes do compromisso

## Gerenciando Compromissos Agendados

Para visualizar e gerenciar todos os compromissos:

1. Acesse **Agenda** > **Compromissos**
2. Visualize por dia, semana ou mês
3. Clique em um compromisso para:
   - Ver detalhes completos
   - Reagendar
   - Cancelar
   - Adicionar notas
   - Enviar mensagem ao cliente

## Configurando Lembretes Automáticos

Para reduzir faltas e cancelamentos:

1. Acesse **Configurações da Agenda** > **Lembretes**
2. Configure lembretes automáticos para serem enviados:
   - 1 dia antes
   - 3 horas antes
   - 30 minutos antes
3. Personalize as mensagens de lembrete
4. Ative a opção de confirmação nos lembretes

## Análise de Agendamentos

Para otimizar sua agenda:

1. Acesse **Relatórios** > **Agendamentos**
2. Visualize métricas como:
   - Taxa de comparecimento
   - Horários mais populares
   - Tipos de compromissos mais agendados
   - Tempo médio entre agendamento e compromisso

Para aprender sobre outras funcionalidades, consulte nosso artigo sobre [Campanhas de Marketing](/recursos-funcionalidades/campanhas-marketing).
      `
    }
  },
  'conta-faturamento': {
    'gerenciando-plano': {
      title: 'Gerenciando seu Plano',
      description: 'Como fazer upgrade, downgrade ou cancelar sua assinatura',
      content: `
# Gerenciando seu Plano

Este guia explica como gerenciar sua assinatura do WhatsBotGPT, incluindo como fazer upgrade, downgrade ou cancelar seu plano.

## Visualizando seu Plano Atual

Para verificar os detalhes do seu plano atual:

1. Faça login na sua conta WhatsBotGPT
2. Clique no seu nome de usuário no canto superior direito
3. Selecione **Conta e Faturamento**
4. Na seção **Plano Atual**, você verá:
   - Nome do plano
   - Preço
   - Data de renovação
   - Recursos incluídos
   - Limites de uso

## Fazendo Upgrade do Plano

Se você precisa de mais recursos ou atingiu os limites do seu plano atual:

1. Acesse **Conta e Faturamento** > **Planos Disponíveis**
2. Compare os planos disponíveis
3. Clique em **Fazer Upgrade** no plano desejado
4. Revise as mudanças de preço e recursos
5. Confirme o upgrade
6. O valor proporcional será cobrado imediatamente

Benefícios do upgrade:
- Acesso imediato a novos recursos
- Aumento nos limites de uso
- Prioridade no suporte técnico

## Fazendo Downgrade do Plano

Se você deseja reduzir custos:

1. Acesse **Conta e Faturamento** > **Planos Disponíveis**
2. Clique em **Fazer Downgrade** no plano desejado
3. Revise as limitações e recursos que serão removidos
4. Confirme o downgrade
5. A mudança será aplicada no próximo ciclo de faturamento

Importante saber:
- O downgrade não gera reembolso proporcional
- Você manterá os recursos do plano atual até o fim do ciclo de faturamento
- Dados que excedem os limites do novo plano podem ficar inacessíveis

## Cancelando sua Assinatura

Se você deseja cancelar completamente:

1. Acesse **Conta e Faturamento** > **Cancelar Assinatura**
2. Selecione o motivo do cancelamento no formulário
3. Leia as informações sobre o que acontece após o cancelamento
4. Clique em **Confirmar Cancelamento**
5. Você receberá um email confirmando o cancelamento

Após o cancelamento:
- Sua conta permanecerá ativa até o fim do período pago
- Você pode reativar a qualquer momento antes do término
- Após o término, seus dados ficarão disponíveis por 30 dias antes de serem removidos

## Alterando Método de Pagamento

Para atualizar suas informações de pagamento:

1. Acesse **Conta e Faturamento** > **Métodos de Pagamento**
2. Clique em **Adicionar Novo Método** ou **Editar** em um método existente
3. Insira as novas informações
4. Defina o método padrão para cobranças futuras
5. Salve as alterações

## Solução de Problemas de Faturamento

Se você encontrar problemas com cobranças:

1. Verifique seu histórico de pagamentos em **Conta e Faturamento** > **Histórico de Pagamentos**
2. Para problemas específicos, clique em **Suporte de Faturamento**
3. Preencha o formulário detalhando o problema
4. Nossa equipe de faturamento responderá em até 24 horas úteis

Para mais informações sobre sua conta, consulte nosso artigo sobre [Dados Cadastrais](/conta-faturamento/dados-cadastrais).
      `
    }
  },
  'solucao-problemas': {
    'bot-nao-responde': {
      title: 'Meu bot não está respondendo',
      description: 'Solucione problemas de resposta do seu assistente',
      content: `
# Meu bot não está respondendo

Se seu assistente virtual parou de responder às mensagens, siga este guia de solução de problemas para identificar e resolver a questão.

## Verificações Rápidas

Antes de qualquer troubleshooting avançado, verifique o seguinte:

1. **Status da conexão do WhatsApp**
   - Acesse o painel do WhatsBotGPT
   - Verifique se o status da conexão está "Ativo"
   - Confirme se o ícone de status está verde

2. **Limites do plano**
   - Verifique se você não atingiu o limite de mensagens do seu plano
   - Acesse **Conta** > **Uso** para ver suas estatísticas atuais

3. **Status do servidor**
   - Verifique nossa página de status em status.whatsbotgpt.store
   - Problemas nos servidores serão informados lá

## Problemas Comuns e Soluções

### 1. Conexão do WhatsApp Perdida

**Sintomas:**
- Status "Desconectado" no painel
- Mensagens não são recebidas nem enviadas

**Soluções:**
1. Reconecte seu WhatsApp:
   - Vá para **Conexões** > **WhatsApp**
   - Clique em **Reconectar**
   - Escaneie o QR code novamente com seu telefone

2. Verifique seu telefone:
   - Confirme que o telefone está conectado à internet
   - Verifique se o WhatsApp está aberto e funcionando
   - Reinicie o aplicativo WhatsApp

### 2. Assistente Não Processa Mensagens

**Sintomas:**
- Mensagens são recebidas (marcadas como entregues)
- Assistente não envia respostas

**Soluções:**
1. Verifique as configurações do assistente:
   - Acesse **Assistentes** > [Nome do Assistente] > **Configurações**
   - Confirme que o assistente está ativado
   - Verifique se há regras de filtro que podem estar bloqueando as mensagens

2. Reinicie o assistente:
   - Vá para **Assistentes** > [Nome do Assistente]
   - Clique em **Mais opções** (três pontos) > **Reiniciar Assistente**

### 3. Respostas Lentas ou Timeout

**Sintomas:**
- O assistente demora muito para responder
- Algumas mensagens são respondidas, outras não

**Soluções:**
1. Verifique a complexidade das instruções:
   - Instruções muito longas ou complexas podem causar lentidão
   - Simplifique as instruções do assistente temporariamente para testar

2. Verifique a conexão de internet:
   - Problemas de conexão podem afetar o tempo de resposta
   - Teste em uma rede diferente

### 4. Problemas com Conteúdo Específico

**Sintomas:**
- O assistente responde a algumas mensagens mas não a outras
- Falha ao processar certos tipos de conteúdo

**Soluções:**
1. Verifique as políticas de conteúdo:
   - Certifique-se de que o conteúdo não viola nossas políticas
   - Conteúdo sensível pode ser filtrado automaticamente

2. Verifique o formato das mensagens:
   - Mensagens muito longas podem ser truncadas
   - Formatos específicos (como áudio ou documentos) podem não ser suportados no seu plano

## Ferramentas de Diagnóstico

Para problemas persistentes, use nossas ferramentas de diagnóstico:

1. **Teste de Conexão**
   - Acesse **Ferramentas** > **Diagnóstico**
   - Execute o **Teste de Conexão do WhatsApp**
   - Verifique os resultados e siga as recomendações

2. **Logs do Sistema**
   - Acesse **Ferramentas** > **Logs**
   - Filtre por "Erros" ou "Avisos"
   - Procure mensagens relacionadas ao seu assistente

## Quando Contatar o Suporte

Se você tentou todas as soluções acima e o problema persiste:

1. Reúna informações:
   - ID do seu assistente
   - Horário aproximado em que o problema começou
   - Capturas de tela de mensagens de erro
   - Logs relevantes

2. Contate nosso suporte:
   - Email: support@whatsbotgpt.store
   - Chat ao vivo: Disponível em horário comercial
   - Inclua todas as informações coletadas

Para outros problemas comuns, consulte nosso artigo sobre [Problemas de Conexão com WhatsApp](/solucao-problemas/problemas-conexao-whatsapp).
      `
    }
  }
  // Add more articles for other categories as needed
};

export function generateMetadata({ params }) {
  const { category, article } = params;

  if (!articleData[category] || !articleData[category][article]) {
    return {
      title: 'Artigo Não Encontrado'
    };
  }

  const articleInfo = articleData[category][article];

  return {
    title: `${articleInfo.title} - Suporte WhatsBotGPT`,
    description: articleInfo.description
  };
}

export default function ArticlePage({ params }) {
  const { category, article } = params;

  // Check if the article exists
  if (!articleData[category] || !articleData[category][article]) {
    notFound();
  }

  const articleInfo = articleData[category][article];
  const categoryTitle = {
    'primeiros-passos': 'Primeiros Passos',
    'assistentes': 'Assistentes',
    'leads-contatos': 'Leads e Contatos',
    'recursos-funcionalidades': 'Recursos e Funcionalidades',
    'conta-faturamento': 'Conta e Faturamento',
    'solucao-problemas': 'Solução de Problemas'
  }[category];

  // Function to convert markdown-like content to JSX
  // This is a very simplified version - in a real app, you'd use a proper markdown parser
  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-5 mb-2">{line.substring(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 list-disc">{line.substring(2)}</li>;
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || 
                 line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
        return <li key={index} className="ml-6 list-decimal">{line.substring(3)}</li>;
      } else if (line.trim() === '') {
        return <div key={index} className="my-2"></div>;
      } else {
        // Check for bold text
        const boldPattern = /\*\*(.*?)\*\*/g;
        let formattedLine = line;
        let match;
        let parts = [];
        let lastIndex = 0;

        while ((match = boldPattern.exec(formattedLine)) !== null) {
          parts.push(formattedLine.substring(lastIndex, match.index));
          parts.push(<strong key={`${index}-${match.index}`}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }

        parts.push(formattedLine.substring(lastIndex));

        return <p key={index} className="my-2">{parts}</p>;
      }
    });
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">Início</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href={`/${category}`} className="ml-2 text-gray-500 hover:text-gray-700">{categoryTitle}</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">{articleInfo.title}</span>
            </li>
          </ol>
        </nav>

        {/* Article content */}
        <article className="prose prose-blue max-w-none">
          {renderContent(articleInfo.content)}
        </article>

        {/* Article feedback */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Este artigo foi útil?</h3>
          <div className="mt-2 flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Sim, ajudou
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Não, preciso de mais ajuda
            </button>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">Artigos Relacionados</h3>
          <ul className="mt-4 space-y-2">
            {Object.entries(articleData[category] || {})
              .filter(([slug]) => slug !== article)
              .slice(0, 3)
              .map(([slug, info]) => (
                <li key={slug} className="text-blue-600 hover:text-blue-800">
                  <Link href={`/${category}/${slug}`}>{info.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
