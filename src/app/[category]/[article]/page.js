import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleFeedbackWrapper from '@/components/ArticleFeedbackWrapper';

// This would typically come from a database or CMS
// For now, we'll use a static mapping
const articleData = {
  'primeiros-passos': {
    'criando-conta': {
      title: 'Criando sua Conta e Realizando o Primeiro Login',
      description: 'Um guia passo a passo para você criar sua conta na WBotGPT, aceitar os termos e fazer seu primeiro acesso à plataforma.',
      content: `
# Criando sua Conta e Realizando o Primeiro Login

Um guia passo a passo para você criar sua conta na WBotGPT, aceitar os termos e fazer seu primeiro acesso à plataforma.

## 1. Como Criar sua Conta

Para começar a usar o WBotGPT, o primeiro passo é criar sua conta pessoal. Siga as instruções abaixo.

### Passo 1: Preencha seus dados no formulário

Acesse a [página de cadastro](https://app.whatsbotgpt.store/auth/register) e preencha os campos do formulário "Crie sua conta" com seu nome, documento (CPF ou CNPJ), e-mail, telefone e senha.

**Observação sobre o campo telefone:** Este número será utilizado para comunicados e atendimento de suporte. Não precisa ser o mesmo que você utilizará para o assistente.

![Formulário de criação de conta](/images/criando-conta/formulario-criacao-conta.png)

### Passo 2: Leia e Aceite os Termos e Políticas

Antes de finalizar, é fundamental ler e concordar com os nossos termos.

Clique em "Termos de Uso" para abrir e ler o documento.

Clique em "Política de Privacidade" para entender como cuidamos dos seus dados, de acordo com a LGPD.

Após a leitura de ambos, marque as duas caixas de seleção confirmando que você leu e concorda.

![Termos de uso e política de privacidade](/images/criando-conta/termos-politica-privacidade.png)

### Passo 3: Finalize o Cadastro

Com todos os campos preenchidos e os termos aceitos, clique no botão verde "Criar conta" para concluir.

Após finalizar o cadastro, o login será realizado automaticamente e você será direcionado para a plataforma. Caso isso não ocorra, você pode realizar o login manualmente através do link: [https://app.whatsbotgpt.store/auth/login](https://app.whatsbotgpt.store/auth/login)

## 2. Como Entrar na sua Conta (Login)

Com a conta criada, você já pode acessar seu painel de controle.

### Passo 1: Acesse a tela de Login

Na página principal do app, clique no link "Já tem uma conta? Faça login". Você será direcionado para a tela "Entrar na conta".

### Passo 2: Preencha suas credenciais

Digite o e-mail e a senha que você acabou de cadastrar e clique no botão verde "Entrar".

![Tela de login](/images/criando-conta/tela-login.png)

## 3. Esqueceu sua Senha?

Caso não se lembre da sua senha, o processo de recuperação é simples.

### Passo 1: Solicite a recuperação

Na tela de login, clique no link "Esqueceu a senha?" ou acesse diretamente [https://app.whatsbotgpt.store/auth/forgot-password](https://app.whatsbotgpt.store/auth/forgot-password).

### Passo 2: Informe seu CPF ou CNPJ

Você será levado a uma nova tela. Digite o seu CPF ou CNPJ de cadastro e clique em "Recuperar minha senha". As instruções para criar uma nova senha serão enviadas para o número de telefone cadastrado.

![Tela de recuperação de senha](/images/criando-conta/recuperacao-senha.png)

## 4. Possíveis Problemas e Soluções

Durante o processo de cadastro ou acesso, você pode encontrar algumas situações que requerem atenção especial. Confira abaixo as soluções para os problemas mais comuns:

### Documento Inválido (CPF ou CNPJ)

Se você receber uma mensagem informando que seu documento é inválido:

- Verifique se digitou corretamente todos os números, sem pontos ou traços
- Confirme se o documento informado está ativo e regular
- Certifique-se de que está selecionando o tipo correto (CPF para pessoa física ou CNPJ para empresa)

### Usuário Já Cadastrado

Se o sistema indicar que seu CPF/CNPJ ou e-mail já está registrado:

- Utilize a opção "[Esqueceu a senha?](#3-esqueceu-sua-senha)" na tela de login
- Informe seu CPF ou CNPJ de cadastro
- Siga as instruções de recuperação enviadas para o número de telefone cadastrado
- Caso não receba a mensagem de recuperação, verifique se o número de telefone cadastrado está correto

### Sem Acesso ao Telefone para Recuperação

Se você não tiver mais acesso ao telefone cadastrado para recuperação:

1. Envie um e-mail para [contato@whatsbotgpt.store](mailto:contato@whatsbotgpt.store) com o assunto "Recuperação de Acesso"
2. Inclua seu nome completo e o e-mail cadastrado
3. Nossa equipe de suporte entrará em contato para verificar sua identidade e auxiliar na recuperação

### Outros Problemas de Acesso

Se você encontrar qualquer outro problema durante o cadastro ou acesso:

- **E-mail de Suporte:** [contato@whatsbotgpt.store](mailto:contato@whatsbotgpt.store)
- **WhatsApp de Suporte:** [+55 11 97123-9515](https://wa.me/5511971239515)

Nossa equipe está disponível para ajudar você a resolver qualquer dificuldade e garantir seu acesso à plataforma.
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
    'personalizando-instrucoes': {
      title: 'Personalizando Instruções e Personalidade',
      description: 'Aprenda a personalizar as instruções e a personalidade do seu assistente para obter melhores resultados',
      content: `
# Personalizando Instruções e Personalidade

Este guia irá ajudá-lo a personalizar as instruções e a personalidade do seu assistente no WhatsBotGPT para obter respostas mais precisas e alinhadas com sua marca.

## Pré-requisitos

Antes de começar, certifique-se de que você tem:
- Uma conta WhatsBotGPT ativa
- Pelo menos um assistente já criado
- Acesso à seção de configurações do assistente

## Por que personalizar seu assistente?

A personalização adequada do seu assistente virtual é fundamental para:

- **Melhorar a qualidade das respostas**: Instruções claras ajudam o assistente a entender exatamente o que você espera
- **Manter consistência com sua marca**: Um assistente com personalidade alinhada à sua marca fortalece sua identidade
- **Aumentar a taxa de conversão**: Assistentes bem configurados têm maior sucesso em atingir objetivos de vendas e suporte
- **Reduzir a necessidade de intervenção humana**: Instruções detalhadas permitem que o assistente resolva mais situações sozinho

## Passo 1: Acessar as Configurações do Assistente

1. Faça login na sua conta WhatsBotGPT
2. No painel principal, clique em **Assistentes** no menu lateral
3. Selecione o assistente que deseja personalizar
4. Clique na aba **Configurações**

## Passo 2: Personalizar as Instruções

As instruções são a parte mais importante da configuração do seu assistente. Elas definem como ele deve se comportar e responder.

### Componentes essenciais das instruções:

1. **Definição de função**: Explique claramente qual é o papel do assistente

   Exemplo: "Você é um assistente de vendas especializado em produtos de tecnologia da empresa ABC."

2. **Conhecimento específico**: Informe o que o assistente deve saber

   Exemplo: "Você conhece todos os detalhes técnicos dos smartphones, notebooks e acessórios da nossa linha."

3. **Limitações**: Defina o que o assistente NÃO deve fazer

   Exemplo: "Você não deve oferecer descontos acima de 10% sem autorização. Não deve discutir produtos de concorrentes."

4. **Fluxo de conversação**: Oriente como a conversa deve fluir

   Exemplo: "Primeiro cumprimente o cliente, depois pergunte como pode ajudar. Se o cliente demonstrar interesse em um produto, apresente suas características e pergunte se deseja mais informações."

5. **Respostas a perguntas comuns**: Forneça respostas padronizadas para perguntas frequentes

   Exemplo: "Se perguntarem sobre garantia, informe que todos os produtos têm 1 ano de garantia com possibilidade de extensão."

### Dicas para instruções eficazes:

- **Seja específico**: Quanto mais detalhadas forem suas instruções, melhores serão os resultados
- **Use exemplos**: Inclua exemplos de perguntas e respostas ideais
- **Atualize regularmente**: Revise e aprimore as instruções com base no desempenho do assistente
- **Teste diferentes abordagens**: Experimente variações nas instruções para encontrar o que funciona melhor

## Passo 3: Definir a Personalidade

A personalidade do seu assistente define o tom e estilo de comunicação.

### Elementos de personalidade:

1. Na seção **Personalidade**, configure:

   - **Tom de voz**: Formal, casual, amigável, técnico, etc.

   Exemplo formal: "Agradecemos seu contato. Podemos auxiliá-lo com sua solicitação."

   Exemplo casual: "Oi! Tudo bem? Como posso te ajudar hoje?"

   - **Nível de formalidade**: Defina se o assistente deve usar linguagem formal ou informal

   - **Uso de emojis**: Configure se e quando o assistente deve usar emojis

   Exemplo: "Obrigado pelo seu contato 😊"

   - **Extensão das respostas**: Defina se as respostas devem ser concisas ou detalhadas

2. Clique em **Salvar Personalidade** após as configurações

### Exemplos de personalidades:

- **Assistente de Suporte Técnico**:

  Tom: Técnico mas acessível
  Formalidade: Moderada
  Emojis: Uso limitado
  Respostas: Detalhadas e passo-a-passo

- **Assistente de Vendas**:

  Tom: Entusiástico e persuasivo
  Formalidade: Casual
  Emojis: Uso moderado
  Respostas: Equilibradas, destacando benefícios

- **Assistente de Atendimento ao Cliente**:

  Tom: Empático e solícito
  Formalidade: Adaptável ao cliente
  Emojis: Uso ocasional
  Respostas: Diretas, focadas na resolução

## Passo 4: Testar e Refinar

Após configurar as instruções e personalidade:

1. Use o **Modo de Teste** para simular conversas
2. Analise as respostas e identifique pontos de melhoria
3. Ajuste as instruções e personalidade conforme necessário
4. Repita o processo até obter resultados satisfatórios

## Exemplos Práticos

### Exemplo 1: Assistente de Reservas de Restaurante

**Instruções:**

Você é um assistente de reservas do Restaurante Sabor & Arte.
Seu objetivo é facilitar o processo de reserva de mesas.
Pergunte: data, horário, número de pessoas e preferências (área interna ou externa).
Informe que reservas devem ser feitas com pelo menos 2 horas de antecedência.
Para grupos acima de 8 pessoas, mencione que há taxa de serviço de 15%.
Horário de funcionamento: Terça a Domingo, 18h às 23h. Fechado às Segundas.

**Personalidade:**

Tom: Sofisticado e acolhedor
Formalidade: Moderada a alta
Emojis: Uso mínimo e seletivo
Respostas: Concisas mas completas

### Exemplo 2: Assistente de Suporte Técnico

**Instruções:**

Você é um assistente técnico da TechSupport Inc.
Ajude os clientes a resolverem problemas com nossos softwares.
Sempre peça informações como: versão do software, sistema operacional e descrição detalhada do problema.
Para problemas comuns, forneça soluções passo a passo.
Se o problema persistir após as soluções básicas, ofereça escalação para um técnico humano.
Nunca forneça informações sobre produtos em desenvolvimento ou datas de lançamento não anunciadas.

**Personalidade:**

Tom: Técnico mas amigável
Formalidade: Moderada
Emojis: Uso ocasional para confirmar sucesso
Respostas: Detalhadas e estruturadas em passos

## Considerações Finais

- **Monitore o desempenho**: Analise regularmente as conversas para identificar oportunidades de melhoria
- **Colete feedback**: Pergunte aos usuários sobre a experiência com o assistente
- **Faça ajustes graduais**: Modifique um aspecto de cada vez para avaliar o impacto
- **Mantenha-se atualizado**: Revise as instruções quando houver mudanças em produtos, políticas ou processos

Personalizar adequadamente seu assistente é um processo contínuo que traz resultados cada vez melhores ao longo do tempo. Com instruções claras e personalidade bem definida, seu assistente se tornará uma extensão valiosa da sua equipe.

Para mais informações sobre como criar seu primeiro assistente, consulte nosso guia [Criando seu Primeiro Assistente](/assistentes/criando-assistente).
      `
    },
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
    },
    'personalizando-instrucoes': {
      title: 'Personalizando Instruções e Personalidade',
      description: 'Aprenda a definir como seu assistente deve se comportar e responder',
      content: `
# Personalizando Instruções e Personalidade

Este guia detalhado mostra como personalizar as instruções e a personalidade do seu assistente para obter respostas mais precisas e alinhadas com sua marca.

## Entendendo a Importância das Instruções

As instruções são o "cérebro" do seu assistente - elas definem como ele entende e responde às mensagens dos clientes.

### Por que as instruções são importantes:

- Determinam o tom e estilo de comunicação
- Definem o conhecimento específico do assistente
- Estabelecem limites do que o assistente pode ou não fazer
- Influenciam diretamente a qualidade das respostas

## Acessando as Configurações de Personalidade

1. Faça login na sua conta WhatsBotGPT
2. Acesse **Assistentes** no menu lateral
3. Selecione o assistente que deseja personalizar
4. Clique na aba **Personalidade e Instruções**

## Configurando a Personalidade

A personalidade define o "caráter" do seu assistente nas interações.

### Elementos da Personalidade:

1. **Tom de Voz**
   - Formal: Linguagem corporativa e profissional
   - Casual: Comunicação descontraída mas profissional
   - Amigável: Tom caloroso e próximo
   - Técnico: Focado em precisão e detalhes

2. **Nível de Formalidade**
   - Use o controle deslizante para ajustar de muito formal a muito informal

3. **Verbosidade**
   - Conciso: Respostas diretas e objetivas
   - Detalhado: Respostas completas e explicativas
   - Equilibrado: Meio termo entre os dois extremos

4. **Emojis e Linguagem**
   - Configure a frequência de uso de emojis
   - Defina expressões características para seu assistente

## Escrevendo Instruções Eficazes

As instruções são escritas em formato de texto livre, mas seguir uma estrutura ajuda a obter melhores resultados.

### Estrutura Recomendada:

1. **Identidade do Assistente**
   Exemplo: "Você é um assistente de vendas da empresa XYZ, especializada em soluções de automação industrial."

2. **Objetivo Principal**
   Exemplo: "Seu principal objetivo é qualificar leads, responder dúvidas sobre nossos produtos e agendar demonstrações com nossa equipe de vendas."

3. **Conhecimento Específico**
   Exemplo: "Você conhece detalhadamente nossa linha de produtos, incluindo o Automator Pro (R$5.000/mês), Automator Lite (R$2.500/mês) e Automator Basic (R$1.200/mês)."

4. **Comportamento e Tom**
   Exemplo: "Seja sempre cordial e profissional. Use linguagem técnica quando apropriado, mas explique termos complexos quando necessário. Evite gírias e mantenha um tom consultivo."

5. **Limitações e Redirecionamentos**
   Exemplo: "Você não pode oferecer descontos ou condições especiais. Quando solicitado, informe que encaminhará a solicitação para a equipe comercial. Para questões técnicas complexas, ofereça agendar uma consulta com um especialista."

## Exemplos de Interações

Adicionar exemplos de perguntas e respostas ajuda a "treinar" seu assistente:

### Exemplo 1:
**Usuário:** Quanto custa o plano básico?
**Assistente:** O Automator Basic custa R$1.200 por mês e inclui até 5 usuários, 10 automações e suporte por email. Posso detalhar os recursos incluídos ou você gostaria de conhecer outros planos?

### Exemplo 2:
**Usuário:** Vocês dão desconto para contrato anual?
**Assistente:** Entendo seu interesse em economia. Embora eu não possa oferecer descontos diretamente, nossa empresa geralmente oferece condições especiais para contratos anuais. Posso encaminhar sua solicitação para um de nossos consultores comerciais entrar em contato com você. Você teria interesse?

## Testando e Refinando

Após configurar a personalidade e instruções:

1. Use o **Simulador de Chat** para testar diferentes cenários
2. Verifique se as respostas estão alinhadas com suas expectativas
3. Refine as instruções com base nos resultados
4. Faça ajustes graduais e teste novamente

## Melhores Práticas

- Seja específico e detalhado nas instruções
- Inclua informações atualizadas sobre produtos e serviços
- Revise e atualize as instruções regularmente
- Analise conversas reais para identificar pontos de melhoria
- Equilibre personalidade com profissionalismo

Para aprender como configurar serviços automatizados para seu assistente, consulte nosso artigo sobre [Configurando Serviços Automatizados](/assistentes/configurando-servicos).
      `
    },
    'configurando-servicos': {
      title: 'Configurando Serviços Automatizados',
      description: 'Configure seu assistente para realizar tarefas específicas automaticamente',
      content: `
# Configurando Serviços Automatizados

Este guia explica como configurar os serviços automatizados do seu assistente para realizar tarefas específicas sem intervenção humana.

## O que são Serviços Automatizados?

Os serviços automatizados são funcionalidades pré-configuradas que permitem que seu assistente execute tarefas específicas de forma autônoma, como:

- Qualificação de leads
- Agendamento de compromissos
- Envio de documentos
- Respostas a perguntas frequentes
- Coleta de informações de clientes

## Acessando a Configuração de Serviços

1. Faça login na sua conta WhatsBotGPT
2. Acesse **Assistentes** no menu lateral
3. Selecione o assistente desejado
4. Clique na aba **Serviços Automatizados**

## Serviços Disponíveis

### 1. Qualificação de Leads

Este serviço permite que seu assistente colete informações importantes dos clientes para qualificá-los como leads.

#### Como configurar:

1. Ative o serviço **Qualificação de Leads**
2. Configure as perguntas de qualificação:
   - Nome
   - Email
   - Telefone
   - Empresa
   - Cargo
   - Orçamento disponível
   - Prazo para implementação
   - Como conheceu a empresa
3. Defina a ordem das perguntas
4. Configure mensagens de transição entre perguntas
5. Estabeleça critérios de qualificação (ex: leads quentes, mornos, frios)
6. Defina ações automáticas para cada tipo de lead

### 2. Agendamento Automático

Permite que seu assistente marque compromissos diretamente na sua agenda.

#### Como configurar:

1. Ative o serviço **Agendamento**
2. Conecte seu calendário (Google Calendar, Outlook, etc.)
3. Configure sua disponibilidade:
   - Dias da semana
   - Horários disponíveis
   - Duração padrão dos compromissos
   - Intervalo entre compromissos
4. Defina tipos de compromissos (ex: demonstração, consultoria, suporte)
5. Configure mensagens de confirmação e lembretes
6. Estabeleça regras para reagendamento e cancelamento

### 3. FAQ Automático

Permite que seu assistente responda automaticamente às perguntas frequentes.

#### Como configurar:

1. Ative o serviço **FAQ Automático**
2. Adicione perguntas frequentes e suas respostas:
   - Digite a pergunta como o cliente poderia formulá-la
   - Adicione variações da mesma pergunta
   - Escreva uma resposta detalhada
   - Adicione links ou recursos relacionados
3. Organize as perguntas por categorias
4. Configure o nível de correspondência (exato ou aproximado)
5. Defina respostas para quando não houver correspondência

### 4. Coleta de Dados

Permite que seu assistente colete e armazene informações específicas durante a conversa.

#### Como configurar:

1. Ative o serviço **Coleta de Dados**
2. Crie formulários personalizados com os campos desejados
3. Configure gatilhos para iniciar a coleta (palavras-chave ou contexto)
4. Defina mensagens de solicitação para cada campo
5. Configure validações para os dados coletados
6. Estabeleça ações pós-coleta (ex: enviar para CRM, notificar equipe)

## Integrações com Sistemas Externos

Para maximizar a eficiência dos serviços automatizados, configure integrações com:

1. **CRM**
   - Salesforce
   - HubSpot
   - Pipedrive
   - RD Station

2. **Ferramentas de Marketing**
   - Mailchimp
   - ActiveCampaign
   - RD Station Marketing

3. **Sistemas de Helpdesk**
   - Zendesk
   - Freshdesk
   - Intercom

## Monitoramento e Otimização

Após configurar os serviços:

1. Monitore o desempenho através do painel de **Análises**
2. Verifique métricas como:
   - Taxa de conclusão de cada serviço
   - Tempo médio de execução
   - Pontos de abandono
3. Analise conversas para identificar oportunidades de melhoria
4. Ajuste as configurações com base nos dados coletados

## Melhores Práticas

- Comece com poucos serviços e expanda gradualmente
- Teste exaustivamente antes de disponibilizar para clientes reais
- Mantenha as perguntas claras e objetivas
- Configure mensagens de fallback para situações imprevistas
- Revise e atualize regularmente as configurações

Para aprender mais sobre como gerenciar os leads gerados pelo seu assistente, consulte nosso artigo sobre [Gerenciando seus Leads](/leads-contatos/gerenciando-leads).
      `
    }
  },
  'leads-contatos': {
    'importando-contatos': {
      title: 'Importando Contatos',
      description: 'Aprenda como importar contatos externos para o WhatsBotGPT',
      content: `
# Importando Contatos

Este guia explica como importar contatos externos para o WhatsBotGPT, permitindo que você utilize sua base de clientes existente para iniciar conversas e campanhas.

## Visão Geral

A importação de contatos permite que você:
- Migre sua base de clientes de outras plataformas
- Organize contatos em listas segmentadas
- Inicie campanhas direcionadas
- Gerencie todos os seus contatos em um único lugar

## Formatos Suportados

O WhatsBotGPT suporta a importação de contatos nos seguintes formatos:

- Planilhas Excel (.xlsx)
- Arquivos CSV (.csv)
- Arquivos de texto (.txt) com valores separados por vírgula
- Contatos exportados do Google Contacts
- Contatos exportados de CRMs populares (Salesforce, HubSpot, etc.)

## Preparando seus Contatos para Importação

Antes de importar, certifique-se de que sua lista de contatos esteja formatada corretamente:

### Requisitos Básicos:

1. **Números de telefone formatados corretamente**:
   - Inclua o código do país (ex: +55 para Brasil)
   - Remova caracteres especiais como parênteses, traços ou espaços
   - Formato recomendado: 5511999999999

2. **Cabeçalhos das colunas**:
   - Sua planilha deve ter cabeçalhos claros
   - O sistema reconhecerá automaticamente colunas como "Nome", "Telefone", "Email", etc.

3. **Dados adicionais**:
   - Você pode incluir informações adicionais como empresa, cargo, etc.
   - Essas informações serão importadas como atributos do contato

### Exemplo de Planilha Formatada:

| Nome | Telefone | Email | Empresa | Cargo |
|------|----------|-------|---------|-------|
| João Silva | 5511999999999 | joao@empresa.com | Empresa XYZ | Gerente |
| Maria Santos | 5521888888888 | maria@empresa.com | Empresa ABC | Diretora |

## Processo de Importação

Siga estes passos para importar seus contatos:

### Passo 1: Acesse a Área de Importação

1. Faça login na sua conta WhatsBotGPT
2. No menu lateral, clique em **Leads e Contatos**
3. Clique no botão **Importar Contatos**

### Passo 2: Faça Upload do Arquivo

1. Clique em **Escolher Arquivo** ou arraste e solte seu arquivo na área indicada
2. Selecione o arquivo de contatos no seu computador
3. Clique em **Fazer Upload**

### Passo 3: Mapeie os Campos

1. O sistema mostrará uma prévia dos dados detectados
2. Verifique se os campos foram mapeados corretamente:
   - Confirme que "Nome" está mapeado para a coluna de nomes
   - Confirme que "Telefone" está mapeado para a coluna de telefones
   - Mapeie campos adicionais conforme necessário
3. Clique em **Continuar**

### Passo 4: Crie uma Lista (Opcional)

1. Escolha se deseja adicionar os contatos a uma lista existente ou criar uma nova
2. Para criar uma nova lista:
   - Digite um nome para a lista (ex: "Clientes 2023")
   - Adicione uma descrição (opcional)
   - Selecione uma cor para identificação visual
3. Clique em **Continuar**

### Passo 5: Revise e Confirme

1. Verifique o resumo da importação:
   - Número total de contatos a serem importados
   - Possíveis duplicatas detectadas
   - Contatos com dados incompletos
2. Escolha como lidar com duplicatas:
   - Ignorar contatos duplicados
   - Atualizar informações de contatos existentes
   - Manter ambos (criar duplicatas)
3. Clique em **Confirmar Importação**

## Verificação de Números

Após a importação, o WhatsBotGPT verificará automaticamente quais números estão ativos no WhatsApp:

1. O sistema fará uma verificação em lote dos números importados
2. Contatos sem WhatsApp serão marcados como "Inativo no WhatsApp"
3. Você pode filtrar sua lista para mostrar apenas contatos ativos

## Gerenciando Contatos Importados

Após a importação, você pode:

1. **Segmentar contatos**:
   - Criar listas baseadas em atributos
   - Adicionar etiquetas personalizadas
   - Filtrar por dados demográficos ou comportamentais

2. **Iniciar conversas**:
   - Enviar mensagens individuais
   - Criar campanhas para grupos específicos
   - Configurar mensagens automáticas de boas-vindas

3. **Exportar contatos**:
   - Exportar listas completas ou filtradas
   - Escolher o formato de exportação
   - Selecionar quais campos incluir na exportação

## Limitações e Boas Práticas

### Limitações:

- Máximo de 5.000 contatos por importação
- Tamanho máximo do arquivo: 10MB
- Respeite as políticas do WhatsApp sobre mensagens em massa

### Boas Práticas:

- Obtenha consentimento antes de enviar mensagens
- Segmente suas listas para comunicações mais relevantes
- Mantenha suas listas de contatos atualizadas
- Respeite as preferências de comunicação dos contatos
- Ofereça sempre uma opção de cancelamento de inscrição

## Solução de Problemas

### Problemas Comuns:

1. **Erro de formato de arquivo**:
   - Certifique-se de que está usando um dos formatos suportados
   - Tente salvar novamente o arquivo em formato .xlsx ou .csv

2. **Números de telefone não reconhecidos**:
   - Verifique se os números incluem o código do país
   - Remova formatação especial (parênteses, traços, espaços)

3. **Falha na importação**:
   - Verifique se o arquivo não excede o limite de tamanho
   - Certifique-se de que não há caracteres especiais nos cabeçalhos

Para mais informações sobre como gerenciar seus contatos após a importação, consulte nosso artigo sobre [Gerenciando seus Leads](/leads-contatos/gerenciando-leads).
      `
    },
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
    },
    'importando-contatos': {
      title: 'Importando Contatos',
      description: 'Como importar contatos existentes para o WhatsBotGPT',
      content: `
# Importando Contatos

Este guia explica como importar seus contatos existentes para o WhatsBotGPT, permitindo que você aproveite sua base de clientes atual com seu assistente virtual.

## Benefícios de Importar Contatos

Importar seus contatos para o WhatsBotGPT oferece diversas vantagens:

- Iniciar conversas proativamente com clientes existentes
- Segmentar contatos para campanhas específicas
- Manter todo o histórico de relacionamento em um só lugar
- Aplicar automações personalizadas para diferentes grupos

## Métodos de Importação

O WhatsBotGPT oferece três métodos principais para importar contatos:

### 1. Importação via Arquivo

O método mais comum para importar grandes listas de contatos.

#### Formatos suportados:
- CSV (valores separados por vírgula)
- XLSX (Excel)
- VCF (vCard)

#### Passo a passo:

1. Acesse **Leads e Contatos** > **Importar Contatos**
2. Selecione **Importar Arquivo**
3. Clique em **Escolher Arquivo** e selecione seu arquivo
4. Mapeie as colunas do seu arquivo com os campos do WhatsBotGPT:
   - Número de telefone (obrigatório)
   - Nome
   - Email
   - Empresa
   - Cargo
   - Campos personalizados
5. Defina configurações adicionais:
   - Pular primeira linha (se contiver cabeçalhos)
   - Formato do número de telefone
   - Tratamento de duplicatas
6. Clique em **Iniciar Importação**

### 2. Integração com CRM/Ferramentas

Para sincronização contínua com suas ferramentas existentes.

#### Plataformas suportadas:
- Salesforce
- HubSpot
- Pipedrive
- RD Station
- Mailchimp
- Google Contacts

#### Passo a passo:

1. Acesse **Configurações** > **Integrações**
2. Selecione a plataforma desejada
3. Clique em **Conectar**
4. Faça login na sua conta da plataforma
5. Autorize o acesso do WhatsBotGPT
6. Configure as opções de sincronização:
   - Frequência (tempo real, diária, semanal)
   - Direção (unidirecional ou bidirecional)
   - Filtros de contatos
7. Clique em **Salvar**

### 3. Importação Manual

Para adicionar contatos individuais ou em pequenas quantidades.

#### Passo a passo:

1. Acesse **Leads e Contatos** > **Todos os Contatos**
2. Clique em **Adicionar Contato**
3. Preencha os campos:
   - Número de telefone (com código do país)
   - Nome
   - Email
   - Informações adicionais
4. Clique em **Salvar**
5. Repita o processo para cada contato

## Preparando sua Lista de Contatos

Para garantir uma importação bem-sucedida:

1. **Formato do número de telefone**
   - Use o formato internacional: +55 11 98765-4321
   - Remova caracteres especiais como parênteses e traços
   - Inclua o código do país (ex: +55 para Brasil)

2. **Limpeza de dados**
   - Remova contatos duplicados
   - Verifique números inválidos
   - Atualize informações desatualizadas

3. **Conformidade com LGPD/GDPR**
   - Certifique-se de ter consentimento para contatar as pessoas
   - Inclua a origem do contato e data de consentimento
   - Prepare-se para gerenciar solicitações de exclusão

## Organizando Contatos Importados

Após a importação, organize seus contatos para facilitar o gerenciamento:

1. **Criar Segmentos**
   - Acesse **Leads e Contatos** > **Segmentos**
   - Clique em **Novo Segmento**
   - Defina critérios (ex: localização, origem, interesses)
   - Nomeie o segmento e salve

2. **Aplicar Etiquetas**
   - Selecione os contatos importados
   - Clique em **Ações em Massa** > **Adicionar Etiqueta**
   - Crie ou selecione etiquetas relevantes

3. **Definir Responsáveis**
   - Atribua contatos a membros específicos da equipe
   - Configure notificações para novos contatos

## Iniciando Contato

Após importar seus contatos:

1. **Mensagem de Boas-vindas**
   - Crie uma mensagem personalizada de apresentação
   - Explique como seu assistente pode ajudar
   - Ofereça opções claras de interação inicial

2. **Campanhas Segmentadas**
   - Envie mensagens específicas para diferentes segmentos
   - Programe envios em horários adequados
   - Monitore taxas de resposta

## Solução de Problemas Comuns

### Números Rejeitados

Se alguns números não forem importados:

1. Verifique o formato do número
2. Confirme se o número está ativo no WhatsApp
3. Verifique se o país é suportado pela plataforma

### Falha na Sincronização com CRM

Se a sincronização com seu CRM falhar:

1. Verifique as permissões de API
2. Reconecte as contas
3. Contate o suporte técnico

Para aprender como qualificar seus leads após a importação, consulte nosso artigo sobre [Qualificação de Leads](/leads-contatos/qualificacao-leads).
      `
    },
    'qualificacao-leads': {
      title: 'Qualificação de Leads',
      description: 'Estratégias para qualificar leads através do seu assistente',
      content: `
# Qualificação de Leads

Este guia apresenta estratégias eficazes para qualificar leads através do seu assistente virtual, transformando conversas em oportunidades de negócio qualificadas.

## O que é Qualificação de Leads?

A qualificação de leads é o processo de avaliar o potencial de um contato se tornar cliente, com base em critérios como:

- Necessidade do produto/serviço
- Capacidade de compra
- Autoridade para tomar decisões
- Timing (urgência da necessidade)
- Alinhamento com seu público-alvo

## Configurando seu Assistente para Qualificação

### Passo 1: Ativar o Módulo de Qualificação

1. Acesse **Assistentes** > [Nome do Assistente] > **Serviços**
2. Ative o serviço **Qualificação de Leads**
3. Clique em **Configurar**

### Passo 2: Definir Critérios de Qualificação

Configure os critérios que seu assistente usará para qualificar leads:

1. **Informações de Contato**
   - Nome completo
   - Email corporativo
   - Telefone
   - Empresa
   - Cargo

2. **Critérios BANT**
   - **B**udget (Orçamento): Qual o orçamento disponível?
   - **A**uthority (Autoridade): Quem toma a decisão de compra?
   - **N**eed (Necessidade): Qual problema precisa ser resolvido?
   - **T**imeframe (Prazo): Quando precisa implementar a solução?

3. **Critérios Adicionais**
   - Tamanho da empresa
   - Setor de atuação
   - Soluções atuais
   - Desafios específicos

### Passo 3: Criar Fluxo de Perguntas

Defina a sequência de perguntas que seu assistente fará:

1. Comece com perguntas simples e não invasivas
2. Progrida para perguntas mais específicas
3. Adapte as próximas perguntas com base nas respostas anteriores
4. Configure mensagens de transição entre perguntas

### Passo 4: Configurar Pontuação (Lead Scoring)

Atribua pontos para diferentes respostas:

1. Acesse a seção **Pontuação de Leads**
2. Para cada pergunta, defina pontuações para possíveis respostas
3. Configure faixas de classificação:
   - Lead Quente: 80-100 pontos
   - Lead Morno: 50-79 pontos
   - Lead Frio: 0-49 pontos

### Passo 5: Definir Ações Automáticas

Configure o que acontece após a qualificação:

1. **Para Leads Quentes**:
   - Notificar equipe de vendas imediatamente
   - Agendar demonstração
   - Enviar material detalhado

2. **Para Leads Mornos**:
   - Enviar conteúdo educativo
   - Programar follow-up em 3-5 dias
   - Oferecer webinar ou demonstração em grupo

3. **Para Leads Frios**:
   - Adicionar à lista de nutrição
   - Enviar newsletter
   - Reavaliar após 30 dias

## Estratégias de Conversação para Qualificação

### Abordagem Consultiva

Treine seu assistente para usar uma abordagem consultiva:

1. **Fazer perguntas abertas**
   - "Quais desafios sua empresa enfrenta com...?"
   - "Como você lida atualmente com...?"
   - "O que você espera alcançar com uma solução como a nossa?"

2. **Identificar dores**
   - "Qual parte do processo atual mais te incomoda?"
   - "Quanto tempo/dinheiro você perde com esse problema?"
   - "Como esse problema afeta outros aspectos do negócio?"

3. **Explorar consequências**
   - "O que acontece se esse problema não for resolvido?"
   - "Como isso afeta seus resultados/equipe/clientes?"

4. **Apresentar valor**
   - "Com base no que você compartilhou, nossa solução poderia ajudar a..."
   - "Outros clientes com desafios similares conseguiram..."

### Personalização por Segmento

Configure qualificações específicas para diferentes segmentos:

1. **Por tamanho de empresa**
   - Pequenas empresas: foco em custo e facilidade de implementação
   - Médias empresas: foco em escalabilidade e ROI
   - Grandes empresas: foco em integração e suporte enterprise

2. **Por setor**
   - Crie perguntas específicas para cada indústria
   - Utilize terminologia adequada ao setor
   - Mencione cases relevantes do mesmo segmento

## Analisando Resultados

Monitore e otimize seu processo de qualificação:

1. Acesse **Relatórios** > **Qualificação de Leads**
2. Analise métricas como:
   - Taxa de conclusão do processo de qualificação
   - Distribuição de leads por categoria (quente/morno/frio)
   - Tempo médio de qualificação
   - Perguntas com maior taxa de abandono

3. Refine seu processo com base nos dados:
   - Ajuste perguntas problemáticas
   - Reordene o fluxo de qualificação
   - Atualize critérios de pontuação

## Integrando com seu Funil de Vendas

Conecte a qualificação de leads ao seu processo de vendas:

1. **Integração com CRM**
   - Envie leads qualificados automaticamente para seu CRM
   - Sincronize status e atualizações
   - Mantenha histórico de interações

2. **Automação de Follow-up**
   - Configure sequências de follow-up baseadas na qualificação
   - Programe lembretes para equipe de vendas
   - Automatize requalificação após período específico

## Melhores Práticas

- Mantenha o processo de qualificação conciso (5-7 perguntas)
- Equilibre coleta de informações com geração de valor
- Personalize a abordagem com base em informações já conhecidas
- Teste diferentes sequências de perguntas
- Revise e atualize seus critérios regularmente

Para aprender como criar campanhas de marketing para seus leads qualificados, consulte nosso artigo sobre [Campanhas de Marketing](/recursos-funcionalidades/campanhas-marketing).
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
    },
    'campanhas-marketing': {
      title: 'Campanhas de Marketing',
      description: 'Crie e gerencie campanhas de marketing automatizadas',
      content: `
# Campanhas de Marketing

Este guia explica como criar e gerenciar campanhas de marketing automatizadas através do WhatsBotGPT para engajar seus contatos de forma eficiente e personalizada.

## O que são Campanhas de Marketing no WhatsBotGPT?

As campanhas de marketing no WhatsBotGPT são sequências de mensagens automatizadas enviadas para grupos específicos de contatos, com o objetivo de:

- Nutrir leads
- Anunciar novos produtos ou serviços
- Reengajar clientes inativos
- Compartilhar conteúdo relevante
- Coletar feedback
- Impulsionar vendas

## Acessando o Módulo de Campanhas

1. Faça login na sua conta WhatsBotGPT
2. No painel principal, acesse **Recursos** > **Campanhas de Marketing**
3. Você verá a lista de campanhas existentes ou a opção para criar uma nova

## Criando sua Primeira Campanha

### Passo 1: Configurações Básicas

1. Clique em **Nova Campanha**
2. Defina as informações básicas:
   - Nome da campanha (para referência interna)
   - Objetivo (conversão, engajamento, informativo)
   - Data de início
   - Data de término (opcional)

### Passo 2: Definir Público-Alvo

Selecione quem receberá sua campanha:

1. Clique em **Definir Público**
2. Escolha uma das opções:
   - **Segmento existente**: Selecione um segmento já criado
   - **Criar novo segmento**: Defina critérios específicos
   - **Importar lista**: Faça upload de uma lista específica para esta campanha
3. Refine seu público com filtros adicionais:
   - Interações anteriores
   - Dados demográficos
   - Comportamento no WhatsApp
   - Status de qualificação

### Passo 3: Criar Sequência de Mensagens

Configure as mensagens que serão enviadas durante a campanha:

1. Clique em **Adicionar Mensagem**
2. Para cada mensagem, defina:
   - **Conteúdo**: Texto, imagem, vídeo, documento, etc.
   - **Tempo de envio**: Imediato, após X dias, em data específica, ou baseado em ação
   - **Condições**: Regras para envio baseadas em comportamento
   - **Personalização**: Campos dinâmicos como nome, empresa, etc.

3. Adicione mais mensagens clicando em **+ Nova Mensagem**
4. Organize a sequência arrastando e soltando as mensagens

### Passo 4: Configurar Ramificações e Condições

Crie fluxos personalizados baseados nas respostas:

1. Selecione uma mensagem e clique em **Adicionar Ramificação**
2. Defina condições como:
   - Resposta contém palavras específicas
   - Clicou em um link
   - Não respondeu em X dias
3. Para cada condição, crie um caminho diferente de mensagens

### Passo 5: Revisar e Ativar

1. Clique em **Visualizar Campanha** para ver o fluxo completo
2. Use **Testar Campanha** para enviar as mensagens para seu próprio número
3. Faça ajustes necessários
4. Quando estiver pronto, clique em **Ativar Campanha**

## Tipos de Campanhas

### Campanha de Boas-vindas

Ideal para novos contatos:

1. Mensagem 1: Boas-vindas e apresentação
2. Mensagem 2 (1 dia depois): Principais benefícios do seu produto/serviço
3. Mensagem 3 (3 dias depois): Convite para agendar demonstração

### Campanha de Nutrição de Leads

Para educar e qualificar leads:

1. Mensagem 1: Conteúdo educativo sobre um problema comum
2. Mensagem 2 (4 dias depois): Solução para o problema
3. Mensagem 3 (7 dias depois): Case de sucesso relacionado
4. Mensagem 4 (10 dias depois): Oferta especial ou demonstração

### Campanha de Reengajamento

Para reativar clientes inativos:

1. Mensagem 1: "Sentimos sua falta" com novidades
2. Mensagem 2 (3 dias depois): Oferta exclusiva de retorno
3. Mensagem 3 (5 dias depois): Solicitação de feedback

## Monitorando Resultados

Acompanhe o desempenho de suas campanhas:

1. Acesse **Campanhas** > **Relatórios**
2. Analise métricas como:
   - Taxa de entrega
   - Taxa de abertura/leitura
   - Taxa de resposta
   - Conversões (baseadas nos objetivos definidos)
   - Opt-outs (pessoas que pediram para não receber mais mensagens)

3. Visualize dados por:
   - Campanha específica
   - Período de tempo
   - Segmento de público
   - Mensagem individual

## Otimizando suas Campanhas

Com base nos resultados, otimize suas próximas campanhas:

1. **Teste A/B**:
   - Crie duas versões da mesma campanha com pequenas diferenças
   - Compare os resultados para identificar o que funciona melhor

2. **Análise de Horários**:
   - Verifique os horários com melhores taxas de resposta
   - Ajuste o envio para esses horários

3. **Refinamento de Conteúdo**:
   - Identifique quais mensagens geram mais engajamento
   - Adapte o tom, comprimento e estilo das mensagens

## Melhores Práticas

- **Frequência**: Não sobrecarregue seus contatos com muitas mensagens
- **Personalização**: Use campos dinâmicos para personalizar ao máximo
- **Valor**: Cada mensagem deve entregar valor real ao destinatário
- **Opt-out**: Sempre ofereça uma forma fácil de cancelar o recebimento
- **Segmentação**: Quanto mais específico o segmento, melhores os resultados
- **Timing**: Respeite fusos horários e evite horários inconvenientes

## Conformidade Legal

Ao criar campanhas, certifique-se de seguir as regulamentações:

- Obtenha consentimento explícito antes de enviar mensagens
- Inclua informações sobre sua empresa em cada mensagem
- Respeite solicitações de opt-out imediatamente
- Mantenha registros de consentimento
- Siga as diretrizes do WhatsApp Business para mensagens em massa

Para implementar automações mais avançadas, consulte nosso artigo sobre [Automações Avançadas](/recursos-funcionalidades/automacoes-avancadas).
      `
    },
    'automacoes-avancadas': {
      title: 'Automações Avançadas',
      description: 'Recursos avançados para automatizar processos complexos',
      content: `
# Automações Avançadas

Este guia explora os recursos avançados de automação do WhatsBotGPT, permitindo que você crie fluxos de trabalho complexos e personalizados para otimizar seus processos de negócio.

## O que são Automações Avançadas?

As automações avançadas permitem criar fluxos de trabalho complexos que combinam:

- Gatilhos baseados em eventos ou condições
- Ações sequenciais ou paralelas
- Lógica condicional
- Integrações com sistemas externos
- Processamento de dados
- Notificações e alertas

## Acessando o Construtor de Automações

1. Faça login na sua conta WhatsBotGPT
2. No painel principal, acesse **Recursos** > **Automações Avançadas**
3. Clique em **Nova Automação** para começar

## Componentes de uma Automação

### 1. Gatilhos

Os gatilhos determinam quando a automação será iniciada:

#### Gatilhos de Mensagem
- Mensagem recebida contendo palavras-chave
- Mensagem recebida de um número específico
- Mensagem recebida em um grupo
- Mensagem com mídia (imagem, áudio, documento)

#### Gatilhos de Evento
- Novo lead adicionado
- Status de lead alterado
- Agendamento criado/cancelado
- Horário específico (diário, semanal, mensal)
- Webhook recebido de sistema externo

#### Gatilhos de Dados
- Valor em banco de dados alterado
- Limite de uso atingido
- Condição personalizada satisfeita

### 2. Condições

As condições permitem criar ramificações na automação:

- **Verificações de Dados**:
  - Verificar valor em banco de dados
  - Comparar informações do contato
  - Verificar histórico de interações

- **Verificações de Tempo**:
  - Dia da semana/mês
  - Horário comercial
  - Tempo desde última interação

- **Verificações de Estado**:
  - Status do lead
  - Estágio no funil de vendas
  - Permissões do usuário

### 3. Ações

As ações são os passos executados pela automação:

#### Ações de Comunicação
- Enviar mensagem de texto
- Enviar mídia (imagem, áudio, documento)
- Enviar mensagem com botões/lista
- Responder a uma mensagem específica

#### Ações de Dados
- Atualizar informações do contato
- Criar/atualizar registro em banco de dados
- Adicionar tag/etiqueta
- Mover para outro estágio do funil

#### Ações de Integração
- Enviar dados para CRM
- Criar tarefa em sistema de tickets
- Atualizar planilha
- Acionar webhook

#### Ações de Notificação
- Notificar equipe via email
- Enviar alerta para Slack/Teams
- Criar lembrete
- Gerar relatório

## Criando uma Automação Avançada

### Passo 1: Definir o Gatilho

1. Na tela de nova automação, selecione **Adicionar Gatilho**
2. Escolha o tipo de gatilho
3. Configure os parâmetros específicos
4. Defina condições adicionais (opcional)

### Passo 2: Construir o Fluxo

Use a interface de arrastar e soltar para construir seu fluxo:

1. Adicione ações arrastando-as do menu lateral
2. Conecte as ações na ordem desejada
3. Adicione condições para criar ramificações
4. Configure cada elemento com os parâmetros necessários

### Passo 3: Configurar Variáveis

As variáveis permitem armazenar e manipular dados durante a execução:

1. Clique em **Variáveis** no menu lateral
2. Crie variáveis para armazenar informações temporárias
3. Use variáveis do sistema como {{nome_contato}}, {{telefone}}, etc.
4. Configure operações matemáticas ou de texto com variáveis

### Passo 4: Testar a Automação

Antes de ativar, teste sua automação:

1. Clique em **Testar Fluxo**
2. Simule diferentes cenários e entradas
3. Verifique o caminho seguido em cada teste
4. Corrija problemas identificados

### Passo 5: Ativar e Monitorar

1. Clique em **Ativar Automação**
2. Defina limites de execução (opcional)
3. Configure notificações de erro
4. Monitore o desempenho através do painel de automações

## Exemplos de Automações Avançadas

### Qualificação e Roteamento de Leads

**Gatilho**: Nova mensagem de número desconhecido

**Fluxo**:
1. Verificar se é primeiro contato
2. Enviar mensagem de boas-vindas
3. Iniciar sequência de perguntas de qualificação
4. Baseado nas respostas:
   - Lead quente: Notificar vendedor e agendar demonstração
   - Lead morno: Adicionar à campanha de nutrição
   - Lead frio: Enviar material informativo

### Atendimento Fora do Horário Comercial

**Gatilho**: Mensagem recebida

**Fluxo**:
1. Verificar horário atual
2. Se fora do horário comercial:
   - Enviar mensagem informando o horário de atendimento
   - Oferecer opção de deixar mensagem
   - Registrar solicitação para follow-up
   - Notificar equipe via Slack
3. Se dentro do horário comercial:
   - Processar normalmente

### Automação de Cobrança

**Gatilho**: Fatura vencida (via integração com sistema financeiro)

**Fluxo**:
1. Enviar lembrete amigável sobre fatura vencida
2. Aguardar 2 dias
3. Se não pago:
   - Enviar segunda mensagem com link de pagamento
   - Atualizar status no CRM
4. Aguardar 3 dias
5. Se não pago:
   - Enviar alerta final
   - Notificar equipe financeira
   - Agendar ligação de cobrança

## Integrações Avançadas

Amplie o poder das suas automações com integrações:

### APIs e Webhooks

1. Acesse **Configurações** > **Integrações** > **API e Webhooks**
2. Configure:
   - Webhooks de entrada para receber dados externos
   - Webhooks de saída para enviar dados para outros sistemas
   - Autenticação API para conexões seguras

### Zapier e Integrações Sem Código

1. Conecte o WhatsBotGPT ao Zapier ou Make (Integromat)
2. Crie fluxos entre centenas de aplicativos sem programação
3. Acione automações a partir de eventos em outras plataformas

### Integrações Personalizadas

Para necessidades específicas:

1. Use nossa API documentada
2. Desenvolva conectores personalizados
3. Solicite desenvolvimento de integrações específicas

## Melhores Práticas

- **Comece simples**: Crie automações básicas antes de avançar para fluxos complexos
- **Documente seus fluxos**: Mantenha um registro do propósito e funcionamento de cada automação
- **Monitore o desempenho**: Verifique regularmente se as automações estão funcionando como esperado
- **Estabeleça limites**: Configure limites de execução para evitar loops infinitos ou sobrecarga
- **Teste exaustivamente**: Simule diferentes cenários antes de ativar em produção
- **Revise periodicamente**: Atualize suas automações conforme seus processos evoluem

Para gerenciar seus dados cadastrais e informações de faturamento, consulte nosso artigo sobre [Dados Cadastrais](/conta-faturamento/dados-cadastrais).
      `
    }
  },
  'conta-faturamento': {
    'historico-pagamentos': {
      title: 'Histórico de Pagamentos',
      description: 'Visualize e gerencie seu histórico de pagamentos e faturas',
      content: `
# Histórico de Pagamentos

Este guia explica como acessar, visualizar e gerenciar seu histórico de pagamentos e faturas na plataforma WhatsBotGPT.

## Acessando seu Histórico de Pagamentos

Para visualizar seu histórico completo de pagamentos:

1. Faça login na sua conta WhatsBotGPT
2. Clique no seu nome de usuário no canto superior direito
3. Selecione **Conta e Faturamento**
4. Clique na aba **Histórico de Pagamentos**

## Entendendo seu Histórico de Pagamentos

Na página de histórico de pagamentos, você encontrará:

### Tabela de Transações

A tabela principal mostra todas as suas transações, incluindo:

- **Data**: Quando o pagamento foi processado
- **Descrição**: Detalhes sobre o pagamento (ex: "Assinatura Plano Profissional - Agosto 2025")
- **Valor**: Quantia cobrada
- **Status**: Situação do pagamento (Aprovado, Pendente, Recusado, etc.)
- **Método**: Forma de pagamento utilizada
- **Ações**: Opções disponíveis para cada transação

### Filtros e Busca

Para encontrar transações específicas:

1. Use o campo de busca para procurar por descrição ou valor
2. Filtre por:
   - Período (Últimos 30 dias, 3 meses, 6 meses, 12 meses)
   - Status (Todos, Aprovados, Pendentes, Recusados)
   - Método de pagamento

## Detalhes da Transação

Para ver informações detalhadas sobre uma transação:

1. Clique no botão **Detalhes** na linha da transação desejada
2. Uma janela será aberta mostrando:
   - Informações completas da transação
   - Detalhamento dos itens cobrados
   - Dados fiscais
   - Histórico de tentativas de processamento (se aplicável)

## Baixando Comprovantes e Faturas

Para cada transação aprovada, você pode:

1. Baixar o **Comprovante de Pagamento** em PDF
2. Baixar a **Nota Fiscal** (quando disponível)
3. Baixar a **Fatura Detalhada** com todos os itens

Para isso:
1. Localize a transação desejada na tabela
2. Clique no botão de download na coluna "Ações"
3. Selecione o documento que deseja baixar

## Reimpressão de Boletos

Para transações com boleto bancário:

1. Se o boleto ainda estiver dentro do prazo de vencimento:
   - Clique em **Reimprimir Boleto** na coluna "Ações"
   - O boleto será aberto em uma nova janela para impressão

2. Se o boleto estiver vencido:
   - Clique em **Gerar Novo Boleto**
   - Um novo boleto será gerado com data de vencimento atualizada

## Contestação de Cobranças

Se você identificar uma cobrança incorreta:

1. Clique no botão **Contestar** na linha da transação
2. Preencha o formulário explicando o motivo da contestação
3. Anexe documentos de suporte, se necessário
4. Envie a contestação
5. Nossa equipe financeira analisará seu caso em até 5 dias úteis

## Pagamentos Recusados

Para pagamentos recusados:

1. Verifique o motivo da recusa nos detalhes da transação
2. Dependendo do motivo, você pode:
   - Tentar novamente com o mesmo método de pagamento
   - Adicionar um novo método de pagamento
   - Contatar seu banco para autorizar a transação

## Relatórios Financeiros

Para gerar relatórios personalizados:

1. Clique no botão **Gerar Relatório** no topo da página
2. Selecione o período desejado
3. Escolha o tipo de relatório (Resumo, Detalhado, Anual)
4. Selecione o formato (PDF, Excel, CSV)
5. Clique em **Baixar Relatório**

## Perguntas Frequentes

### Quando são realizadas as cobranças?

As cobranças são processadas automaticamente na data de renovação da sua assinatura, que corresponde ao dia do mês em que você assinou o serviço inicialmente.

### O que fazer se meu pagamento for recusado?

Se seu pagamento for recusado, você receberá uma notificação por email. Você pode atualizar suas informações de pagamento em **Conta e Faturamento** > **Métodos de Pagamento** e tentar novamente.

### Como alterar a data de cobrança?

Para solicitar alteração na data de cobrança:

1. Acesse **Conta e Faturamento** > **Suporte de Faturamento**
2. Selecione "Alterar data de cobrança" no menu
3. Escolha a nova data preferencial
4. Envie a solicitação para análise

### Como obter uma nota fiscal?

Notas fiscais são geradas automaticamente para todos os pagamentos aprovados e ficam disponíveis em até 3 dias úteis após a confirmação do pagamento.

## Suporte Financeiro

Para questões específicas sobre faturamento:

- **Email**: financeiro@whatsbotgpt.store
- **Chat de Suporte**: Disponível no canto inferior direito da plataforma
- **Horário de Atendimento**: Segunda a sexta, das 9h às 18h (exceto feriados)

Para mais informações sobre como gerenciar seu plano, consulte nosso artigo sobre [Gerenciando seu Plano](/conta-faturamento/gerenciando-plano).
      `
    },
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
    },
    'dados-cadastrais': {
      title: 'Dados Cadastrais',
      description: 'Atualize suas informações pessoais e de faturamento',
      content: `
# Dados Cadastrais

Este guia explica como gerenciar e atualizar suas informações pessoais e de faturamento na plataforma WhatsBotGPT.

## Acessando seus Dados Cadastrais

Para visualizar e editar suas informações cadastrais:

1. Faça login na sua conta WhatsBotGPT
2. Clique no seu nome de usuário no canto superior direito
3. Selecione **Conta e Faturamento**
4. Clique na aba **Dados Cadastrais**

## Informações Pessoais

### Visualizando Informações Pessoais

Na seção de Informações Pessoais, você encontrará:

- Nome completo
- E-mail principal
- Telefone de contato
- CPF ou CNPJ
- Data de nascimento (para pessoa física)
- Cargo (opcional)
- Empresa (opcional)

### Atualizando Informações Pessoais

Para atualizar seus dados:

1. Clique no botão **Editar Informações Pessoais**
2. Modifique os campos necessários
3. Clique em **Salvar Alterações**

**Observações importantes:**
- O e-mail principal é usado para comunicações essenciais e não pode ser removido
- Alterações em CPF/CNPJ podem exigir verificação adicional
- Mantenha seu telefone atualizado para receber notificações de segurança

## Endereço

### Gerenciando seu Endereço

Para atualizar seu endereço:

1. Na seção **Endereço**, clique em **Editar**
2. Preencha os campos:
   - CEP
   - Logradouro
   - Número
   - Complemento (opcional)
   - Bairro
   - Cidade
   - Estado
   - País
3. Clique em **Salvar Endereço**

**Dica:** Ao digitar o CEP, os campos de logradouro, bairro, cidade e estado são preenchidos automaticamente para endereços brasileiros.

## Informações de Faturamento

### Configurando Dados para Faturamento

Se os dados de faturamento forem diferentes dos seus dados pessoais:

1. Na seção **Informações de Faturamento**, desmarque a opção **Usar mesmos dados pessoais**
2. Preencha os campos adicionais:
   - Nome/Razão Social
   - CPF/CNPJ
   - Inscrição Estadual (opcional)
   - E-mail para recebimento de faturas
   - Endereço de cobrança

### Configurando Preferências de Faturamento

Personalize como você recebe e gerencia suas faturas:

1. Acesse a seção **Preferências de Faturamento**
2. Configure:
   - Dia preferencial para vencimento (5, 10, 15, 20 ou 25)
   - Receber faturas por e-mail (Sim/Não)
   - Receber lembretes de pagamento (Sim/Não)
   - Tentativas automáticas de cobrança em caso de falha (Sim/Não)

## Usuários Adicionais

### Gerenciando Usuários da Conta

Se você possui um plano que permite múltiplos usuários:

1. Acesse a aba **Usuários**
2. Visualize todos os usuários atualmente cadastrados
3. Para adicionar um novo usuário:
   - Clique em **Adicionar Usuário**
   - Preencha o e-mail, nome e nível de permissão
   - Clique em **Convidar**
4. Para editar um usuário existente:
   - Clique no ícone de edição ao lado do usuário
   - Modifique as permissões conforme necessário
   - Clique em **Salvar**
5. Para remover um usuário:
   - Clique no ícone de exclusão ao lado do usuário
   - Confirme a remoção

### Níveis de Permissão

Os níveis de permissão disponíveis são:

- **Administrador**: Acesso completo, incluindo faturamento e configurações da conta
- **Gerente**: Pode gerenciar assistentes, leads e campanhas, mas não tem acesso ao faturamento
- **Operador**: Pode interagir com leads e usar assistentes, mas não pode criar novos
- **Visualizador**: Apenas visualização de dados, sem permissão para modificações

## Segurança da Conta

### Alterando sua Senha

Para alterar sua senha:

1. Na aba **Segurança**, clique em **Alterar Senha**
2. Digite sua senha atual
3. Digite e confirme sua nova senha
4. Clique em **Salvar Nova Senha**

### Configurando Autenticação em Dois Fatores

Para maior segurança:

1. Na seção **Autenticação em Dois Fatores**, clique em **Ativar**
2. Escolha o método:
   - Aplicativo autenticador (recomendado)
   - SMS
3. Siga as instruções na tela para configurar
4. Guarde os códigos de recuperação em local seguro

## Notificações

### Configurando Preferências de Notificação

Personalize quais notificações você deseja receber:

1. Acesse a aba **Notificações**
2. Configure cada tipo de notificação:
   - Atualizações da plataforma
   - Novos recursos
   - Dicas e melhores práticas
   - Relatórios de desempenho
   - Alertas de segurança
3. Para cada tipo, selecione os canais:
   - E-mail
   - WhatsApp
   - Notificações no aplicativo
4. Clique em **Salvar Preferências**

## Exportação de Dados

### Solicitando seus Dados

De acordo com as leis de proteção de dados:

1. Na aba **Privacidade**, clique em **Solicitar Meus Dados**
2. Selecione quais dados deseja exportar:
   - Informações pessoais
   - Histórico de uso
   - Dados de faturamento
   - Conteúdo criado
3. Clique em **Solicitar Exportação**
4. Você receberá um e-mail quando os dados estiverem prontos para download

## Exclusão de Conta

### Solicitando Exclusão

Se desejar excluir sua conta:

1. Na aba **Privacidade**, clique em **Excluir Minha Conta**
2. Leia as informações sobre o que acontece após a exclusão
3. Selecione o motivo da exclusão
4. Digite sua senha para confirmar
5. Clique em **Solicitar Exclusão**

**Importante:** A exclusão da conta é irreversível após o período de 30 dias. Durante este período, você pode cancelar a solicitação fazendo login novamente.

Para verificar seu histórico de pagamentos e faturas, consulte nosso artigo sobre [Histórico de Pagamentos](/conta-faturamento/historico-pagamentos).
      `
    },
    'historico-pagamentos': {
      title: 'Histórico de Pagamentos',
      description: 'Acesse e gerencie suas faturas e histórico de pagamentos',
      content: `
# Histórico de Pagamentos

Este guia explica como acessar, visualizar e gerenciar seu histórico de pagamentos e faturas na plataforma WhatsBotGPT.

## Acessando o Histórico de Pagamentos

Para visualizar seu histórico completo de pagamentos:

1. Faça login na sua conta WhatsBotGPT
2. Clique no seu nome de usuário no canto superior direito
3. Selecione **Conta e Faturamento**
4. Clique na aba **Histórico de Pagamentos**

## Visualizando Faturas e Pagamentos

### Entendendo a Tela de Histórico

Na tela de histórico de pagamentos, você encontrará:

- Lista de todas as faturas geradas
- Status de cada fatura (Paga, Pendente, Vencida, Cancelada)
- Data de emissão
- Data de vencimento
- Valor
- Método de pagamento utilizado
- Opções de ação para cada fatura

### Filtrando o Histórico

Para encontrar faturas específicas:

1. Use o campo de busca para pesquisar por número da fatura
2. Utilize os filtros disponíveis:
   - **Período**: Selecione um intervalo de datas
   - **Status**: Filtre por status da fatura
   - **Valor**: Defina um intervalo de valores
3. Clique em **Aplicar Filtros**

## Detalhes da Fatura

### Visualizando Detalhes Completos

Para ver informações detalhadas de uma fatura:

1. Clique no número da fatura na lista
2. Na tela de detalhes, você verá:
   - Informações completas da fatura
   - Itens cobrados e valores individuais
   - Impostos aplicados
   - Descontos (se houver)
   - Histórico de tentativas de pagamento
   - Comprovantes anexados

### Baixando a Fatura

Para obter uma cópia da fatura:

1. Na lista de faturas ou na tela de detalhes, clique no ícone de download
2. Selecione o formato desejado:
   - PDF (padrão)
   - XML (para contabilidade)
3. O download será iniciado automaticamente

## Pagamento de Faturas

### Pagando Faturas Pendentes

Para pagar uma fatura que está pendente:

1. Localize a fatura com status "Pendente" na lista
2. Clique no botão **Pagar** ao lado da fatura
3. Selecione o método de pagamento:
   - Cartão de crédito cadastrado
   - Boleto bancário
   - PIX
4. Siga as instruções na tela para concluir o pagamento

### Pagando Faturas Vencidas

Para faturas com status "Vencida":

1. Clique no botão **Pagar** ao lado da fatura
2. Note que podem ser aplicadas multas e juros por atraso
3. Revise o valor atualizado
4. Selecione o método de pagamento e conclua a transação

## Comprovantes de Pagamento

### Enviando Comprovantes

Se você realizou um pagamento por boleto ou PIX e deseja enviar o comprovante:

1. Localize a fatura na lista
2. Clique no botão **Enviar Comprovante**
3. Faça upload do arquivo (formatos aceitos: PDF, JPG, PNG)
4. Adicione uma observação (opcional)
5. Clique em **Enviar**

### Visualizando Comprovantes

Para verificar comprovantes já enviados:

1. Acesse os detalhes da fatura
2. Vá até a seção **Comprovantes**
3. Clique no nome do arquivo para visualizar ou baixar

## Recibos e Declarações

### Gerando Recibos Anuais

Para fins de declaração de imposto de renda ou contabilidade:

1. Na parte superior da tela de histórico, clique em **Recibos Anuais**
2. Selecione o ano desejado
3. Clique em **Gerar Recibo Anual**
4. O documento será gerado em PDF com o resumo de todos os pagamentos do ano

### Declaração de Serviços Prestados

Para obter uma declaração formal dos serviços contratados:

1. Na parte superior da tela, clique em **Declarações**
2. Selecione **Declaração de Serviços Prestados**
3. Escolha o período desejado
4. Clique em **Gerar Declaração**
5. O documento será enviado para seu e-mail cadastrado

## Contestação de Cobranças

### Contestando uma Fatura

Se identificar alguma inconsistência em uma cobrança:

1. Acesse os detalhes da fatura
2. Clique no botão **Contestar Cobrança**
3. Preencha o formulário:
   - Selecione o motivo da contestação
   - Descreva detalhadamente o problema
   - Anexe documentos de suporte (opcional)
4. Clique em **Enviar Contestação**
5. Nossa equipe financeira analisará seu caso em até 3 dias úteis

## Reembolsos

### Solicitando Reembolso

Em casos elegíveis para reembolso:

1. Localize a fatura paga na lista
2. Clique no botão **Solicitar Reembolso**
3. Selecione o motivo do reembolso
4. Indique se deseja reembolso total ou parcial
   - Para reembolso parcial, informe o valor
5. Forneça os dados bancários para depósito
6. Clique em **Enviar Solicitação**

### Acompanhando Solicitações de Reembolso

Para verificar o status de reembolsos solicitados:

1. Na parte superior da tela, clique em **Reembolsos**
2. Visualize todas as solicitações e seus status
3. Clique em uma solicitação para ver detalhes

## Configurações de Faturamento

### Alterando Configurações

Para modificar suas preferências de faturamento:

1. Na parte superior da tela, clique em **Configurações de Faturamento**
2. Ajuste as opções:
   - Data de vencimento preferencial
   - Método de pagamento padrão
   - Contatos para recebimento de faturas
   - Formato de fatura preferido
3. Clique em **Salvar Configurações**

Para resolver problemas comuns relacionados ao WhatsApp, consulte nosso artigo sobre [Problemas de Conexão com WhatsApp](/solucao-problemas/problemas-conexao-whatsapp).
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
    },
    'problemas-conexao-whatsapp': {
      title: 'Problemas de Conexão com WhatsApp',
      description: 'Resolva problemas de conectividade com o WhatsApp',
      content: `
# Problemas de Conexão com WhatsApp

Este guia ajudará você a diagnosticar e resolver problemas de conexão entre o WhatsBotGPT e o WhatsApp, garantindo que seu assistente funcione sem interrupções.

## Sintomas Comuns de Problemas de Conexão

Você pode estar enfrentando problemas de conexão com o WhatsApp se observar:

- Status "Desconectado" ou "Tentando reconectar" no painel
- Mensagens não são enviadas ou recebidas
- Notificações frequentes de "Reconexão necessária"
- QR code expirando repetidamente durante a tentativa de conexão
- Mensagem de erro "Telefone não conectado"
- Desconexões frequentes e aleatórias

## Verificações Iniciais

Antes de prosseguir com soluções mais avançadas, verifique:

1. **Conexão com a Internet**
   - Certifique-se de que seu telefone tem uma conexão estável com a internet
   - Teste a velocidade da sua conexão em speedtest.net
   - Verifique se outros aplicativos estão funcionando normalmente

2. **Versão do WhatsApp**
   - Confirme que você está usando a versão mais recente do WhatsApp
   - Abra a loja de aplicativos e verifique se há atualizações pendentes

3. **Status do Serviço**
   - Verifique se há problemas conhecidos com o WhatsApp em downdetector.com
   - Consulte nossa página de status em status.whatsbotgpt.store

## Problemas Específicos e Soluções

### 1. Não Consegue Escanear o QR Code

**Possíveis causas:**
- Câmera do telefone com problemas
- QR code expirado
- Problemas com o navegador

**Soluções:**
1. Limpe a lente da câmera do seu telefone
2. Atualize a página para gerar um novo QR code
3. Tente usar outro navegador (Chrome, Firefox, Edge)
4. Desative extensões do navegador que possam interferir
5. Aproxime o telefone da tela para melhor leitura do código

### 2. Desconexões Frequentes

**Possíveis causas:**
- Otimização de bateria do telefone
- Múltiplas sessões do WhatsApp Web
- Problemas de rede
- Telefone entrando em modo de economia de energia

**Soluções:**
1. Desative a otimização de bateria para o WhatsApp:
   - **Android**: Configurações > Bateria > Otimização de bateria > Encontre WhatsApp > Selecione "Não otimizar"
   - **iOS**: Configurações > Bateria > Verifique se o Modo de Baixo Consumo está desativado

2. Feche outras sessões do WhatsApp Web:
   - Abra o WhatsApp no seu telefone
   - Toque em Menu (três pontos) > WhatsApp Web/Desktop
   - Toque em "Sair de todas as sessões"
   - Reconecte apenas o WhatsBotGPT

3. Use uma conexão Wi-Fi estável em vez de dados móveis

4. Mantenha o telefone conectado à energia durante o uso intenso

### 3. Erro "Telefone Não Conectado"

**Possíveis causas:**
- Telefone sem internet
- WhatsApp fechado ou em segundo plano
- Restrições do sistema operacional

**Soluções:**
1. Verifique a conexão de internet do telefone
2. Abra o WhatsApp e mantenha-o em primeiro plano por alguns minutos
3. Reinicie o telefone
4. Desinstale e reinstale o WhatsApp (faça backup das conversas primeiro)

### 4. Problemas com WhatsApp Business API

Se você usa a API Business do WhatsApp em vez do WhatsApp Web:

**Possíveis causas:**
- Problemas de autenticação
- Token expirado
- Limitações da conta

**Soluções:**
1. Verifique o status da sua conta Business na Meta Business Suite
2. Regenere os tokens de acesso
3. Confirme se sua conta está em conformidade com as políticas do WhatsApp
4. Verifique se você não excedeu os limites de mensagens

## Soluções Avançadas

Se os problemas persistirem, tente estas soluções mais avançadas:

### Reconexão Completa

1. Acesse **Conexões** > **WhatsApp** no WhatsBotGPT
2. Clique em **Desconectar**
3. Confirme a desconexão
4. No seu telefone, vá para WhatsApp > Menu > WhatsApp Web > Sair de todas as sessões
5. Reinicie seu telefone
6. Volte ao WhatsBotGPT e clique em **Conectar WhatsApp**
7. Escaneie o novo QR code

### Limpeza de Cache

1. No seu navegador, abra as configurações
2. Vá para "Privacidade e Segurança" > "Limpar dados de navegação"
3. Selecione "Cookies e dados do site" e "Imagens e arquivos em cache"
4. Escolha "Todo o período" no menu suspenso de tempo
5. Clique em "Limpar dados"
6. Feche e reabra o navegador
7. Tente conectar novamente

### Verificação de Firewall e Proxy

Se você está em um ambiente corporativo:

1. Verifique se os domínios do WhatsApp não estão bloqueados pelo firewall
2. Confirme que as portas necessárias estão abertas (443/TCP)
3. Desative temporariamente VPNs ou proxies para testar
4. Consulte seu departamento de TI para possíveis restrições

## Prevenindo Problemas Futuros

Para minimizar problemas de conexão no futuro:

1. **Mantenha o telefone carregado** e conectado à energia quando possível
2. **Use Wi-Fi estável** em vez de dados móveis
3. **Mantenha o WhatsApp atualizado**
4. **Não use o mesmo número de WhatsApp** em múltiplas instâncias do WhatsBotGPT
5. **Verifique regularmente o status da conexão** no painel
6. **Configure alertas de desconexão** para ser notificado imediatamente

## Quando Contatar o Suporte

Se você tentou todas as soluções acima e ainda enfrenta problemas:

1. Colete as seguintes informações:
   - Modelo do telefone e versão do sistema operacional
   - Versão do WhatsApp
   - Navegador e versão utilizados
   - Capturas de tela de mensagens de erro
   - Horários em que as desconexões ocorrem
   - Logs de conexão (disponíveis em **Ferramentas** > **Logs**)

2. Contate nosso suporte técnico:
   - Email: support@whatsbotgpt.store
   - Chat ao vivo: Disponível em horário comercial
   - Inclua todas as informações coletadas

Para outros problemas comuns, consulte nosso artigo sobre [Erros Comuns e Soluções](/solucao-problemas/erros-comuns).
      `
    },
    'erros-comuns': {
      title: 'Erros Comuns e Soluções',
      description: 'Soluções para os erros mais frequentemente encontrados',
      content: `
# Erros Comuns e Soluções

Este guia apresenta os erros mais frequentes encontrados pelos usuários do WhatsBotGPT e suas respectivas soluções, ajudando você a resolver problemas rapidamente.

## Erros de Autenticação e Acesso

### Erro: "Credenciais inválidas"

**Causa:** Senha incorreta ou usuário não encontrado.

**Solução:**
1. Verifique se está digitando o e-mail corretamente
2. Certifique-se de que o CAPS LOCK não está ativado
3. Use a opção "Esqueci minha senha" para redefinir sua senha
4. Limpe o cache do navegador e tente novamente

### Erro: "Sua sessão expirou"

**Causa:** Inatividade prolongada ou problemas com cookies.

**Solução:**
1. Faça login novamente
2. Verifique se seu navegador aceita cookies
3. Desative bloqueadores de cookies ou use o modo de navegação normal (não privativa)
4. Se o problema persistir, limpe o cache e cookies do navegador

### Erro: "Conta bloqueada temporariamente"

**Causa:** Múltiplas tentativas de login com senha incorreta.

**Solução:**
1. Aguarde 30 minutos antes de tentar novamente
2. Use a opção "Esqueci minha senha" para redefinir sua senha
3. Verifique seu e-mail para instruções de desbloqueio
4. Se o problema persistir, contate o suporte

## Erros de Configuração do Assistente

### Erro: "Falha ao criar assistente"

**Causa:** Informações incompletas ou problemas de conexão.

**Solução:**
1. Verifique se todos os campos obrigatórios foram preenchidos
2. Reduza o tamanho das instruções se estiverem muito longas
3. Remova caracteres especiais ou formatação complexa
4. Tente novamente com uma conexão de internet mais estável

### Erro: "Instruções inválidas"

**Causa:** Conteúdo proibido ou formato incorreto nas instruções.

**Solução:**
1. Remova qualquer conteúdo que possa violar os termos de uso
2. Simplifique as instruções, removendo formatação complexa
3. Divida instruções muito longas em seções menores
4. Evite usar muitos emojis ou caracteres especiais

### Erro: "Limite de assistentes atingido"

**Causa:** Você atingiu o número máximo de assistentes permitido no seu plano.

**Solução:**
1. Exclua assistentes não utilizados
2. Faça upgrade para um plano com mais assistentes
3. Combine funcionalidades em assistentes existentes
4. Arquive assistentes antigos em vez de criar novos

## Erros de Integração

### Erro: "Falha na integração com CRM"

**Causa:** Credenciais incorretas ou problemas de API.

**Solução:**
1. Verifique se as credenciais da API estão corretas
2. Confirme se sua conta do CRM tem permissões suficientes
3. Verifique se a API do CRM está funcionando normalmente
4. Reconecte a integração seguindo o processo completo novamente

### Erro: "Webhook não recebido"

**Causa:** Configuração incorreta de webhook ou problemas no servidor de destino.

**Solução:**
1. Verifique se a URL do webhook está correta
2. Confirme se o servidor de destino está online e acessível
3. Verifique logs do servidor para identificar possíveis erros
4. Teste o webhook usando ferramentas como Webhook.site

### Erro: "Falha na sincronização de calendário"

**Causa:** Problemas de permissão ou autenticação com o serviço de calendário.

**Solução:**
1. Reconecte sua conta de calendário
2. Verifique se concedeu todas as permissões necessárias
3. Confirme se não há restrições de firewall corporativo
4. Tente usar uma conta de calendário diferente para testar

## Erros de Processamento de Mensagens

### Erro: "Falha ao enviar mensagem"

**Causa:** Problemas de conexão com WhatsApp ou limitações da plataforma.

**Solução:**
1. Verifique o status da conexão do WhatsApp
2. Confirme se o número de destino é válido e está ativo no WhatsApp
3. Verifique se a mensagem não viola as políticas do WhatsApp
4. Tente enviar uma mensagem mais curta para testar

### Erro: "Mensagem não entregue"

**Causa:** Destinatário com problemas de conexão ou número inválido.

**Solução:**
1. Verifique se o número está formatado corretamente (com código do país)
2. Confirme se o destinatário tem WhatsApp ativo
3. Aguarde alguns minutos e tente novamente
4. Verifique se o destinatário não bloqueou seu número

### Erro: "Conteúdo não suportado"

**Causa:** Tentativa de enviar mídia ou formato não suportado.

**Solução:**
1. Verifique se o formato do arquivo é suportado pelo WhatsApp
2. Reduza o tamanho do arquivo se for muito grande
3. Converta para um formato suportado (JPG, PNG, PDF)
4. Verifique se seu plano permite o envio desse tipo de conteúdo

## Erros de Faturamento e Conta

### Erro: "Pagamento recusado"

**Causa:** Problemas com o cartão de crédito ou método de pagamento.

**Solução:**
1. Verifique se os dados do cartão estão corretos
2. Confirme se o cartão tem saldo suficiente
3. Verifique se o cartão não está bloqueado para compras online
4. Tente usar um método de pagamento alternativo

### Erro: "Falha ao atualizar plano"

**Causa:** Problemas de processamento de pagamento ou restrições da conta.

**Solução:**
1. Verifique se não há faturas pendentes
2. Confirme se você tem permissões para alterar o plano
3. Tente novamente mais tarde
4. Contate o suporte financeiro se o problema persistir

### Erro: "Fatura não encontrada"

**Causa:** Problemas no sistema de faturamento ou fatura excluída.

**Solução:**
1. Atualize a página de histórico de pagamentos
2. Verifique se você está no período correto
3. Contate o suporte financeiro com o número da fatura
4. Verifique seu e-mail para cópias da fatura

## Erros de Desempenho

### Erro: "Tempo limite excedido"

**Causa:** Operação muito longa ou problemas de servidor.

**Solução:**
1. Tente novamente com uma operação mais simples
2. Verifique sua conexão com a internet
3. Tente em um horário de menor tráfego
4. Divida operações grandes em partes menores

### Erro: "Servidor não responde"

**Causa:** Problemas temporários de servidor ou manutenção.

**Solução:**
1. Aguarde alguns minutos e tente novamente
2. Verifique nossa página de status para informações sobre manutenção
3. Limpe o cache do navegador
4. Tente acessar de outro dispositivo ou rede

## Como Reportar Erros Não Listados

Se você encontrar um erro que não está listado neste guia:

1. Anote a mensagem de erro exata
2. Capture uma screenshot da tela de erro
3. Documente os passos que levaram ao erro
4. Colete informações sobre seu ambiente:
   - Navegador e versão
   - Sistema operacional
   - Dispositivo utilizado
   - Horário do erro

5. Envie estas informações para nosso suporte:
   - Email: support@whatsbotgpt.store
   - Chat ao vivo: Disponível em horário comercial
   - Formulário de suporte: Disponível na seção "Ajuda"

Nossa equipe analisará o problema e entrará em contato com uma solução o mais rápido possível.

## Ferramentas de Diagnóstico

Para ajudar na resolução de problemas, utilize nossas ferramentas de diagnóstico:

1. **Verificador de Sistema**
   - Acesse **Ferramentas** > **Diagnóstico** > **Verificar Sistema**
   - Execute o teste completo
   - Analise os resultados para identificar problemas específicos

2. **Logs de Erro**
   - Acesse **Ferramentas** > **Logs**
   - Filtre por "Erro" ou "Alerta"
   - Use os logs ao contatar o suporte

3. **Modo de Depuração**
   - Para usuários avançados: Acesse **Configurações** > **Avançado** > **Modo de Depuração**
   - Ative temporariamente para coletar informações detalhadas
   - Desative após a resolução do problema para melhor desempenho
      `
    }
  }
  // Add more articles for other categories as needed
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const article = resolvedParams.article;

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

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const article = resolvedParams.article;

  // Check if the category exists
  if (!articleData[category]) {
    console.error(`Category not found: ${category}`);
    notFound();
  }

  // Check if the article exists
  if (!articleData[category][article]) {
    console.error(`Article not found: ${category}/${article}`);
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
    const lines = content.split('\n');
    const result = [];
    let currentListItems = [];
    let isOrderedList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const index = i;

      // Process HTML comments
      if (line.trim().startsWith('<!--') && line.trim().endsWith('-->')) {
        // Skip HTML comments in the rendered output
        continue;
      }

      // Check if we're ending a list
      const isListItem = line.startsWith('- ') || /^\d+\.\s/.test(line);
      if (currentListItems.length > 0 && !isListItem) {
        // End the current list
        if (isOrderedList) {
          result.push(<ol key={`ol-${index}`} className="list-decimal pl-8 my-4">{currentListItems}</ol>);
        } else {
          result.push(<ul key={`ul-${index}`} className="list-disc pl-8 my-4">{currentListItems}</ul>);
        }
        currentListItems = [];
      }

      // Process different line types
      if (line.startsWith('# ')) {
        result.push(<h1 key={index} className="text-3xl font-bold mt-6 mb-4">{processInlineFormatting(line.substring(2), index)}</h1>);
      } else if (line.startsWith('## ')) {
        result.push(<h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{processInlineFormatting(line.substring(3), index)}</h2>);
      } else if (line.startsWith('### ')) {
        result.push(<h3 key={index} className="text-xl font-semibold mt-5 mb-2">{processInlineFormatting(line.substring(4), index)}</h3>);
      } else if (line.startsWith('- ')) {
        // Unordered list item
        if (currentListItems.length === 0) {
          isOrderedList = false;
        }
        currentListItems.push(<li key={index}>{processInlineFormatting(line.substring(2), index)}</li>);
      } else if (/^\d+\.\s/.test(line)) {
        // Ordered list item (matches "1. ", "2. ", etc.)
        if (currentListItems.length === 0) {
          isOrderedList = true;
        }
        const textContent = line.substring(line.indexOf(' ') + 1);
        currentListItems.push(<li key={index}>{processInlineFormatting(textContent, index)}</li>);
      } else if (line.trim() === '') {
        result.push(<div key={index} className="my-2"></div>);
      } else if (line.startsWith('![') && line.includes('](') && line.endsWith(')')) {
        // Handle image: ![alt text](/path/to/image.png)
        const altEndIndex = line.indexOf('](');
        const altText = line.substring(2, altEndIndex);
        const imageUrl = line.substring(altEndIndex + 2, line.length - 1);
        result.push(<img key={index} src={imageUrl} alt={altText} className="my-4 max-w-full h-auto" />);
      } else {
        // Regular paragraph
        result.push(<p key={index} className="my-2">{processInlineFormatting(line, index)}</p>);
      }
    }

    // Handle any remaining list items
    if (currentListItems.length > 0) {
      if (isOrderedList) {
        result.push(<ol key="final-ol" className="list-decimal pl-8 my-4">{currentListItems}</ol>);
      } else {
        result.push(<ul key="final-ul" className="list-disc pl-8 my-4">{currentListItems}</ul>);
      }
    }

    return result;
  };

  // Helper function to process inline formatting (bold, links) within text
  const processInlineFormatting = (text, lineIndex) => {
    let processedText = text;
    let parts = [];
    let lastIndex = 0;

    // First, process links [text](url)
    const linkPattern = /\[(.*?)\]\((.*?)\)/g;
    let linkMatch;

    while ((linkMatch = linkPattern.exec(processedText)) !== null) {
      // Add text before the link
      if (linkMatch.index > lastIndex) {
        parts.push(processBoldText(processedText.substring(lastIndex, linkMatch.index), lineIndex, lastIndex));
      }

      // Process the link text for bold formatting
      const linkText = processBoldText(linkMatch[1], lineIndex, linkMatch.index + 1);

      // Add the link - use anchor tag for internal links, Link component for external
      const url = linkMatch[2];
      if (url.startsWith('#')) {
        // Internal anchor link
        parts.push(
          <a key={`link-${lineIndex}-${linkMatch.index}`} href={url} className="text-blue-600 hover:text-blue-800">
            {linkText}
          </a>
        );
      } else {
        // External or route link
        parts.push(
          <Link key={`link-${lineIndex}-${linkMatch.index}`} href={url} className="text-blue-600 hover:text-blue-800">
            {linkText}
          </Link>
        );
      }

      lastIndex = linkMatch.index + linkMatch[0].length;
    }

    // Add remaining text after the last link
    if (lastIndex < processedText.length) {
      parts.push(processBoldText(processedText.substring(lastIndex), lineIndex, lastIndex));
    }

    return parts.length > 0 ? parts : processedText;
  };

  // Helper function to process bold text
  const processBoldText = (text, lineIndex, startIndex) => {
    if (!text.includes('**')) return text;

    const parts = [];
    const boldPattern = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let boldMatch;

    while ((boldMatch = boldPattern.exec(text)) !== null) {
      // Add text before the bold
      if (boldMatch.index > lastIndex) {
        parts.push(text.substring(lastIndex, boldMatch.index));
      }

      // Add the bold text
      parts.push(
        <strong key={`bold-${lineIndex}-${startIndex + boldMatch.index}`}>
          {boldMatch[1]}
        </strong>
      );

      lastIndex = boldMatch.index + boldMatch[0].length;
    }

    // Add remaining text after the last bold
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
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
        <ArticleFeedbackWrapper category={category} article={article} />

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
