export default {
  title: 'Qualificação de Leads',
  description: 'Estratégias e técnicas para qualificar leads eficientemente usando o WhatsBotGPT',
  content: `
# Qualificação de Leads

A qualificação de leads é um processo essencial para identificar quais contatos têm maior potencial de se tornarem clientes. O WhatsBotGPT oferece ferramentas poderosas para automatizar e otimizar esse processo, permitindo que você foque seus esforços nos leads mais promissores.

## O que é Qualificação de Leads?

Qualificação de leads é o processo de avaliar o potencial de um lead (contato) se tornar um cliente, com base em critérios como:

- Interesse no produto/serviço
- Capacidade de compra
- Autoridade para tomar decisões
- Necessidade do produto/serviço
- Timing (momento adequado para compra)

Uma qualificação eficiente permite que você:
- Priorize seus esforços de vendas
- Personalize a abordagem para cada perfil
- Aumente a taxa de conversão
- Reduza o ciclo de vendas

## Metodologias de Qualificação no WhatsBotGPT

O WhatsBotGPT suporta diferentes metodologias de qualificação de leads:

### 1. Metodologia BANT

BANT é um acrônimo para:
- **B**udget (Orçamento): O lead tem recursos financeiros?
- **A**uthority (Autoridade): O lead pode tomar decisões de compra?
- **N**eed (Necessidade): O lead tem uma necessidade clara?
- **T**iming (Timing): Quando o lead pretende implementar a solução?

Para configurar a qualificação BANT:

1. Acesse **Configurações** > **Leads e Contatos**
2. Clique em **Metodologias de Qualificação**
3. Selecione **BANT**
4. Configure as perguntas para cada critério
5. Defina os pesos para cada resposta
6. Clique em **Salvar Configurações**

### 2. Metodologia MEDDIC

Para vendas B2B mais complexas, o WhatsBotGPT oferece suporte à metodologia MEDDIC:
- **M**etrics (Métricas): Impacto mensurável da solução
- **E**conomic Buyer (Comprador Econômico): Quem tem autoridade financeira
- **D**ecision Criteria (Critérios de Decisão): Fatores para avaliação
- **D**ecision Process (Processo de Decisão): Como as decisões são tomadas
- **I**dentify Pain (Identificar Dor): Problemas que sua solução resolve
- **C**hampion (Defensor): Contato interno que defende sua solução

Para configurar:

1. Acesse **Configurações** > **Leads e Contatos**
2. Clique em **Metodologias de Qualificação**
3. Selecione **MEDDIC**
4. Configure as perguntas e critérios
5. Clique em **Salvar Configurações**

### 3. Metodologia Personalizada

Você também pode criar sua própria metodologia de qualificação:

1. Acesse **Configurações** > **Leads e Contatos**
2. Clique em **Metodologias de Qualificação**
3. Selecione **Personalizada**
4. Clique em **+ Adicionar Critério**
5. Para cada critério:
   - Defina um nome
   - Crie perguntas associadas
   - Configure pontuações para as respostas
   - Defina o peso do critério na pontuação final
6. Configure os níveis de qualificação (ex: Frio, Morno, Quente)
7. Clique em **Salvar Metodologia**

## Configurando seu Assistente para Qualificação

Para que seu assistente virtual colete informações de qualificação automaticamente:

### Passo 1: Habilitar Coleta de Informações

1. Acesse seu assistente
2. Vá para a aba **Configurações**
3. Clique em **Qualificação de Leads**
4. Ative a opção **Coletar Informações de Qualificação**
5. Selecione a metodologia que deseja utilizar
6. Clique em **Salvar**

### Passo 2: Configurar Perguntas de Qualificação

1. Na mesma seção, clique em **Configurar Perguntas**
2. Para cada critério de qualificação:
   - Personalize as perguntas que o assistente fará
   - Defina quando as perguntas devem ser feitas (início da conversa, após interesse, etc.)
   - Configure como interpretar as respostas
3. Clique em **Salvar Perguntas**

### Passo 3: Definir Fluxos Baseados em Qualificação

1. Vá para a aba **Fluxos de Conversa**
2. Crie fluxos diferentes para cada nível de qualificação
3. Por exemplo:
   - Leads "Quentes": Oferecer demonstração ou contato com vendedor
   - Leads "Mornos": Enviar materiais educativos e nutrir
   - Leads "Frios": Manter em lista para futuras campanhas
4. Clique em **Salvar Fluxos**

## Qualificação Manual de Leads

Além da qualificação automática, você pode qualificar leads manualmente:

1. Na lista de leads, selecione o lead que deseja qualificar
2. No painel lateral, localize a seção **Qualificação**
3. Clique em **Avaliar Lead**
4. Preencha os critérios de qualificação
5. Adicione notas sobre o lead
6. Clique em **Salvar Avaliação**

O sistema calculará automaticamente a pontuação e classificará o lead de acordo com os critérios configurados.

## Lead Scoring (Pontuação de Leads)

O WhatsBotGPT utiliza um sistema de pontuação para classificar leads automaticamente:

### Como Funciona o Lead Scoring

1. Cada interação e resposta do lead recebe uma pontuação
2. Critérios demográficos e comportamentais são considerados
3. A pontuação total determina o nível de qualificação
4. Leads são classificados automaticamente com base na pontuação

### Configurando o Lead Scoring

1. Acesse **Configurações** > **Leads e Contatos**
2. Clique em **Lead Scoring**
3. Configure os pontos para:
   - **Interações**: Número de conversas, tempo de resposta, etc.
   - **Comportamento**: Cliques em links, visualização de materiais, etc.
   - **Dados demográficos**: Cargo, tamanho da empresa, setor, etc.
   - **Respostas específicas**: Pontos para respostas a perguntas-chave
4. Defina os limiares de pontuação para cada nível (Frio, Morno, Quente)
5. Clique em **Salvar Configurações**

## Automações Baseadas em Qualificação

Crie automações para agir com base na qualificação dos leads:

### Notificações para Vendedores

1. Acesse **Automações** > **Notificações**
2. Clique em **+ Nova Notificação**
3. Configure o gatilho: **Lead Qualificado como "Quente"**
4. Defina a ação: **Notificar Equipe de Vendas**
5. Personalize a mensagem de notificação
6. Selecione os canais de notificação (e-mail, SMS, etc.)
7. Clique em **Salvar Automação**

### Atribuição Automática

1. Acesse **Automações** > **Atribuição de Leads**
2. Clique em **+ Nova Regra**
3. Configure o gatilho: **Lead atinge pontuação X**
4. Defina a ação: **Atribuir a vendedor específico**
5. Configure critérios adicionais (região, produto de interesse, etc.)
6. Clique em **Salvar Regra**

### Campanhas de Nutrição

1. Acesse **Automações** > **Campanhas**
2. Clique em **+ Nova Campanha**
3. Selecione o tipo: **Nutrição de Leads**
4. Configure o gatilho: **Lead classificado como "Morno"**
5. Defina a sequência de mensagens
6. Configure o cronograma de envio
7. Clique em **Ativar Campanha**

## Análise e Otimização

O WhatsBotGPT oferece ferramentas para analisar e melhorar seu processo de qualificação:

### Relatórios de Qualificação

1. Acesse **Relatórios** > **Qualificação de Leads**
2. Visualize métricas como:
   - Distribuição de leads por nível de qualificação
   - Tempo médio para qualificação
   - Taxa de conversão por nível
   - Eficácia das perguntas de qualificação
3. Use os filtros para analisar períodos específicos

### Otimizando o Processo

Com base nos relatórios, você pode otimizar seu processo:

1. Identifique perguntas que não estão gerando respostas úteis
2. Ajuste os pesos dos critérios para melhorar a precisão
3. Refine os limiares de pontuação se muitos leads estiverem em uma categoria
4. Teste diferentes abordagens e compare os resultados

## Integrando Qualificação com CRM

O WhatsBotGPT pode sincronizar dados de qualificação com seu CRM:

1. Acesse **Configurações** > **Integrações**
2. Selecione seu sistema de CRM
3. Na seção **Mapeamento de Campos**, configure:
   - Como os critérios de qualificação serão mapeados
   - Quais pontuações serão sincronizadas
   - Como os níveis de qualificação serão representados
4. Defina a frequência de sincronização
5. Clique em **Salvar Configurações**

## Estratégias Avançadas de Qualificação

### Qualificação Progressiva

Em vez de fazer todas as perguntas de uma vez, configure seu assistente para qualificar progressivamente:

1. Comece com perguntas básicas e não invasivas
2. À medida que o lead demonstra interesse, faça perguntas mais específicas
3. Distribua as perguntas ao longo de várias interações
4. Use o contexto da conversa para fazer perguntas naturalmente

Para configurar:

1. Acesse seu assistente
2. Vá para **Qualificação de Leads** > **Configurações Avançadas**
3. Ative **Qualificação Progressiva**
4. Configure os estágios e gatilhos
5. Clique em **Salvar**

### Requalificação Automática

Configure o sistema para requalificar leads periodicamente:

1. Acesse **Configurações** > **Leads e Contatos**
2. Clique em **Requalificação**
3. Configure:
   - Frequência de requalificação (30 dias, 60 dias, etc.)
   - Gatilhos para requalificação (nova interação, visita ao site, etc.)
   - Perguntas específicas para requalificação
4. Clique em **Salvar Configurações**

## Melhores Práticas para Qualificação de Leads

- **Seja conciso**: Faça perguntas diretas e fáceis de responder
- **Respeite o tempo**: Distribua as perguntas ao longo da conversa
- **Personalize**: Adapte as perguntas ao contexto e ao setor do lead
- **Equilibre**: Não foque apenas em um critério (como orçamento)
- **Analise constantemente**: Revise e ajuste seu processo regularmente
- **Treine seu assistente**: Forneça exemplos de boas conversas de qualificação
- **Combine automação e toque humano**: Use o assistente para qualificação inicial, mas envolva pessoas para leads promissores

## Exemplos de Perguntas de Qualificação

### Para Orçamento/Budget:
- "Você já definiu um orçamento para implementar uma solução como esta?"
- "Qual faixa de investimento você considera adequada para resolver esse desafio?"

### Para Autoridade/Authority:
- "Além de você, quem mais participa do processo de decisão?"
- "Como normalmente são tomadas as decisões de compra na sua empresa?"

### Para Necessidade/Need:
- "Quais desafios específicos você está enfrentando atualmente?"
- "Como você está resolvendo esse problema hoje?"

### Para Timing:
- "Qual seria o prazo ideal para implementar uma solução?"
- "Existe alguma data limite para resolver esse desafio?"

Para mais informações sobre como gerenciar seus leads após a qualificação, consulte nosso guia sobre [Gerenciando Leads](/leads-contatos/gerenciando-leads).
  `
};