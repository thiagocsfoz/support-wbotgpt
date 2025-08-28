export default {
  title: 'Configurando Serviços e Integrações',
  description: 'Como configurar serviços externos e integrações para expandir as capacidades do seu assistente no WhatsBotGPT',
  content: `
# Configurando Serviços e Integrações

Os assistentes do WhatsBotGPT podem se tornar ainda mais poderosos quando conectados a serviços externos e integrações. Este guia explica como configurar e utilizar essas conexões para expandir as capacidades do seu assistente.

## Visão Geral das Integrações

O WhatsBotGPT oferece diversas integrações que permitem que seu assistente:

- Acesse informações de sistemas externos
- Execute ações em outras plataformas
- Forneça respostas mais precisas e contextualizadas
- Automatize processos completos de negócio
- Personalize a experiência para cada usuário

## Tipos de Integrações Disponíveis

### 1. Integrações Nativas

São integrações pré-configuradas que podem ser ativadas com poucos cliques:

- **Google Calendar**: Agendamento e consulta de compromissos
- **Stripe**: Processamento de pagamentos
- **Shopify**: Informações de produtos e pedidos
- **HubSpot**: Gerenciamento de leads e contatos
- **Salesforce**: Dados de CRM e oportunidades
- **WordPress**: Conteúdo do seu site
- **Google Sheets**: Acesso e manipulação de planilhas
- **Zapier**: Conexão com milhares de outros aplicativos
- **Make (Integromat)**: Automações complexas

### 2. Integrações via API

Para sistemas que não possuem integração nativa, você pode usar a API do WhatsBotGPT:

- **APIs REST**: Conecte com qualquer serviço que ofereça API REST
- **Webhooks**: Configure eventos que disparam ações em sistemas externos
- **Endpoints personalizados**: Crie pontos de conexão específicos para suas necessidades

### 3. Bases de Conhecimento Externas

Permitem que seu assistente acesse informações de fontes externas:

- **Documentos**: PDF, Word, Excel, etc.
- **URLs**: Páginas web específicas
- **Bancos de dados**: Conexão direta com bancos de dados SQL
- **Sistemas de arquivos**: Repositórios de documentos

## Configurando Integrações Nativas

### Passo 1: Acessar o Catálogo de Integrações

1. Faça login na sua conta WhatsBotGPT
2. Acesse seu assistente
3. Clique na aba **Integrações**
4. Você verá o catálogo com todas as integrações disponíveis

### Passo 2: Selecionar e Ativar uma Integração

Vamos usar o Google Calendar como exemplo:

1. No catálogo, localize **Google Calendar**
2. Clique em **Configurar**
3. Clique em **Conectar com Google**
4. Faça login na sua conta Google quando solicitado
5. Autorize o acesso ao seu calendário
6. Selecione quais calendários deseja conectar
7. Configure as permissões (leitura, escrita, etc.)
8. Clique em **Salvar Configurações**

### Passo 3: Configurar Comportamentos

Após conectar, você precisa definir como seu assistente usará a integração:

1. Na mesma tela, vá para a seção **Comportamentos**
2. Configure:
   - **Gatilhos**: Quando o assistente deve usar esta integração
   - **Respostas**: Como o assistente deve comunicar os resultados
   - **Permissões**: O que o assistente pode fazer com esta integração
3. Clique em **Salvar Comportamentos**

### Passo 4: Testar a Integração

1. Vá para a aba **Testar**
2. Digite uma mensagem que deveria acionar a integração
   - Ex: "Agende uma reunião para amanhã às 14h"
3. Verifique se o assistente responde corretamente e executa a ação esperada
4. Ajuste as configurações se necessário

## Exemplo Prático: Integração com Stripe para Pagamentos

### Configuração Inicial

1. No catálogo de integrações, selecione **Stripe**
2. Clique em **Configurar**
3. Você precisará fornecer:
   - **Chave API**: Encontrada no painel do Stripe
   - **Chave Secreta**: Para autenticação segura
4. Configure quais produtos/serviços estarão disponíveis
5. Defina as opções de pagamento (parcelamento, descontos, etc.)
6. Clique em **Salvar Configurações**

### Configurando Comportamentos

1. Na seção **Comportamentos**, configure:
   - **Gatilhos de Pagamento**: Palavras ou frases que indicam intenção de compra
   - **Fluxo de Checkout**: Passos para finalizar uma compra
   - **Confirmações**: Mensagens de confirmação após pagamento
   - **Recibos**: Se e como enviar comprovantes
2. Clique em **Salvar Comportamentos**

### Testando a Integração de Pagamento

1. Na aba **Testar**, simule uma conversa de compra:
   - "Quero comprar o plano mensal"
   - "Como faço para pagar?"
2. Verifique se o assistente:
   - Apresenta as opções de pagamento
   - Gera um link de pagamento
   - Confirma quando o pagamento é concluído

## Configurando Integrações via API

Para sistemas que não possuem integração nativa, você pode criar conexões personalizadas:

### Passo 1: Criar uma Nova Integração API

1. Na aba **Integrações**, clique em **+ Nova Integração**
2. Selecione **Integração API Personalizada**
3. Dê um nome para sua integração
4. Clique em **Criar**

### Passo 2: Configurar Endpoints

1. Na tela de configuração, clique em **+ Adicionar Endpoint**
2. Configure:
   - **URL**: Endereço do endpoint da API externa
   - **Método**: GET, POST, PUT, DELETE, etc.
   - **Autenticação**: Tipo de autenticação necessária
   - **Headers**: Cabeçalhos necessários para a requisição
   - **Parâmetros**: Parâmetros que serão enviados
   - **Corpo da Requisição**: Para métodos POST/PUT
3. Clique em **Salvar Endpoint**
4. Repita para adicionar mais endpoints se necessário

### Passo 3: Mapear Respostas

1. Para cada endpoint, configure o mapeamento de resposta:
   - Defina quais campos da resposta serão utilizados
   - Configure transformações de dados se necessário
   - Defina como o assistente deve interpretar os códigos de status
2. Clique em **Salvar Mapeamento**

### Passo 4: Configurar Gatilhos

1. Na seção **Gatilhos**, defina quando cada endpoint será chamado:
   - **Palavras-chave**: Termos que ativam a integração
   - **Intenções**: Objetivos do usuário que requerem a integração
   - **Contexto**: Situações específicas para usar a integração
2. Clique em **Salvar Gatilhos**

## Configurando Bases de Conhecimento Externas

As bases de conhecimento permitem que seu assistente acesse informações específicas:

### Passo 1: Adicionar uma Base de Conhecimento

1. Na aba **Conhecimento**, clique em **+ Nova Base de Conhecimento**
2. Dê um nome descritivo
3. Selecione o tipo:
   - **Upload de Arquivos**: Para documentos locais
   - **URLs**: Para páginas web
   - **Conexão de Banco de Dados**: Para dados estruturados
4. Clique em **Criar**

### Passo 2: Adicionar Conteúdo

Para upload de arquivos:
1. Clique em **Adicionar Arquivos**
2. Selecione os documentos (PDF, DOCX, XLSX, etc.)
3. Aguarde o processamento

Para URLs:
1. Clique em **Adicionar URL**
2. Digite o endereço da página
3. Configure a profundidade de rastreamento (apenas esta página ou incluir links)
4. Clique em **Adicionar**

Para banco de dados:
1. Forneça os detalhes de conexão
2. Selecione as tabelas relevantes
3. Configure as permissões (somente leitura recomendado)
4. Teste a conexão

### Passo 3: Configurar Utilização

1. Na seção **Configurações de Uso**, defina:
   - **Prioridade**: Ordem em que as fontes serão consultadas
   - **Contexto**: Quando esta base deve ser utilizada
   - **Citações**: Se o assistente deve citar a fonte
2. Clique em **Salvar Configurações**

## Integrações Avançadas com Webhooks

Os webhooks permitem que sistemas externos notifiquem seu assistente sobre eventos:

### Configurando um Webhook Receptor

1. Na aba **Integrações**, clique em **Webhooks**
2. Clique em **+ Novo Webhook**
3. Configure:
   - **Nome**: Identificação do webhook
   - **Descrição**: Finalidade do webhook
   - **Segurança**: Token de autenticação
4. Clique em **Criar**
5. Copie a URL gerada para configurar no sistema externo

### Configurando Ações para Eventos de Webhook

1. Na mesma tela, vá para **Ações de Evento**
2. Clique em **+ Nova Ação**
3. Configure:
   - **Tipo de Evento**: O que deve acionar a ação
   - **Condições**: Filtros para executar apenas em casos específicos
   - **Ação**: O que deve acontecer (enviar mensagem, atualizar contato, etc.)
4. Clique em **Salvar Ação**

## Gerenciando Múltiplas Integrações

Quando seu assistente utiliza várias integrações, é importante gerenciá-las adequadamente:

### Definindo Prioridades

1. Na aba **Integrações**, clique em **Gerenciar Prioridades**
2. Arraste as integrações para reordenar sua prioridade
3. As integrações no topo serão utilizadas primeiro
4. Clique em **Salvar Ordem**

### Monitorando Uso e Desempenho

1. Na aba **Análises**, vá para **Desempenho de Integrações**
2. Visualize métricas como:
   - Taxa de sucesso por integração
   - Tempo de resposta
   - Frequência de uso
   - Erros comuns
3. Use esses dados para otimizar suas integrações

## Solução de Problemas Comuns

### Integração Não Está Sendo Acionada

Verifique:
- Se os gatilhos estão configurados corretamente
- Se as permissões estão ativas
- Se há conflitos com outras integrações de maior prioridade
- Se a integração está habilitada

### Erros de Autenticação

Se a integração falha com erros de autenticação:
1. Verifique se as credenciais estão corretas
2. Confirme se os tokens de acesso não expiraram
3. Reconecte a integração se necessário
4. Verifique se a conta externa não tem restrições de acesso

### Respostas Incorretas ou Incompletas

Se a integração funciona, mas retorna dados incorretos:
1. Verifique o mapeamento de resposta
2. Teste a API diretamente para confirmar os dados
3. Ajuste as transformações de dados se necessário
4. Verifique se há limitações na API externa

## Melhores Práticas para Integrações

- **Comece simples**: Implemente uma integração de cada vez e teste completamente
- **Documente tudo**: Mantenha registros de todas as configurações e credenciais
- **Monitore regularmente**: Verifique o desempenho e erros das integrações
- **Teste em ambiente controlado**: Sempre teste novas integrações antes de disponibilizar para usuários
- **Considere a privacidade**: Só compartilhe dados necessários com sistemas externos
- **Planeje redundâncias**: Tenha planos alternativos caso uma integração falhe
- **Mantenha-se atualizado**: Revise periodicamente suas integrações para garantir compatibilidade

## Exemplos de Casos de Uso

### Assistente de Vendas com CRM

Integre seu assistente com Salesforce ou HubSpot para:
- Registrar novos leads automaticamente
- Consultar histórico de clientes durante conversas
- Atualizar oportunidades com base nas interações
- Agendar reuniões com vendedores

### Assistente de Suporte com Base de Conhecimento

Conecte seu assistente a documentos de suporte para:
- Responder perguntas técnicas com precisão
- Fornecer links para documentação detalhada
- Manter-se atualizado com as últimas informações
- Escalar para humanos apenas quando necessário

### Assistente de E-commerce

Integre com plataformas como Shopify e Stripe para:
- Mostrar catálogo de produtos
- Verificar disponibilidade em tempo real
- Processar pedidos e pagamentos
- Fornecer atualizações de status de entrega

## Próximos Passos

Após configurar as integrações básicas, considere:

1. **Personalizar as instruções** do seu assistente para aproveitar ao máximo as integrações
2. **Criar fluxos de conversa** específicos para cada integração
3. **Treinar sua equipe** para entender como as integrações funcionam
4. **Coletar feedback dos usuários** para identificar oportunidades de melhoria

Para mais informações sobre como personalizar seu assistente, consulte nosso guia sobre [Personalizando Instruções e Personalidade](/assistentes/personalizando-instrucoes).
  `
};