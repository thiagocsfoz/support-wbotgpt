export default {
  title: 'Agenda e Agendamentos',
  description: 'Como utilizar o recurso de agenda para gerenciar compromissos e agendamentos através do seu assistente',
  content: `
# Agenda e Agendamentos

O recurso de Agenda do WhatsBotGPT permite que seu assistente virtual gerencie compromissos e agendamentos diretamente pelo WhatsApp, oferecendo uma experiência fluida para seus clientes marcarem horários com sua empresa.

## Visão Geral do Recurso

Com a funcionalidade de Agenda, seu assistente pode:

- Mostrar horários disponíveis para agendamentos
- Confirmar compromissos com clientes
- Enviar lembretes automáticos
- Gerenciar cancelamentos e remarcações
- Sincronizar com outros calendários (Google Calendar, Outlook, etc.)

## Configurando a Agenda

### Passo 1: Ativar o Recurso

1. Acesse o painel do WhatsBotGPT
2. Vá para **Configurações** > **Recursos**
3. Localize a opção **Agenda e Agendamentos**
4. Clique no botão de alternância para ativar
5. Clique em **Salvar Alterações**

### Passo 2: Configurações Básicas

1. Ainda na seção de Agenda, configure:
   - **Horário de Funcionamento**: Defina os dias e horários em que sua empresa atende
   - **Duração Padrão**: Tempo padrão para cada compromisso (ex: 30 minutos, 1 hora)
   - **Intervalo entre Compromissos**: Tempo de preparação entre um compromisso e outro
   - **Antecedência Mínima**: Quanto tempo antes um cliente pode agendar (ex: 2 horas, 1 dia)
   - **Antecedência Máxima**: Com quanto tempo de antecedência um cliente pode agendar (ex: 30 dias)

2. Clique em **Salvar Configurações**

### Passo 3: Configurar Serviços

Os serviços são os tipos de compromissos que seus clientes podem agendar.

1. Na seção de Agenda, clique na aba **Serviços**
2. Clique em **+ Adicionar Serviço**
3. Preencha as informações:
   - **Nome do Serviço**: Ex: "Consulta", "Corte de Cabelo", "Reunião"
   - **Descrição**: Breve explicação sobre o serviço
   - **Duração**: Tempo necessário para este serviço específico
   - **Preço** (opcional): Valor cobrado pelo serviço
   - **Cor**: Para identificação visual no calendário
4. Clique em **Salvar Serviço**
5. Repita o processo para adicionar mais serviços

### Passo 4: Configurar Profissionais (Opcional)

Se sua empresa tem vários profissionais que atendem os clientes:

1. Na seção de Agenda, clique na aba **Profissionais**
2. Clique em **+ Adicionar Profissional**
3. Preencha as informações:
   - **Nome**: Nome do profissional
   - **Especialidade**: Área de atuação
   - **Serviços Oferecidos**: Selecione quais serviços este profissional realiza
   - **Horários Específicos** (opcional): Se o profissional tem horários diferentes do padrão
4. Clique em **Salvar Profissional**

### Passo 5: Configurar Lembretes

Os lembretes automáticos ajudam a reduzir faltas e atrasos:

1. Na seção de Agenda, clique na aba **Lembretes**
2. Clique em **+ Adicionar Lembrete**
3. Configure:
   - **Antecedência**: Quando o lembrete será enviado (ex: 1 dia antes, 2 horas antes)
   - **Mensagem**: Texto que será enviado ao cliente
   - **Incluir Botões de Confirmação**: Opção para o cliente confirmar ou cancelar
4. Clique em **Salvar Lembrete**
5. Você pode adicionar múltiplos lembretes para cada agendamento

## Integrando a Agenda ao seu Assistente

Para que seu assistente possa gerenciar agendamentos, você precisa configurá-lo adequadamente:

### Passo 1: Habilitar a Integração

1. Acesse seu assistente
2. Vá para a aba **Integrações**
3. Localize **Agenda e Agendamentos**
4. Clique em **Ativar Integração**

### Passo 2: Personalizar as Mensagens

1. Na mesma seção, configure as mensagens que o assistente usará para:
   - **Oferta de Agendamento**: Como o assistente oferecerá a opção de agendar
   - **Confirmação**: Mensagem após agendamento bem-sucedido
   - **Cancelamento**: Resposta quando um cliente cancela
   - **Remarcação**: Processo para remarcar um compromisso

2. Clique em **Salvar Mensagens**

### Passo 3: Configurar Gatilhos

Os gatilhos determinam quando seu assistente deve oferecer agendamentos:

1. Na seção de integrações, configure **Gatilhos de Agendamento**:
   - **Palavras-chave**: Termos que ativam a oferta de agendamento (ex: "agendar", "marcar", "horário")
   - **Contexto**: Em quais situações o assistente deve sugerir agendamento
   - **Proatividade**: Se o assistente deve oferecer agendamento proativamente

2. Clique em **Salvar Gatilhos**

## Como Funciona para o Cliente

Quando configurado corretamente, o processo de agendamento para o cliente é simples:

1. O cliente inicia uma conversa com seu número de WhatsApp
2. Durante a conversa, o cliente expressa interesse em agendar (ou o assistente oferece proativamente)
3. O assistente apresenta os serviços disponíveis
4. Após a escolha do serviço, o assistente mostra os dias disponíveis
5. O cliente seleciona o dia desejado
6. O assistente apresenta os horários disponíveis naquele dia
7. O cliente escolhe o horário
8. O assistente confirma o agendamento e envia um resumo
9. Lembretes são enviados automaticamente conforme configurado

## Gerenciando a Agenda

### Visualizando Compromissos

1. No painel do WhatsBotGPT, acesse **Agenda**
2. Você verá um calendário com todos os compromissos
3. Use os filtros para visualizar por:
   - Serviço
   - Profissional
   - Status (confirmado, pendente, cancelado)
   - Período (dia, semana, mês)

### Adicionando Compromissos Manualmente

Você também pode adicionar compromissos que não foram agendados pelo assistente:

1. No calendário, clique no dia e horário desejado
2. Preencha as informações do compromisso
3. Clique em **Salvar Compromisso**

### Bloqueando Horários

Para períodos em que não haverá atendimento:

1. No calendário, clique em **Bloquear Horário**
2. Selecione o período que deseja bloquear
3. Adicione um motivo (opcional)
4. Escolha se é um bloqueio recorrente (semanal, mensal)
5. Clique em **Salvar Bloqueio**

## Integrações com Outros Calendários

O WhatsBotGPT permite sincronizar sua agenda com outros sistemas de calendário:

### Google Calendar

1. Vá para **Configurações** > **Integrações**
2. Clique em **Conectar** ao lado de Google Calendar
3. Faça login com sua conta Google
4. Autorize o acesso
5. Selecione qual calendário deseja sincronizar
6. Configure a sincronização:
   - **Bidirecional**: Eventos são atualizados em ambos os sistemas
   - **Apenas Exportar**: Eventos do WhatsBotGPT são enviados para o Google
   - **Apenas Importar**: Eventos do Google são importados para o WhatsBotGPT

### Microsoft Outlook

1. Vá para **Configurações** > **Integrações**
2. Clique em **Conectar** ao lado de Microsoft Outlook
3. Faça login com sua conta Microsoft
4. Autorize o acesso
5. Configure as opções de sincronização

## Relatórios e Análises

Para acompanhar o desempenho do sistema de agendamentos:

1. Acesse **Relatórios** > **Agenda**
2. Visualize métricas como:
   - Total de agendamentos por período
   - Taxa de comparecimento
   - Serviços mais populares
   - Horários de maior demanda
   - Taxa de cancelamento

Estes dados podem ajudar a otimizar sua disponibilidade e oferta de serviços.

## Dicas para Uso Eficiente

- **Configure intervalos realistas** entre compromissos para evitar atrasos
- **Personalize os lembretes** para reduzir faltas
- **Revise regularmente** os relatórios para identificar padrões e otimizar sua agenda
- **Treine seu assistente** com exemplos de como lidar com pedidos específicos de agendamento
- **Ofereça opções de remarcação** quando um horário desejado não estiver disponível

## Solução de Problemas Comuns

### Horários Indisponíveis Incorretamente

Se horários que deveriam estar disponíveis aparecem como ocupados:
- Verifique se não há bloqueios de horário ativos
- Confirme se o horário de funcionamento está configurado corretamente
- Verifique se não há conflitos com outros compromissos

### Clientes Não Recebem Lembretes

Se os lembretes não estão sendo enviados:
- Confirme se os lembretes estão ativados
- Verifique se o número do cliente está correto
- Certifique-se de que a conexão do WhatsApp está ativa

### Conflitos de Agendamento

Se ocorrerem agendamentos duplicados:
- Verifique a configuração de intervalo entre compromissos
- Confirme se a sincronização com outros calendários está funcionando corretamente
- Verifique se múltiplos assistentes não estão oferecendo o mesmo horário simultaneamente

Para mais informações sobre recursos avançados de automação, consulte nossa página sobre [Automações Avançadas](/recursos-funcionalidades/automacoes-avancadas).
  `
};