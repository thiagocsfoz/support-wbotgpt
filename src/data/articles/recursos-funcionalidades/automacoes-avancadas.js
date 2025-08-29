export default {
  title: 'Automações Avançadas',
  description: 'Como configurar e utilizar recursos avançados de automação no WhatsBotGPT para otimizar seus fluxos de trabalho',
  content: `
# Automações Avançadas

O WhatsBotGPT oferece recursos poderosos de automação que permitem criar fluxos de trabalho complexos e personalizados. Este guia explora as funcionalidades avançadas de automação disponíveis na plataforma e como implementá-las para maximizar a eficiência dos seus assistentes.

## Visão Geral das Automações

As automações no WhatsBotGPT permitem que você:

- Crie fluxos de conversação complexos e condicionais
- Integre seus assistentes com sistemas externos
- Automatize tarefas repetitivas
- Personalize a experiência do cliente com base em dados e comportamentos
- Execute ações programadas sem intervenção manual

## Tipos de Automação Disponíveis

### 1. Fluxos de Conversação Avançados

Os fluxos de conversação vão além de simples perguntas e respostas, permitindo:

- **Ramificações condicionais**: Diferentes caminhos baseados nas respostas do usuário
- **Coleta estruturada de dados**: Formulários e sequências de perguntas
- **Validação de entradas**: Verificação de formatos e valores específicos
- **Loops e recursões**: Repetição de etapas quando necessário
- **Estados de conversação**: Manutenção de contexto ao longo do tempo

### 2. Automações Baseadas em Eventos

Ações que são disparadas automaticamente quando certos eventos ocorrem:

- **Eventos de mensagem**: Quando uma mensagem é recebida, lida ou respondida
- **Eventos de tempo**: Em horários específicos ou após períodos de inatividade
- **Eventos de usuário**: Quando um usuário entra, sai ou muda de status
- **Eventos de sistema**: Quando ocorrem mudanças na plataforma ou integrações

### 3. Automações Programadas

Ações que ocorrem em momentos específicos:

- **Agendamentos únicos**: Ações que ocorrem uma única vez em data/hora específica
- **Agendamentos recorrentes**: Ações que se repetem periodicamente
- **Sequências temporizadas**: Séries de ações com intervalos definidos
- **Gatilhos de calendário**: Ações baseadas em eventos de calendário

## Configurando Fluxos de Conversação Avançados

### Passo 1: Acessar o Editor de Fluxos

1. Faça login na sua conta WhatsBotGPT
2. Acesse seu assistente
3. Clique na aba **Fluxos de Conversação**
4. Clique em **+ Novo Fluxo** ou selecione um fluxo existente para editar

### Passo 2: Projetar o Fluxo

O editor visual permite criar fluxos complexos usando blocos de construção:

#### Blocos de Mensagem

1. Arraste um bloco de **Mensagem** para o canvas
2. Configure o conteúdo da mensagem
3. Adicione variáveis dinâmicas usando a sintaxe \${variavel}
4. Configure opções de formatação (negrito, itálico, listas)
5. Adicione mídia (imagens, vídeos, documentos) se necessário

#### Blocos de Entrada

1. Arraste um bloco de **Entrada** para o canvas
2. Defina a pergunta ou prompt
3. Selecione o tipo de entrada esperada:
   - Texto livre
   - Número
   - E-mail
   - Telefone
   - Data
   - Opções de múltipla escolha
4. Configure validações (obrigatório, formato, valores permitidos)
5. Defina mensagens de erro para validações falhas

#### Blocos de Condição

1. Arraste um bloco de **Condição** para o canvas
2. Configure a condição usando o editor de expressões
3. Crie múltiplos caminhos baseados em diferentes condições
4. Conecte cada caminho a diferentes blocos de ação
5. Adicione um caminho "Else" para tratar casos não previstos

#### Blocos de Ação

1. Arraste um bloco de **Ação** para o canvas
2. Selecione o tipo de ação:
   - Atualizar variável
   - Chamar API externa
   - Atualizar contato/lead
   - Enviar notificação
   - Transferir para humano
3. Configure os parâmetros específicos da ação
4. Defina comportamentos de sucesso e falha

### Passo 3: Conectar os Blocos

1. Clique na saída de um bloco e arraste até a entrada de outro bloco
2. Crie múltiplos caminhos a partir de blocos de condição
3. Verifique se todos os caminhos levam a um destino válido
4. Evite loops infinitos verificando suas condições de saída

### Passo 4: Testar o Fluxo

1. Clique no botão **Testar Fluxo**
2. Use o simulador para percorrer o fluxo
3. Teste diferentes entradas e caminhos
4. Verifique se as variáveis estão sendo atualizadas corretamente
5. Corrija quaisquer problemas identificados

### Passo 5: Ativar o Fluxo

1. Defina quando o fluxo deve ser acionado:
   - Palavras-chave específicas
   - Intenções detectadas
   - Eventos específicos
   - Manualmente por um operador
2. Configure prioridades se houver múltiplos fluxos
3. Clique em **Publicar Fluxo**

## Exemplo Prático: Fluxo de Qualificação de Leads

Vamos criar um fluxo avançado para qualificar leads:

### Configuração Inicial

1. Crie um novo fluxo chamado "Qualificação de Leads"
2. Defina o gatilho como a palavra-chave "orçamento" ou intenção "solicitar_orcamento"

### Estrutura do Fluxo

1. **Mensagem de Boas-vindas**:
   "Olá \${nome}! Ótimo que você está interessado em nossos serviços. Para enviar uma proposta personalizada, preciso de algumas informações."

2. **Coleta de Informações da Empresa**:
   - Pergunta: "Qual o nome da sua empresa?"
   - Tipo: Texto livre
   - Variável: empresa
   - Validação: Obrigatório

3. **Coleta de Segmento**:
   - Pergunta: "Qual o segmento da sua empresa?"
   - Tipo: Múltipla escolha
   - Opções: "Comércio", "Serviços", "Indústria", "Outro"
   - Variável: segmento

4. **Coleta de Tamanho**:
   - Pergunta: "Quantos funcionários sua empresa tem aproximadamente?"
   - Tipo: Múltipla escolha
   - Opções: "1-10", "11-50", "51-200", "Mais de 200"
   - Variável: tamanho

5. **Coleta de Orçamento**:
   - Pergunta: "Qual o orçamento aproximado para este projeto?"
   - Tipo: Múltipla escolha
   - Opções: "Até R$ 5.000", "R$ 5.001 a R$ 15.000", "R$ 15.001 a R$ 50.000", "Acima de R$ 50.000"
   - Variável: orcamento

6. **Coleta de Prazo**:
   - Pergunta: "Qual o prazo para implementação?"
   - Tipo: Múltipla escolha
   - Opções: "Urgente (até 15 dias)", "Curto (1-2 meses)", "Médio (3-6 meses)", "Longo (mais de 6 meses)"
   - Variável: prazo

7. **Condição de Qualificação**:
   - Se orcamento = "Acima de R$ 50.000" OU (orcamento = "R$ 15.001 a R$ 50.000" E tamanho = "Mais de 200")
     - Classificar como "Lead Quente"
     - Enviar para atendimento humano imediato
   - Senão, se orcamento = "R$ 5.001 a R$ 15.000" OU prazo = "Urgente (até 15 dias)"
     - Classificar como "Lead Morno"
     - Agendar follow-up em 24h
   - Senão
     - Classificar como "Lead Frio"
     - Enviar material informativo

8. **Ações Finais**:
   - Atualizar dados do lead no CRM
   - Enviar notificação para equipe de vendas
   - Agradecer ao cliente pela informação

## Automações Baseadas em Eventos

### Configurando Gatilhos de Evento

1. Acesse **Automações** > **Gatilhos de Evento**
2. Clique em **+ Novo Gatilho**
3. Selecione o tipo de evento:
   - **Mensagem recebida**: Quando um cliente envia uma mensagem
   - **Inatividade**: Quando um cliente fica sem interagir por um período
   - **Horário específico**: Em determinado momento do dia
   - **Status alterado**: Quando um lead muda de status
4. Configure as condições específicas do evento
5. Defina a ação a ser executada quando o evento ocorrer
6. Ative o gatilho

### Exemplo: Reengajamento de Clientes Inativos

1. Crie um novo gatilho de evento do tipo "Inatividade"
2. Configure para acionar após 48 horas sem interação
3. Adicione condições:
   - Cliente já interagiu pelo menos 3 vezes
   - Não está marcado como "Não perturbar"
4. Configure a ação:
   - Enviar mensagem: "Olá \${nome}, notamos que faz um tempo desde nossa última conversa. Há algo em que possamos ajudar?"
   - Adicionar etiqueta "Reengajamento"
   - Registrar tentativa no CRM

## Automações Programadas

### Configurando Agendamentos

1. Acesse **Automações** > **Agendamentos**
2. Clique em **+ Novo Agendamento**
3. Selecione o tipo:
   - **Único**: Ocorre uma vez em data/hora específica
   - **Recorrente**: Repete-se em intervalos definidos
   - **Baseado em evento**: Ocorre após um evento específico
4. Configure data, hora e recorrência (se aplicável)
5. Defina a ação a ser executada
6. Ative o agendamento

### Exemplo: Campanha de Marketing Programada

1. Crie um novo agendamento do tipo "Recorrente"
2. Configure para ocorrer toda segunda-feira às 10h
3. Defina o público-alvo:
   - Leads com etiqueta "Interessado em Promoções"
   - Não contatados nos últimos 15 dias
4. Configure a ação:
   - Enviar mensagem com oferta da semana
   - Incluir botão de call-to-action
   - Registrar envio no sistema de analytics

## Integrando Automações com APIs Externas

### Configurando Webhooks

1. Acesse **Automações** > **Webhooks**
2. Clique em **+ Novo Webhook**
3. Configure:
   - **URL**: Endpoint da API externa
   - **Método**: GET, POST, PUT, DELETE
   - **Cabeçalhos**: Autenticação e outros cabeçalhos necessários
   - **Corpo da requisição**: Dados a serem enviados
4. Configure quando o webhook deve ser acionado
5. Defina o tratamento de respostas e erros
6. Teste o webhook antes de ativá-lo

### Exemplo: Integração com CRM

1. Configure um webhook para o endpoint do seu CRM
2. Defina para acionar quando um lead for qualificado como "Quente"
3. Configure o corpo da requisição para incluir:
   - Dados do contato (nome, telefone, email)
   - Informações coletadas durante a qualificação
   - Score de qualificação
   - Timestamp da qualificação
4. Configure o tratamento de resposta:
   - Se sucesso: Adicionar etiqueta "Sincronizado com CRM"
   - Se erro: Notificar administrador e tentar novamente em 1 hora

## Automações com Lógica Complexa

### Utilizando Variáveis e Expressões

O sistema de automação suporta variáveis e expressões complexas:

1. **Variáveis de sistema**:
   - \${contact.name}: Nome do contato
   - \${contact.phone}: Telefone do contato
   - \${contact.tags}: Etiquetas do contato
   - \${conversation.lastMessage}: Última mensagem da conversa
   - \${assistant.name}: Nome do assistente

2. **Variáveis personalizadas**:
   - Defina suas próprias variáveis no fluxo
   - Armazene respostas do usuário
   - Calcule valores derivados

3. **Expressões condicionais**:
   - Operadores lógicos: AND, OR, NOT
   - Operadores de comparação: =, !=, >, <, >=, <=
   - Funções: contains(), startsWith(), endsWith(), length()

4. **Manipulação de texto**:
   - concat(): Concatenar strings
   - substring(): Extrair parte de uma string
   - toLowerCase()/toUpperCase(): Converter case
   - trim(): Remover espaços em branco

### Exemplo de Expressão Complexa

Para qualificar um lead com base em múltiplos critérios:

(contact.tags.contains('VIP') OR conversation.messageCount > 5) AND
(orcamento == 'Alto' OR (interesse == 'Imediato' AND prazo == 'Urgente'))

## Melhores Práticas para Automações Avançadas

### Planejamento e Documentação

1. **Mapeie o fluxo antes de implementar**:
   - Use ferramentas de fluxograma para planejar
   - Identifique todos os caminhos possíveis
   - Documente decisões e lógica

2. **Mantenha documentação atualizada**:
   - Descreva o propósito de cada automação
   - Documente variáveis e sua utilização
   - Registre alterações e versões

### Teste e Validação

1. **Teste exaustivamente**:
   - Simule diferentes entradas e cenários
   - Teste casos extremos e exceções
   - Verifique todos os caminhos possíveis

2. **Implemente gradualmente**:
   - Comece com fluxos simples
   - Adicione complexidade incrementalmente
   - Valide cada adição antes de prosseguir

### Monitoramento e Otimização

1. **Monitore o desempenho**:
   - Acompanhe taxas de conclusão dos fluxos
   - Identifique pontos de abandono
   - Analise tempo de resposta e eficiência

2. **Otimize continuamente**:
   - Simplifique fluxos complexos
   - Elimine etapas desnecessárias
   - Ajuste com base no feedback dos usuários

## Solução de Problemas Comuns

### Loops Infinitos

**Sintoma**: O fluxo continua repetindo as mesmas etapas sem parar.

**Solução**:
1. Verifique as condições de saída dos loops
2. Adicione contadores para limitar o número de iterações
3. Certifique-se de que variáveis de controle são atualizadas

### Condições Nunca Satisfeitas

**Sintoma**: Um caminho específico nunca é seguido, mesmo quando deveria.

**Solução**:
1. Verifique a sintaxe da expressão condicional
2. Confirme se as variáveis contêm os valores esperados
3. Adicione logs para depurar os valores em tempo real
4. Simplifique condições complexas em múltiplas condições simples

### Problemas de Integração

**Sintoma**: As chamadas para sistemas externos falham.

**Solução**:
1. Verifique as credenciais e tokens de acesso
2. Confirme o formato correto dos dados enviados
3. Implemente tratamento de erros e retentativas
4. Verifique limites de taxa e quotas da API externa

## Casos de Uso Avançados

### Atendimento Omnichannel

Configure automações que mantêm o contexto entre diferentes canais:

1. Identifique o cliente independentemente do canal
2. Mantenha histórico unificado de interações
3. Retome conversas de onde pararam, mesmo em canais diferentes
4. Personalize respostas com base no canal atual

### Automação de Processos de Vendas

Crie um funil de vendas automatizado:

1. Qualificação inicial de leads
2. Apresentação personalizada de produtos
3. Resposta a objeções comuns
4. Geração automática de propostas
5. Acompanhamento pós-venda programado

### Suporte Técnico Inteligente

Implemente um sistema de suporte escalonável:

1. Diagnóstico inicial automatizado
2. Resolução de problemas comuns sem intervenção humana
3. Coleta de informações técnicas relevantes
4. Escalonamento inteligente para o nível adequado de suporte
5. Acompanhamento automático após resolução

## Recursos Adicionais

Para aprofundar seus conhecimentos em automações avançadas:

1. **Documentação técnica completa**: Disponível em nossa [base de conhecimento](/)
2. **Webinars de treinamento**: Sessões mensais sobre recursos avançados
3. **Biblioteca de modelos**: Fluxos pré-configurados para casos de uso comuns
4. **Comunidade de usuários**: Fórum para compartilhar práticas e soluções

Para informações sobre campanhas de marketing automatizadas, consulte nosso guia sobre [Campanhas de Marketing](/recursos-funcionalidades/campanhas-marketing).
  `
};
